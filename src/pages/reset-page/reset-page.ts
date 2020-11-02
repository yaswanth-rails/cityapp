import { IonicPage } from 'ionic-angular';
import { Component, Injector } from '@angular/core';
import { BasePage } from '../base-page/base-page';
import { User } from '../../providers/user-service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-reset-page',
  templateUrl: 'reset-page.html'
})
export class ResetPage extends BasePage {

  private form: FormGroup;
   private user: User;


  constructor(injector: Injector, private userService: User) {
    super(injector);

    this.form = new FormGroup({password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  enableMenuSwipe() {
    return false;
  }

  ionViewDidLoad() {}

  async onSubmit() {

    let formData = this.form.value;

    if (this.form.invalid) {
      return this.translate.get('INVALID_FORM').subscribe(str => this.showToast(str));
    }

    if (formData.password !== formData.confirmPassword) {
      return this.translate.get('PASSWORD_DOES_NOT_MATCH').subscribe(str => this.showToast(str));
    }

    try {

      await this.showLoadingView();
  

      let loginData = {
        username: this.user.username,
        password: formData.oldPassword
      };
  
      await this.userService.signIn(loginData);
  
      this.user.password = formData.password;
      await this.user.save();

      this.translate.get('SAVED').subscribe(str => this.showToast(str));

      this.showContentView();
      this.goBack();

    } catch (err) {

      this.showContentView();

      if (err.code === 101) {
        this.translate.get('PASSWORD_INVALID').subscribe(str => this.showToast(str));
      } else {
        this.translate.get('ERROR_NETWORK').subscribe(str => this.showToast(str));
      }

    }

  
  }

}
