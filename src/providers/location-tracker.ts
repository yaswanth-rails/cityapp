import { Injectable, NgZone } from '@angular/core';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { Geofence } from '@ionic-native/geofence';
import { GeoList} from './geofence-service';
import {Place} from './place-service'
import { LocalStorage } from './local-storage';



import 'rxjs/add/operator/filter';
 
@Injectable()
export class LocationTracker {
 
  public watch: any;   
  public lat: number = 0;
  public lng: number = 0;
  geolist:GeoList[];
  geolist1:any;
   geolist2:any=[];
   fence=[];
   list:any;

 
  constructor(public storage:LocalStorage,public place:Place,public zone: NgZone,public  backgroundGeolocation:BackgroundGeolocation,public geolocation:Geolocation,private geofence: Geofence) {

     //for background tracking
    //     backgroundmode.on("activate").subscribe(()=>{
    //       console.log("hi");
    //       this.getFenceTracking();
   
    // });

      geofence.initialize().then(
    () => console.log('Geofence Plugin Ready'),
    (err) => console.log(err)
    )};

getGlo(data){

console.log(data);
      this.geolist2=data;
   for(let i=0;i<this.geolist2.length;i++){      
        this.fence.push(
        {

     id:            this.geolist2[i].id, //any unique ID
     latitude:      this.geolist2[i].location.latitude, //center of geofence radius
    longitude:     this.geolist2[i].location.longitude,
    radius:         this.geolist2[i].radius, //radius to edge of geofence in meters
    transitionType: 1, //see 'Transition Types' below
    notification: { //notification settings
        id:             1, //any unique ID
        title:         this.geolist2[i].title, //notification title
        text:           this.geolist2[i].message, //notification body
        openAppOnClick: true //open app when notification is tapped
              }

            });

           }  
       this.getFenceTracking();

}


  startTracking() {
 
 
  let config = {
    desiredAccuracy: 0,
    stationaryRadius: 100,
    distanceFilter: 10,
    interval: 30000
  };
 
  this.backgroundGeolocation.configure(config).subscribe((location) => {
 
    console.log('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude);

    //        this.place.getGeo(location).then((data)=>{
    //     var i:any=[];
    //      i=data;
    //   this.getGlo(i);
    // });
 
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
  frequency: 10000,
  enableHighAccuracy: true
};
 
this.watch = this.geolocation.watchPosition(options).filter((p: any) => p.code === undefined).subscribe((position: Geoposition) => {
 
 // this.list=this.place.getGeo(position);
           this.place.getGeo(position).then((data)=>{  
         this.list=data;
      this.getGlo(this.list);
    });



 
  // Run update inside of Angular's zone
  this.zone.run(() => {
    this.lat = position.coords.latitude;
    this.lng = position.coords.longitude;
  });
 
});
 
}

//  startTracking() {
//   // Background Tracking
//   console.log("hiim serve")
 
//   let config = {
//     desiredAccuracy: 0,
//     stationaryRadius: 20,
//     distanceFilter: 20,

//     stopOnTerminate: false,
//       startOnBoot: true,
//       startForeground:false,

// //     desiredAccuracy: 10,
// // stationaryRadius: 20,
// // distanceFilter: 30,

// //     interval: 3000,
// //     fastestInterval: 2500,
// //     notificationTitle: "LOCATIONTEST", // Android
// //     notificationText: "Background location tracking is ON.", // Android
// //     notificationIconLarge: "icon", // Android
// //     notificationIconSmall: "icon", // Android
// //     startOnBoot: true,
// //     startForeground: false,

// //     batchSync: true,       // <-- [Default: false] Set true to sync locations to server in a single HTTP request.
// //     autoSync: true,         // <-- [Default: true] Set true to sync each location to server as it arrives.
// //     maxDaysToPersist: 1, 

// //    activityType: 'AutomotiveNavigation',
// //   stopOnTerminate: false
//   };


 
//   this.backgroundGeolocation.configure(config).subscribe((location) => {
 
//     console.log('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude);
//     this.getFenceTracking();

//     this.place.getGeo(location);
 
//     // Run update inside of Angular's zone
//     this.zone.run(() => {
//       this.lat = location.latitude;
//       this.lng = location.longitude;
//     });
 
//   }, (err) => {
 
//     console.log(err);
 
//   });
 
//   // Turn ON the background-geolocation system.
//   this.backgroundGeolocation.start();
 
 
//   // Foreground Tracking
 
// let options = {
//   frequency: 10*1000,
//   enableHighAccuracy: true
// };
 
// this.watch = this.geolocation.watchPosition(options).filter((p: any) => p.code === undefined).subscribe((position: Geoposition) => {
 

 
//   // Run update inside of Angular's zone
//   this.zone.run(() => {
//     this.lat = position.coords.latitude;
//     this.lng = position.coords.longitude;
//   });


  
   

//     });

 
// }




getFenceTracking(){


        
  // let fence = {


  //   id: 'AIzaSyDye3DSY410__0x2eG9GjNWTTZxTtW2-Vo', //any unique ID
  //   latitude:      this.geolist2.location.latitude, //center of geofence radius
  //   longitude:     this.geolist2.location.longitude,
  //   radius:         this.geolist2.radius, //radius to edge of geofence in meters
  //   transitionType: 3, //see 'Transition Types' below
  //   notification: { //notification settings
  //       id:             1, //any unique ID
  //       title:         this.geolist2.title, //notification title
  //       text:           this.geolist2.message, //notification body
  //       openAppOnClick: true //open app when notification is tapped
  //             }
       

  //      }
  this.geofence.addOrUpdate(this.fence).then(
     () => console.log('Geofence added'),
     (err) => console.log('Geofence failed to add'+err)
   );   

this.geofence.getWatched().then(function (fence) {
    var geofence = JSON.parse(fence);

 return  geofence

});



}


 
stopTracking() {
 
  console.log('stopTracking');
 
  this.backgroundGeolocation.finish();
  this.watch.unsubscribe();
 
  }
 
}

