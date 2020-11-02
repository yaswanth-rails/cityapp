import { IonicPage, Platform } from 'ionic-angular';
import { Component, Injector, Renderer} from '@angular/core';
import { ModalController } from 'ionic-angular';
import { SaleList } from '../../providers/salelist-service';
import { Preference } from '../../providers/preference';
import { CallNumber } from '@ionic-native/call-number';
import { Geolocation, GeolocationOptions } from '@ionic-native/geolocation';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { BrowserTab } from '@ionic-native/browser-tab';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { SocialSharing } from '@ionic-native/social-sharing';
import { BasePage } from '../base-page/base-page';
import { User } from '../../providers/user-service';
import { ImgLoader } from 'ionic-image-loader';
import { SaleListReview } from '../../providers/salelistreview-service';

@IonicPage()
@Component({
  selector: 'page-salelist-detail-page',
  templateUrl: 'salelist-detail-page.html'
})
export class SaleListDetailPage extends BasePage {

  private images = [];
  private salelist: SaleList;
  private rating: number = 0;
  private isLiked: boolean = false;
  private isStarred: boolean = false;
  private location: any;
  private unit: string;

  private salelistreview: SaleListReview[] = [];

  constructor(injector: Injector,
    private renderer: Renderer,
    private platform: Platform,
    private salelistService: SaleList,
    private modalCtrl: ModalController,
    private preference: Preference,
    private callNumber: CallNumber,
    private geolocation: Geolocation,
    private inAppBrowser: InAppBrowser,
    private browserTab: BrowserTab,
    private reviewService: SaleListReview,
    private launchNavigator: LaunchNavigator,
    private socialSharing: SocialSharing) {

      super(injector);
console.log("hi")
      this.salelist = this.navParams.get('salelist');
      console.log(this.salelist)
      this.unit = this.preference.unit;
      this.images = [];

      if (this.salelist) {

        this.rating = this.salelist.rating;

        this.loadLocation();

        if (User.getCurrentUser()) {
          this.checkIfIsLiked();
          this.checkIfIsStarred();
        }
        
        this.loadReviews();

        if (this.salelist.image) {
          this.images.push(this.salelist.image);
        }
  
        if (this.salelist.imageTwo) {
          this.images.push(this.salelist.imageTwo);
        }
  
        if (this.salelist.imageThree) {
          this.images.push(this.salelist.imageThree);
        }
  
        if (this.salelist.imageFour) {
          this.images.push(this.salelist.imageFour);
        }
      }
  }

  enableMenuSwipe() {
    return false;
  }

  ionViewDidLoad() {
  }

  onImageLoad(imgLoader: ImgLoader) {
    this.renderer.setElementClass(imgLoader.element, 'fade-in', true);  
  }

  async checkIfIsLiked() {
    try {
      const isLiked = await this.salelistService.isLiked(this.salelist)
      this.isLiked = isLiked;
    } catch (err) {
      console.warn(err.message);
    }
  }

  async checkIfIsStarred() {
    try {
      const isStarred = await this.salelistService.isStarred(this.salelist)
      this.isStarred = isStarred;
    } catch (err) {
      console.warn(err.message);
    }
  }

  async loadLocation() {
    try {

      const options: GeolocationOptions = {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 60000
      };

      let pos = await this.geolocation.getCurrentPosition(options);
      this.location = pos.coords;

    } catch (err) {
      console.warn(err);
    }
  }

  async loadReviews() {
    try {

      let salelistreview = await this.reviewService.load({ salelist: this.salelist, limit: 5 });
      this.salelistreview = salelistreview;

    } catch (err) {
      console.warn(err.message);
    }
  }

  openSignUpModal() {
    this.navigateTo('SignInPage');
  }

  openAddReviewModal() {
    let modal = this.modalCtrl.create('AddSaleListReviewPage', { salelist: this.salelist });
    modal.present();
  }

  onLike () {

    if (User.getCurrentUser()) {
      this.isLiked = true;
      this.salelistService.like(this.salelist);
      this.showToast('Liked');
    } else {
      this.openSignUpModal();
    }
  }

  onRate () {
    if (User.getCurrentUser()) {
      this.openAddReviewModal();
    } else {
      this.openSignUpModal();
    }
  }

  async onShare () {
    try {
      await this.socialSharing.share(this.salelist.title, null, null, this.salelist.website)
    } catch (err) {
      console.warn(err)
    }
  }

  async onCall () {

    if (!this.salelist.phone) return;

    try {
      await this.callNumber.callNumber(this.salelist.phone, true)
    } catch (err) {
      console.warn(err)
    }
  }

  openUrl () {

    if (!this.salelist.website) return;

    if (this.platform.is('cordova')) {
      
      this.browserTab.isAvailable().then((isAvailable: boolean) => {

        if (isAvailable) {
          this.browserTab.openUrl(this.salelist.website);
        } else {
          this.inAppBrowser.create(this.salelist.website, '_system');
        }
  
      }).catch((err) => console.warn(err));

    } else {
      this.inAppBrowser.create(this.salelist.website, '_system');
    }


  }

  async goToMap() {

    try {

      const googleMaps = this.launchNavigator.APP.GOOGLE_MAPS;
      const appleMaps = this.launchNavigator.APP.APPLE_MAPS;

      const isGoogleMapsAvailable = await this.launchNavigator.isAppAvailable(googleMaps);
      const isAppleMapsAvailable = await this.launchNavigator.isAppAvailable(appleMaps);

      let app = null;

      if (isGoogleMapsAvailable) {
        app = this.launchNavigator.APP.GOOGLE_MAPS;
      } else if (isAppleMapsAvailable) {
        app = this.launchNavigator.APP.APPLE_MAPS;
      } else {
        app = this.launchNavigator.APP.USER_SELECT;
      }

      const options: LaunchNavigatorOptions = {
        app: app
      };
      
      const destination = [
        this.salelist.location.latitude,
        this.salelist.location.longitude
      ];

      await this.launchNavigator.navigate(destination, options);

    } catch (err) {
      console.warn(err);
    }

  }

  goToReviews() {
    this.navigateTo('SaleListReviewPage', this.salelist);
  }

}