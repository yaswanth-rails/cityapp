import { Component, Injector } from '@angular/core';
import { IonicPage, ViewController,AlertController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BasePage } from '../base-page/base-page';
import { User } from '../../providers/user-service';
import swal from 'sweetalert';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage extends BasePage {

  private form: FormGroup;
    result: any;
    verificationId:any
    code:any;

  constructor (injector: Injector,
    private viewCtrl: ViewController,
    private userService: User,
        public alertCtrl1:AlertController) {
      
      super(injector);
        this.navigateTo('ResetPage');

    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', Validators.compose([Validators.maxLength(10), Validators.pattern('[1-9]{1}[0-9]{9}'), Validators.required])),

    });
  }

  enableMenuSwipe () {
    return false;
  }

  onDismiss () {
    this.viewCtrl.dismiss();
  }

  async onSubmit () {

    if (this.form.invalid) {
      const message = await this.getTrans('INVALID_FORM');
      return this.showToast(message);
    }



    try {

      await this.showLoadingView();
      
      const email = this.form.value.email;
      
      await this.userService.recoverPassword(email);

      this.showContentView();

      const trans = await this.getTrans(['GOOD_JOB','FORGOT_PASSWORD_SUCCESS'])
      swal(trans.GOOD_JOB, trans.FORGOT_PASSWORD_SUCCESS, 'success');

      this.onDismiss();

    } catch (err) {

      if (err.code === 205) {
        this.translate.get('EMAIL_NOT_FOUND').subscribe(str => this.showToast(str));
      } else {
        this.translate.get('ERROR_NETWORK').subscribe(str => this.showToast(str));
      }

      this.showContentView();

    }
  } 



   finder(){
     const data=this.form.value

 this.userService.find(data).then(data => {
       this.result=data;

      if(this.result.length != 0){                  
                    
       this.send();

    } else{ 

     let alert = this.alertCtrl1.create({
    title: 'Error',
    subTitle: 'User Not Register ',
    buttons: ['Dismiss']
  });
  alert.present();


                               
         }

        });
    }

  send(){
    console.log(this.form.value.username);
  
     let phone ='+91'+this.form.value.username;
    (<any>window).FirebasePlugin.verifyPhoneNumber(phone,30,(credential)=>{
      console.log("hi im send")
      this.verificationId=credential.verificationId;

       this.presentPrompt();

    },function(error){
      console.error(error);
    })

  }
    presentPrompt() {
  let alert = this.alertCtrl1.create({
    title: 'Enter OTP',
    inputs: [
      {
        name: 'otp',
        placeholder: 'OTP'
      }
    ],

    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Login',
        handler: data => {
          console.log(data)
          this.code = data.otp;
          this.verify();

          
        }
      }
    ]

  });
    alert.present();

    }



  verify(){
  
    let credential = firebase.auth.PhoneAuthProvider.credential(this.verificationId, this.code);
 firebase.auth().signInWithCredential(credential).then((res) => {
  console.log('SCC', res);

  // this.onSubmit();  
  // this.navigateTo('ResetPage');

},()=>{

  alert("You have entered OTP is wrong.");
  this.presentPrompt()

   })


  }








}
