import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ViewController} from 'ionic-angular';
import { User } from '../../providers/user-service';

@IonicPage()
@Component({
  selector: 'concion-popover',
  templateUrl: 'concion-popover.html',
})
export class CancionPopoverPage {

  sign: any;
  user: any;


  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public  events: Events,
    public viewCtrl: ViewController){

    if(User.getCurrentUser())
    {
    	this.sign="logout";
    }else{
    	this.sign="login";
    }

  }

  close1(){
  	if(User.getCurrentUser()){

  		this.navCtrl.push('ProfilePage');

  	}

  	 else{
          this.navCtrl.push('SignInPage');
             this.viewCtrl.dismiss();
          }
  }


  close2(){
  	   

   //this.navCtrl.push('SettingsPage');
        //this.viewCtrl.dismiss();

    this.navCtrl.push('SettingsPage').then(()=> {


    });
  
}

 close3(){

               if(User.getCurrentUser()){
                 User.logOut();
             //     then(res => this.events.publish('user:logout'))
             // // //this.navCtrl.push('');
               this.sign = "login";
               this.viewCtrl.dismiss();
         
             } 


              else{
              this.navCtrl.push('SignInPage')
              if(User.getCurrentUser()){
	            this.sign="logout";

            }
                   this.viewCtrl.dismiss();
         
         }
      }
      ionViewDidLoad() {}

}