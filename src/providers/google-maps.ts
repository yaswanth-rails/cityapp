import { Injectable, } from '@angular/core';
import { Geolocation } from 'ionic-native';
import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';




declare var google;
let infowindow: any;
@Injectable()
export class GoogleMaps1 {
apikey:any='AIzaSyBrmUANBWFGdVahMgTiVnfGucKyi5iRiwA';
  mapElement: any;
  pleaseConnect: any;
  map: any;
  mapInitialised: boolean = false;
  mapLoaded: any;
  mapLoadedObserver: any;
  markers: any = [];
  url:any=[];
  posts:any;
  photos:any;
places:any=[];
returnData:any=[];
service:any;
  constructor(public http:Http) {

  }

  init(mapElement: any): Promise<any> {

    this.mapElement = mapElement;

    return this.loadGoogleMaps();

  }

  loadGoogleMaps(): Promise<any> {

    return new Promise((resolve) => {

      if(typeof google == "undefined" || typeof google.maps == "undefined"){

        console.log("Google maps JavaScript needs to be loaded.");


     

          window['mapInit'] = () => {


          }

          let script = document.createElement("script");
          script.id = "googleMaps";

          if(this.apikey){
            script.src = 'http://maps.google.com/maps/api/js?key=' + this.apikey + '&callback=mapInit';
          } else {
            script.src = 'http://maps.google.com/maps/api/js?callback=mapInit';       
          }

          document.body.appendChild(script);  

        
      }
      resolve(false)
                 


    });

  }


  initMap(params): Promise<any> {
   console.log(params);

    this.mapInitialised = true;

    return new Promise((resolve) => {
      Geolocation.getCurrentPosition().then((position) => {
         // let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        let latLng = new google.maps.LatLng(16.9607985, 82.2258939);

        let mapOptions = {
          center: latLng,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        this.map = new google.maps.Map(this.mapElement, mapOptions);
          this.service = new google.maps.places.PlacesService(this.map);
             this.service.nearbySearch({
        location: {lat:position.coords.latitude, lng:position.coords.longitude},
        radius: 1000,
        type: params
      }, (results,status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
           this.places.push(results[i]);
           console.log(results[i]);

  this.GetPlceDetails(results[i]).then((results)=>{
     resolve (results);

  })
          }
        }
      });

      });

    });

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
       infowindow.setContent(place.name);
       infowindow.open(this.map, this);
       
      infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
       'Place ID: ' + place.place_id + '<br>' + 'Rating: '+place.rating +'<br>'+
      place.vicinity + '</div>');
      infowindow.open(this.map, this);
    });
  }


 GetPlceDetails(Place){

   return new Promise((resolve) => {  var placeid=Place.place_id;
    this.url=[];
   this.http.get('https://maps.googleapis.com/maps/api/place/details/json?key='+this.apikey+'&placeid='+placeid).map(res => res.json()).subscribe(data => {

this.posts=data.result;
    console.log(this.posts);

if(this.posts.photos){

for(let i=this.posts.photos.length-1;i<this.posts.photos.length;i++){
  this.photos=this.posts.photos[i].photo_reference;
  
    var url={
       url:'https://maps.googleapis.com/maps/api/place/photo?key='+this.apikey+'&photoreference='+this.photos+'&maxwidth=200',
      name:this.posts.name,
      }
      this.url.push(url);
      console.log(this.url)
      resolve(this.url)


         }

     }else{
      console.log('no data found');
      }
   
   })
 })
}

  // Removes the markers from the map, but keeps them in the array.
  setMapOnAll(map) {
    for (var i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(map);
    }
  }
  clearMarkers() {
    this.setMapOnAll(null);
    this.markers = [];
  }
  //move this funciton from location.ts
  getDistanceBetweenPoints(start, end, units){

    let earthRadius = {
      miles: 3958.8,
      km: 6371
    };

    let R = earthRadius[units || 'miles'];
    let lat1 = start.lat();
    let lon1 = start.lng();
    let lat2 = end.coords.latitude;
    let lon2 = end.coords.longitude;

    let dLat = this.toRad((lat2 - lat1));
    let dLon = this.toRad((lon2 - lon1));
    let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
    Math.sin(dLon / 2) *
    Math.sin(dLon / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c;
    console.log('distanceToYou '+d);
    return d;
  }
  toRad(x){
    return x * Math.PI / 180;
  }
}
