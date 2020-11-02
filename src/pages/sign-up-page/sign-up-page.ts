import { IonicPage, AlertController} from 'ionic-angular';
import { Component, Injector } from '@angular/core';
import { ViewController, Events } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BasePage } from '../base-page/base-page';
import { User } from '../../providers/user-service';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-sign-up-page',
  templateUrl: 'sign-up-page.html'
})
export class SignUpPage extends BasePage {

  private form: FormGroup;
    verificationId: any = '';
  phoneNumber: any = '';
  countryCode: any = '';
  result: any;
  code:string="";

  constructor(injector: Injector,
    private events: Events,
    private userService: User,
    private viewCtrl: ViewController,
    public alertCtrl1:AlertController) {

    super(injector);

    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      username: new FormControl('', Validators.compose([Validators.maxLength(10), Validators.pattern('[1-9]{1}[0-9]{9}'), Validators.required])),
      email: new FormControl('', Validators.pattern('[^ @]*@[^ @]*')),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])

    });
  }

  enableMenuSwipe() {
    return false;
  }

  ionViewDidLoad() {
  }

  onCancel() {
    this.viewCtrl.dismiss();
  }

  isFieldValid(formControl: FormControl) {
    return formControl.valid;
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

     send(){
     let phone ='+91'+this.form.value.username;
    console.log(phone);
    (<any>window).FirebasePlugin.verifyPhoneNumber(phone,30,(credential)=>{
      this.verificationId=credential.verificationId;

       this.presentPrompt();

    },function(error){
      console.error(error);
    })

  }



  verify(){
  
    let credential = firebase.auth.PhoneAuthProvider.credential(this.verificationId, this.code);
 firebase.auth().signInWithCredential(credential).then((res) => {
  console.log('SCC', res);

  this.onSubmit();  

},()=>{

  alert("You have entered OTP is wrong.");
  this.presentPrompt()

   })


  }


   finder(){
     const data=this.form.value

 this.userService.find(data).then(data => {
       this.result=data;
       console.log(this.result);

      if(this.result.length == 0){                  
                    
       this.send();

    } else{ 

     let alert = this.alertCtrl1.create({
    title: 'Error',
    subTitle: 'phone number taken',
    buttons: ['Dismiss']
  });
  alert.present();


                               
         }

        });
    }




  async onSubmit() {

    if (this.form.invalid) {
      const message = await this.getTrans('INVALID_FORM');
      return this.showToast(message);
    }

    const formData = Object.assign({}, this.form.value);

    if (formData.password !== formData.confirmPassword) {
      const message = await this.getTrans('PASSWORD_DOES_NOT_MATCH');
      return this.showToast(message);
    }

    if (formData.email === '') {
      delete formData.email;
    }

    delete formData.confirmPassword;

    try {

      await this.showLoadingView();
      
      let user = await this.userService.create(formData);

      this.showContentView();

      const transParams = { username: user.username };
      this.translate.get('LOGGED_IN_AS', transParams).subscribe(str => this.showToast(str));

      this.events.publish('user:login', user);
      this.onCancel();

    } catch (err) {

      this.showContentView();

      if (err.code === 202) {
        this.translate.get('USERNAME_TAKEN').subscribe(str => this.showToast(str));
      } else if (err.code === 203) {
        this.translate.get('EMAIL_TAKEN').subscribe(str => this.showToast(str));
      } else if (err.code === 125) {
        this.translate.get('EMAIL_INVALID').subscribe(str => this.showToast(str));
      } else {
        this.translate.get('ERROR_NETWORK').subscribe(str => this.showToast(str));
      }

    }



  }

}
