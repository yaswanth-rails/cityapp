import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,PopoverController } from 'ionic-angular';
import { User } from '../../providers/user-service';
import { CancionPopoverPage } from '../concion-popover/concion-popover';



/**
 * Generated class for the SlPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-so',
  templateUrl: 'so.html',
})
export class SoPage {

  user: User[];
    List: any = [];
  stats: any = {
    reviews: 0,
    places: 0,
    favorites: 0}


  constructor(public navCtrl: NavController,
       public popoverCtrl: PopoverController,
       public navParams: NavParams,
       public userService:User,
       public modelcontroller: ModalController) {

  this.loadData();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlPage');
  }


 loadData(){

 this.userService.getSOList().then(data => {


 this.List=data;
console.log(this.List);   
      

    });

  } 

  openPopover(myEvent) {
   //this.navctrl.setRoot(CancionPopoverPage,{event})
   let popover =  this.popoverCtrl.create(CancionPopoverPage);
    popover.present({

           ev: myEvent

    });

  }

}
