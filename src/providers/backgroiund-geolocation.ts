
import { Injectable, NgZone } from '@angular/core';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import 'rxjs/add/operator/filter';
import { Geofence } from '@ionic-native/geofence';
 import { GeoList} from './geofence-service';

@Injectable()
export class  BackgroundGeolocation1{
 
  public watch: any;   
  public lat: number = 0;
  public lng: number = 0;
  public fencedata:any=[];
     fence=[];
 
  constructor(public zone: NgZone,public backgroundGeolocation:BackgroundGeolocation,public geolocation:Geolocation,private geofence: Geofence ) {
  
  geofence.initialize().then(
    // resolved promise does not return a value
    () => console.log('Geofence Plugin Ready'),
    (err) => console.log(err)
  )

  }

 //what we have:?
  
  //1.current location(watching rotate),geofences. 

  //what we do?
   //1.

  addGeofence() {

 GeoList.load().then((data)=>{
    this.fencedata=data;
      for(let i=0;i<this.fencedata.length;i++){  

         this.fence.push({

     id:            this.fencedata[i].id, //any unique ID
     latitude:      this.fencedata[i].location.latitude, //center of geofence radius
    longitude:     this.fencedata[i].location.longitude,
    radius:         this.fencedata[i].radius, //radius to edge of geofence in meters
    transitionType: 1, //see 'Transition Types' below
    notification: { //notification settings
        id:             1, //any unique ID
        title:         this.fencedata[i].title, //notification title
        text:           this.fencedata[i].message, //notification body
        openAppOnClick: true //open app when notification is tapped
              }

        });
       }

 })


}


getFenceTracking(){

  this.geofence.addOrUpdate(this.fence).then(
     () => console.log('Geofence added'),
     (err) => console.log('Geofence failed to add'+err)
   );   

this.geofence.getWatched().then(function (fence) {
    var geofence = JSON.parse(fence);

 return  geofence

});



}


startTracking() {
   // Background Tracking
 
  let config = {
    desiredAccuracy: 0,
    stationaryRadius: 20,
    distanceFilter: 10,
       startForeground:false,
    debug: true,
    interval: 2000
  };
 
  this.backgroundGeolocation.configure(config).subscribe((location) => {
 
    console.log('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude);
 this.getFenceTracking()
    // Run update inside of Angular's zone
    this.zone.run(() => {
      this.lat = location.latitude;
      this.lng = location.longitude;
    });
 
  }, (err) => {
 
    console.log(err);
 
  });
 
  // Turn ON the background-geolocation system.
  this.backgroundGeolocation.start();
 
 
  // Foreground Tracking
 
let options = {
  frequency: 3000,
  enableHighAccuracy: true
};
 
this.watch = this.geolocation.watchPosition(options).filter((p: any) => p.code === undefined).subscribe((position: Geoposition) => {
 
  console.log(position);
       this.addGeofence();

  // Run update inside of Angular's zone
  this.zone.run(() => {
    this.lat = position.coords.latitude;
    this.lng = position.coords.longitude;
  });
 
});
 
}  


stopTracking() {

    console.log('stopTracking');
 
  this.backgroundGeolocation.finish();
  this.watch.unsubscribe();
 
 
  }
 
}