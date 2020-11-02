import { Locations } from '../../providers/locations';
import { GoogleMaps1 } from '../../providers/google-maps';
import { IonicPage,NavController, Platform } from 'ionic-angular';
import { Component, ViewChild, ElementRef } from '@angular/core';

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage1 {
  cafe:any='cafe';
 
    @ViewChild('map') mapElement: ElementRef;
 
    constructor(public navCtrl: NavController, public maps: GoogleMaps1, public platform: Platform, public locations: Locations) {
    }
 
    ionViewDidLoad(){
    this.platform.ready().then(() => {
     this.maps.init(this.mapElement.nativeElement);
 
    });
    this.loadData()

  } 

loadData(){

this.maps.initMap(this.cafe).then((result) => {


  console.log(result);

  


       });


}

 
}