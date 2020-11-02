import { IonicPage } from 'ionic-angular';
import { Component, Injector, ElementRef, ViewChild } from '@angular/core';
import { ActionSheetController,PopoverController } from 'ionic-angular';
import { BasePage } from '../base-page/base-page';
import { Place } from '../../providers/place-service';
import { MapStyle } from '../../providers/map-style';
import { ParseFile } from '../../providers/parse-file-service';
import { Category } from '../../providers/categories';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Geolocation, GeolocationOptions } from '@ionic-native/geolocation';
import { AppConfig } from '../../app/app.config';
import swal from 'sweetalert';
import { CancionPopoverPage } from '../concion-popover/concion-popover';


@IonicPage()
@Component({
  selector: 'page-add-place-page',
  templateUrl: 'add-place-page.html'
})
export class AddPlacePage extends BasePage {

  @ViewChild('map') mapElement: ElementRef;

  private form: FormGroup;
  private categories: Category[] = [];
  private image: any;
  private location: { lat?: number, lng?: number } = {};

  private map: any;
  private geocoder: any;
  private marker: any;
  private mapInitialised: boolean = false;

  constructor(injector: Injector,
    private camera: Camera,
    private geolocation: Geolocation,
    private categoryService: Category,
        public popoverCtrl: PopoverController,
    private actionSheetCtrl: ActionSheetController) {

    super(injector);

    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      category: new FormControl(null, Validators.required),
      description: new FormControl('', Validators.required),
      address: new FormControl(''),
      phone: new FormControl(''),
      website: new FormControl('')
    });
  }

  enableMenuSwipe() {
    return true;
  }

  ionViewDidLoad() {

    if (typeof google == 'undefined' || typeof google.maps == 'undefined') {
      this.loadGoogleMaps()
    } else {
      this.initMap();
    }
  }
    openPopover(myEvent) {
   //this.navctrl.setRoot(CancionPopoverPage,{event})
   let popover =  this.popoverCtrl.create(CancionPopoverPage);
    popover.present({

           ev: myEvent

    });

  }

  ionViewDidEnter() {
    this.categoryService.load().then(categories => {
      this.categories = categories;
    }).catch(err => console.warn(err.message))
  }

  loadGoogleMaps() {

    window['mapInit'] = () => {
      this.initMap();
    }

    const apiKey = AppConfig.GOOGLE_MAPS_API_KEY;

    let script = document.createElement('script');
    script.id = 'googleMaps';
    script.src = `https://maps.google.com/maps/api/js?key=${apiKey}&callback=mapInit`;
    document.body.appendChild(script);

  }

  async initMap() {

    this.geocoder = new google.maps.Geocoder();
    this.mapInitialised = true;

    let mapOptions: any = {
      styles: MapStyle.light(),
      zoom: 2,
      center: {lat: 0, lng: 0},
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    try {

      const options: GeolocationOptions = {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 60000
      };
  
      let pos = await this.geolocation.getCurrentPosition(options);

      this.location.lat = pos.coords.latitude;
      this.location.lng = pos.coords.longitude;

      this.marker = new google.maps.Marker({
        icon: {
          url: './assets/img/pin.png',
          scaledSize: new google.maps.Size(32, 32),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(0, 0)
        },
          draggable:true,

        position: {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        },
        map: this.map,
      });

      this.map.panTo(this.location);
      this.map.setZoom(15);

    } catch (err) {
      console.warn(err.message);
      this.translate.get('ERROR_LOCATION_UNAVAILABLE').subscribe(str => this.showToast(str));
    }
  }

  onSearchAddress(event: any) {

    if (!this.mapInitialised) return;

    let query = event.target.value;

    this.geocoder.geocode({ address: query }, (results, status) => {

      if (status === 'OK') {
        const target = results[0].geometry.location;
        this.map.panTo(target);
        this.map.setZoom(15);
        this.marker.setPosition(target);
        
        this.location.lat = target.lat();
        this.location.lng = target.lng();
      }

    });
  }

  async chooseImage(sourceType: number) {

    try {

      let options: CameraOptions = {
        sourceType: sourceType,
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth: 1000,
        targetHeight: 1000,
        quality: 80,
      }

      const imageData = await this.camera.getPicture(options);

      await this.showLoadingView();

      this.image = await ParseFile.upload(imageData);

      this.showContentView();
      this.translate.get('FILE_UPLOADED').subscribe(str => this.showToast(str));

    } catch (error) {
      this.showContentView();
      this.translate.get('ERROR_NETWORK').subscribe(str => this.showToast(str));
    }

  }

  async onUpload() {

    try {

      const trans = await this.getTrans([
        'PHOTO_LIBRARY',
        'CAMERA',
        'CANCEL',
        'CHOOSE_AN_OPTION']
      );
  
      let actionSheet = this.actionSheetCtrl.create({
        title: trans.CHOOSE_AN_OPTION,
        buttons: [{
          text: trans.PHOTO_LIBRARY,
          handler: () => {
            this.chooseImage(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        }, {
          text: trans.CAMERA,
          handler: () => {
            this.chooseImage(this.camera.PictureSourceType.CAMERA);
          }
        },{
          text: trans.CANCEL,
          role: 'cancel'
        }]
      });

      actionSheet.present();
      
    } catch (error) {
      console.warn(error);
    }
  }

  preparePlaceData(): Place {
    
    let place = new Place;

    place.title = this.form.value.name;
    place.category = this.form.value.category;
    place.description = this.form.value.description;
    place.address = this.form.value.address;
    place.website = this.form.value.website;
    place.phone = this.form.value.phone;
    place.image = this.image;

    if (this.location) {
      
      let position = {
        lat: this.location.lat,
        lng: this.location.lng
      };

      place.location = position;
    }

    return place;
  }

  async onSubmit() {

    if (this.form.invalid) {
      const trans = await this.getTrans('INVALID_FORM');
      return this.showToast(trans);
    }

    if (!this.location) {
      const trans = await this.getTrans('INVALID_LOCATION');
      return this.showToast(trans);
    }

    if (!this.image) {
      const trans = await this.getTrans('INVALID_PHOTO');
      return this.showToast(trans);
    }

    try {
      
      await this.showLoadingView();
      
      let place = this.preparePlaceData();
      await place.save();

      this.form.reset();

      const trans = await this.getTrans(['GOOD_JOB','PLACE_ADDED'])
      swal(trans.GOOD_JOB, trans.PLACE_ADDED, 'success');
      
      this.showContentView();

    } catch (err) {
      console.warn(err);
      this.showContentView();
      this.translate.get('ERROR_NETWORK').subscribe(str => this.showToast(str));
    }

  }

}
