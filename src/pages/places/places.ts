import { IonicPage,PopoverController,Platform } from 'ionic-angular';
import { Component, Injector, Renderer } from '@angular/core';
import { BasePage } from '../base-page/base-page';
import { AppConfig } from '../../app/app.config';
import { Place } from '../../providers/place-service';
import { Preference } from '../../providers/preference';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';
import { ImgLoader } from 'ionic-image-loader';
import { CancionPopoverPage } from '../concion-popover/concion-popover';
import {  ViewChild, ElementRef } from '@angular/core';
import { GoogleMaps1 } from '../../providers/google-maps';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Locations } from '../../providers/locations';
import {
  trigger,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';
let map: any;


@IonicPage()
@Component({
  selector: 'page-places',
  templateUrl: 'places.html',
  animations: [
    trigger('staggerIn', [
      transition('* => *', [
        query(':enter', style({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
        query(':enter', stagger('100ms', [animate('300ms', style({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
      ])
    ])
  ]
})

export class PlacesPage extends BasePage {

  private params: any = {};
  private places: Place[] = [];
      @ViewChild('map') mapElement: ElementRef;
      googleplaces:any=[];
        posts:any;

apikey:any='AIzaSyBrmUANBWFGdVahMgTiVnfGucKyi5iRiwA';
  url:any=[];
  photos:any;
  merged:any=[];
  constructor(injector: Injector,
public popoverCtrl: PopoverController,
public http:Http,
    private renderer: Renderer,
    private admobFree: AdMobFree,
    private placeService: Place,
       public platform:Platform,
public location:Locations,
    public maps: GoogleMaps1,
    private preference: Preference) {
    super(injector);

    this.params.category = this.navParams.get('category');
    console.log(this.params.category);

    this.params.isFeatured = this.navParams.get('isFeatured');
    this.params.location = this.navParams.get('location');
    this.params.unit = this.preference.unit;
    this.params.limit = 20;
    this.params.page = 0;



    this.showLoadingView();
    this.onReload();
    this.prepareAd();
  }

  enableMenuSwipe() {
    return false;
  }

  onImageLoad(imgLoader: ImgLoader) {
    this.renderer.setElementClass(imgLoader.element, 'fade-in', true);  
  }
 ionViewDidLoad() {
      if(this.params.category.title!='Theatres' && this.params.category.title!='MobileService'){

       this.platform.ready().then(() => {
     this.maps.init(this.mapElement.nativeElement);
 
    });
       this.initMap();
   }

  
  }





  async prepareAd() {



    try {

      if (AppConfig.BANNER_ID) {
        
        const bannerConfig: AdMobFreeBannerConfig = {
          id: AppConfig.BANNER_ID,
          isTesting: false,
          autoShow: true
        };
        
        this.admobFree.banner.config(bannerConfig);
        
        this.admobFree.banner.prepare()
      }

    } catch (err) {
      console.warn(err);
    }

  }


  openPopover(myEvent) {
   //this.navctrl.setRoot(CancionPopoverPage,{event})
   let popover =  this.popoverCtrl.create(CancionPopoverPage);
    popover.present({

           ev: myEvent

    });

  }

  goToPlace(place) {
    this.navigateTo('PlaceDetailPage', { place: place });
  }

  goToGooglePlace(googleplace) {
    this.navigateTo('PlaceDetailPage', { googleplace: googleplace });
  }

  async loadData() {

    try {

      const places = await this.placeService.load(this.params);

      for (let place of places) {
        this.places.push(place);
      }

      this.onRefreshComplete(places);

      if (this.places.length) {
        this.showContentView();
      } else {
        this.showEmptyView();
      }

    } catch (err) {
      this.onRefreshComplete();

      let message = await this.getTrans('ERROR_NETWORK');
      this.showToast(message);
    }
  }

  onLoadMore(infiniteScroll) {
    this.infiniteScroll = infiniteScroll;
    this.params.page++;
    this.loadData();

  }

  onReload(refresher = null) {
    this.refresher = refresher;
    this.places = [];
    this.params.page = 0;
    this.loadData();
  }

 initMap() {


      map = new google.maps.Map(this.mapElement.nativeElement, {
        center: {lat: this.params.location.latitude, lng: this.params.location.longitude},
        zoom: 15
      });

      var service = new google.maps.places.PlacesService(map);
      service.nearbySearch({
        location: {lat: this.params.location.latitude, lng: this.params.location.longitude},
        radius: 2000,
        type: 'restaurant',
      }, (results,status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
          
            this.GetPlceDetails(results[i]).then((res)=>{
       
                          this.googleplaces.push(res);
       

            });
          }
        }
      });    
  }



 GetPlceDetails(Place){

   return new Promise((resolve) => {  

    var placeid=Place.place_id;
    this.url=[];
   this.http.get('https://maps.googleapis.com/maps/api/place/details/json?key='+this.apikey+'&placeid='+placeid
).map(res => res.json()).subscribe(data => {

this.posts=data.result;
if(this.posts.photos){

for(let i=this.posts.photos.length-1;i<this.posts.photos.length;i++){
  this.photos=this.posts.photos[i].photo_reference;
     var distance= this.location.getDistanceBetweenPoints(this.posts.geometry.location,this.params.location,'km');
     var distance1=distance.toFixed(2)
  
    var url={
       url:'https://maps.googleapis.com/maps/api/place/photo?key=AIzaSyBN__TGV0kdA7nwr1Nimjqi8XyqIPmF7zA&photoreference='+this.photos+'&maxwidth=200',
      title:this.posts.name,
      rating:this.posts.rating,
      distance1:distance1,
      reviews:this.posts.reviews,
      location:this.posts.geometry.location,
      phone: this.posts.international_phone_number,
      opening_hours:this.posts.opening_hours,
         }

    
              resolve(url);
        }

     }
     else{
      console.log('no data found');
      }
   
   })

 })
}



}
