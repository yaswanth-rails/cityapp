import { Component, NgZone,ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

declare var google;


@Component({
  selector: 'page-googlemap',
  templateUrl: 'googlemap.html'
})
export class GooglemapPage {


  @ViewChild('map') mapElement: ElementRef;
    map: any;
   latLng: any;
   markers:any;
   mapOptions:any;
    isKM:any=500;
   isType:any="";
 infowindow: any;
 options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};


  constructor(public navCtrl1: NavController,public ngZone: NgZone, public platform: Platform) {
   

    platform.ready().then(() => {
this.initMap();
    });
  }
   enableMenuSwipe() {
    return false;
  }

 //  loadMap(){
 //    console.log("hi-1")

 //    this.geolocation.getCurrentPosition().then((position) => {

 //      this.latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
     
 //      this.mapOptions = {
 //        center: this.latLng,
 //        zoom: 14,
 //        mapTypeId: google.maps.MapTypeId.ROADMAP
 //      }   

 //      this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);

 //    }, (err) => {
 //      alert('err '+err);
 //    });

 //  }

 // /*-----------------Find Nearby Place------------------------*/ 

 //  nearbyPlace(){
 //    console.log(this.isType+" "+this.isKM);

 //    this.markers = [];
 //    let service = new google.maps.places.PlacesService(this.map);
 //    service.nearbySearch({
 //              location: this.latLng,
 //              radius: this.isKM,
 //              types: [this.isType]
 //            },(results, status) => {

 //                this.callback(results, status);
 //            });


 //  }

 //  callback(results, status) {
 //        console.log(results);
 //    if (status === google.maps.places.PlacesServiceStatus.OK) {
 //      for (var i = 0; i < results.length; i++) {
 //        this.createMarker(results[i]);
 //      }
 //    }
 //  }

 //  createMarker(place){
 //        console.log("hi-4")

 //    var placeLoc = place;
 //    console.log('placeLoc',placeLoc)
 //    this.markers = new google.maps.Marker({
 //        map: this.map,
 //        position: place.geometry.location
 //    });

 //    let infowindow = new google.maps.InfoWindow();

 //    google.maps.event.addListener(this.markers, 'click', () => {
 //      this.ngZone.run(() => {
 //        infowindow.setContent(place.name);
 //        infowindow.open(this.map, this.markers);
 //      });
 //    });

 //  }

  initMap() {
    console.log(this.isType)
    navigator.geolocation.getCurrentPosition((location) => {
      this.map = new google.maps.Map(this.mapElement.nativeElement, {
        center: {lat: location.coords.latitude, lng: location.coords.longitude},
        zoom: 15
      });

   this.infowindow = new google.maps.InfoWindow();
      var service = new google.maps.places.PlacesService(this.map);
      service.nearbySearch({
        location: {lat: location.coords.latitude, lng: location.coords.longitude},
        radius: 1000,
        type: this.isType
      }, (results,status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            this.createMarker(results[i]);
          }
        }
      });
    }, (error) => {
      console.log(error);
    }, this.options);
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
    var marker = new google.maps.Marker({
      map: this.map,
      position: placeLoc,
      icon: image
    });
    let infowindow = new google.maps.InfoWindow();
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent(place.name);
      infowindow.open(this.map, this);
      infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
        'Place ID: ' + place.place_id + '<br>' +
        place.vicinity + '</div>');
      infowindow.open(this.map, this);
    });
  }
}
