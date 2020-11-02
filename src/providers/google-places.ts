// import { Injectable } from '@angular/core';
// import { Component, ViewChild, ElementRef } from '@angular/core';
// import {  Platform } from 'ionic-angular';
// import { GoogleMaps1 } from './google-maps';
// import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';
// import { LocalStorage } from './local-storage';


// let map: any;
// @Injectable()
// @Component({
//   templateUrl:'../../pages/places/places.html',
// })
// export class GooglePlaces {

// @ViewChild('map') mapElement: ElementRef;

//    googleplaces:any=[];
//         posts:any;
// apikey:any='AIzaSyBrmUANBWFGdVahMgTiVnfGucKyi5iRiwA';
//   url:any=[];
//   photos:any;
//   latitude:any;
//   longitude:any;
//  constructor(public storage:LocalStorage,public platform:Platform,public map:GoogleMaps1,public http:Http){

//   this.platform.ready().then(() => {
//      this.map.init(this.mapElement.nativeElement);
//      console.log("hi")
 
//     });
//        this.initMap();

//  }

//       async initMap1() {
//       	    this.latitude = await this.storage.latitude;
//       this.longitude = await this.storage.longitude;
//       }


//  initMap() {


//       map = new google.maps.Map(this.mapElement.nativeElement, {
//         center: {lat:this.latitude, lng:this.longitude},
//         zoom: 15
//       });

//       var service = new google.maps.places.PlacesService(map);
//       service.nearbySearch({
//         location: {lat:this.latitude, lng:this.longitude},
//         radius: 2000,
//         type: 'restaurant',
//       }, (results,status) => {
//         if (status === google.maps.places.PlacesServiceStatus.OK) {
//           for (var i = 0; i < results.length; i++) {
//           console.log(i)
//           }
//         }
//       });

//   }



// //   GetPlceDetails(Place){

// //    return new Promise((resolve) => {  var placeid=Place.place_id;
// //     var placeid=Place.place_id;
// //     this.url=[];
// //    this.http.get('https://maps.googleapis.com/maps/api/place/details/json?key='+this.apikey+'&placeid='+placeid
// // ).map(res => res.json()).subscribe(data => {

// // this.posts=data.result;
// // console.log(this.posts);
// // if(this.posts.photos){

// // for(let i=this.posts.photos.length-1;i<this.posts.photos.length;i++){
// //   this.photos=this.posts.photos[i].photo_reference;
// //      var distance= this.location.getDistanceBetweenPoints(this.posts.geometry.location,this.params.location,'km');
// //      var distance1=distance.toFixed(2)
  
// //     var url={
// //        url:'https://maps.googleapis.com/maps/api/place/photo?key=AIzaSyBN__TGV0kdA7nwr1Nimjqi8XyqIPmF7zA&photoreference='+this.photos+'&maxwidth=200',
// //       title:this.posts.name,
// //       rating:this.posts.rating,
// //       distance1:distance1,
// //       reviews:this.posts.reviews,
// //       location:this.posts.geometry.location,
// //       phone: this.posts.international_phone_number,
// //       opening_hours:this.posts.opening_hours,
// //          }

// //       resolve(url);
// //     }



// //      }else{
// //       console.log('no data found');
// //       }
   
// //    })

// //  })
// // }



// }

// import { Component, NgZone } from '@angular/core';
// import { LoadingController } from 'ionic-angular';
// import { Injectable } from '@angular/core';
// import { Locations } from './locations';
// import { Http } from '@angular/http';


// @Injectable()
// @Component({
//   selector: 'places-map',
//   templateUrl: 'places.html'
// })
// export class GooglePlaces {
//   autocomplete: any;
//   GoogleAutocomplete: any;
//   GooglePlaces: any;
//   geocoder: any
//   autocompleteItems: any;
//   nearbyItems: any = new Array<any>();
//   loading: any;
//         googleplaces:any=[];
//         posts:any;

// apikey:any='AIzaSyBrmUANBWFGdVahMgTiVnfGucKyi5iRiwA';
//   url:any=[];
//   photos:any;
//   merged:any=[];

//   constructor(
//     public zone: NgZone,
//     public location:Locations,
//     public http:Http,
//     public loadingCtrl: LoadingController
//   ) {

//     this.geocoder = new google.maps.Geocoder;
//     let elem = document.createElement("div")
//     this.GooglePlaces = new google.maps.places.PlacesService(elem);
//     this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
//     this.autocomplete = {
//       input: ''
//     };
//     this.autocompleteItems = [];
//     this.loading = this.loadingCtrl.create();
//     this.updateSearchResults();
//     console.log("hi")
//   }


//   updateSearchResults(){
  
//     this.GoogleAutocomplete.getPlacePredictions({ input: 'atm' },
//       (predictions) => {
//         this.autocompleteItems = [];
//         if(predictions){
//           this.zone.run(() => {
//             predictions.forEach((prediction) => {
//   this.selectSearchResult(prediction)           
//              });
//           });
//         }
//     });
//   }

//   selectSearchResult(item){
//     this.loading.present();
//     this.autocompleteItems = [];
//     this.geocoder.geocode({'placeId': item.place_id}, (results, status) => {
//       if(status === 'OK' && results[0]){
//         this.autocompleteItems = [];
//         this.GooglePlaces.nearbySearch({
//           location: results[0].geometry.location,
//           radius: '500',
//           types: ['restaurant'], //check other types here https://developers.google.com/places/web-service/supported_types
//           // key: 'YOUR_KEY_HERE'
//         }, (near_places) => {
//           this.zone.run(() => {
//             this.nearbyItems = [];
//             for (var i = 0; i < near_places.length; i++) {
//                  console.log("hi"+near_places[i])
//             }
//             this.loading.dismiss();
//           });
//         })
//       }
//     })
//   }

//        GetPlceDetails(Place){

//    return new Promise((resolve) => {  var placeid=Place.place_id;
//     var placeid=Place.place_id;
//     this.url=[];
//    this.http.get('https://maps.googleapis.com/maps/api/place/details/json?key='+this.apikey+'&placeid='+placeid
// ).map(res => res.json()).subscribe(data => {

// this.posts=data.result;
// if(this.posts.photos){

// for(let i=this.posts.photos.length-1;i<this.posts.photos.length;i++){
//   this.photos=this.posts.photos[i].photo_reference;
//      var distance= this.location.getDistanceBetweenPoints(this.posts.geometry.location,this.params.location,'km');
//      var distance1=distance.toFixed(2)
  
//     var url={
//        url:'https://maps.googleapis.com/maps/api/place/photo?key=AIzaSyBN__TGV0kdA7nwr1Nimjqi8XyqIPmF7zA&photoreference='+this.photos+'&maxwidth=200',
//       title:this.posts.name,
//       rating:this.posts.rating,
//       distance1:distance1,
//       reviews:this.posts.reviews,
//       location:this.posts.geometry.location,
//       phone: this.posts.international_phone_number,
//       opening_hours:this.posts.opening_hours,
//          }
// console.log(url)
//       resolve(url);
//     }



//      }
//      else{
//       console.log('no data found');
//       }
   
//    })

//  })
// }


// }