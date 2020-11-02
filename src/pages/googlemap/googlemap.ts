
import { Component,ViewChild,NgZone, ElementRef } from '@angular/core';
import {IonicPage, NavController, Platform } from 'ionic-angular';
import {  } from '../../app/app.config';
import {Geolocation, } from '@ionic-native/geolocation';
import {  } from '../../providers/map-style';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Locations } from '../../providers/locations';
import { LocalStorage } from '../../providers/local-storage';

import {
  trigger,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';
let infowindow: any;


@IonicPage()
@Component({
  selector: 'page-googlemap',
  templateUrl: 'googlemap.html',
    animations: [
    trigger('staggerIn', [
      transition('* => *', [
        query(':enter', style({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
        query(':enter', stagger('100ms', [animate('300ms', style({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
      ])
    ])
  ]
})
export class GooglemapPage {


  @ViewChild('map') mapElement: ElementRef;
 infowindow: any;
 i:any=0;
 isType:any;

 service:any;
 distance:any;
 latitude:any;
 longitude:any;
 count:any=0;
  options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};
posts:any;

url:any=[];


photos:any;
places:any=[];
apikey:any='AIzaSyBrmUANBWFGdVahMgTiVnfGucKyi5iRiwA';
      private geocoder: any;

      protected location;
        private mapInitialised: boolean = false;
          protected zoomToFit: boolean = true;

  private map: any;
  constructor(   public storage: LocalStorage,public fromlocation:Locations,public navCtrl: NavController,public http:Http,public platform: Platform,public geolocation:Geolocation,public ngzone:NgZone
        ) {
  }


     ionViewDidLoad() {
       this.initMap();

    // const apiKey ='AIzaSyBrmUANBWFGdVahMgTiVnfGucKyi5iRiwA';

    // let script = document.createElement('script');
    // script.id = 'googleMaps';
    // script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    // document.body.appendChild(script);


  }





  async initMap() {

      
    this.latitude = await this.storage.latitude;
      this.longitude = await this.storage.longitude;
      console.log(""+ this.latitude+""+this.longitude)

    this.geocoder = new google.maps.Geocoder();
        this.mapInitialised = true;
  // navigator.geolocation.getCurrentPosition(() => {
    this.location = {
        latitude:  this.latitude ,
        longitude: this.longitude
      };
      this.map = new google.maps.Map(this.mapElement.nativeElement, {
        center: {lat:this.latitude, lng:this.longitude},
        zoom: 15
      });

   infowindow = new google.maps.InfoWindow();
      this.service = new google.maps.places.PlacesService(this.map);
  

         this.service.nearbySearch({
        location: {lat: this.latitude, lng:this.longitude},
        radius: 1000,
        type: this.isType
      }, (results,status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          this.url=null;
           // this.GetPlceDetails1(results);
          for (var i = 0; i < results.length; i++) {
            this.createMarker(results[i]);

            
          }
        }
      });


  // }, (error) => {
  //     console.log(error);
  //   }, this.options);
 

  }

 

  createMarker(place) {
    var placeLoc = place.geometry.location;
    var image = {
      url: place.icon,
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(25, 25)
    };
     this.GetPlceDetails(place);
    var marker = new google.maps.Marker({
      map: this.map,
      position: placeLoc,
      icon: image
    });
        google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
       'Place ID: ' + place.place_id + '<br>' + 'Rating: '+place.rating +'<br>'+
      place.vicinity + '</div>');
           infowindow.open(this.map, this);


    });

   


  }

  GetPlceDetails(Place){

    console.log(this.count++)
    var placeid=Place.place_id;
    this.url=[];
   this.http.get('https://maps.googleapis.com/maps/api/place/details/json?key='+this.apikey+'&placeid='+placeid
).map(res => res.json()).subscribe(data => {

this.posts=data.result;
if(this.posts.photos){

for(let i=this.posts.photos.length-1;i<this.posts.photos.length;i++){
  this.photos=this.posts.photos[i].photo_reference;
       this.distance= this.fromlocation.getDistanceBetweenPoints(this.posts.geometry.location,this.location,'km');
     var distance1=this.distance.toFixed(2)
     if(this.posts.reviews==undefined && this.posts.rating==undefined && this.posts.international_phone_number==undefined){
       this.posts.reviews=null;
       this.posts.rating=null;

     }

    var url={
       url:'https://maps.googleapis.com/maps/api/place/photo?key=AIzaSyBrmUANBWFGdVahMgTiVnfGucKyi5iRiwA&photoreference='+this.photos+'&maxwidth=200',
      distance:distance1,
      rating:this.posts.rating,
      title:this.posts.name,
      distance1:distance1,
      reviews:this.posts.reviews,
      location:this.posts.geometry.location,
      phone: this.posts.international_phone_number,
      opening_hours:this.posts.opening_hours,
      website:this.posts.website

      }


      this.url.push(url);


         }

     }else{
      console.log('no data found');
      }
   
   })
}




goToGoogleplace(event){

     console.log(event)
      // this.navCtrl.push('PlaceDetailPage', { googleplace: googleplace });

}

}