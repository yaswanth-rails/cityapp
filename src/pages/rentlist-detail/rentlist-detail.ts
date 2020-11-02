import { IonicPage, Platform } from 'ionic-angular';
import { Component, Injector, Renderer} from '@angular/core';
import { ModalController } from 'ionic-angular';
import { RentList } from '../../providers/rentlist-service';
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
import { RentListReview } from '../../providers/rentlistreview-service';

@IonicPage()
@Component({
  selector: 'page-rentlist-detail',
  templateUrl: 'rentlist-detail.html'
})
export class RentListDetailPage extends BasePage {

  private images = [];
  private rentlist: RentList;
  private rating: number = 0;
  private isLiked: boolean = false;
  private isStarred: boolean = false;
  private location: any;
  private unit: string;

  private rentlistreview: RentListReview[] = [];

  constructor(injector: Injector,
    private renderer: Renderer,
    private platform: Platform,
    private rentlistService: RentList,
    private modalCtrl: ModalController,
    private preference: Preference,
    private callNumber: CallNumber,
    private geolocation: Geolocation,
    private inAppBrowser: InAppBrowser,
    private browserTab: BrowserTab,
    private reviewService: RentListReview,
    private launchNavigator: LaunchNavigator,
    private socialSharing: SocialSharing) {

      super(injector);

      this.rentlist = this.navParams.get('rentlist');
      console.log(this.rentlist)
      this.unit = this.preference.unit;
      this.images = [];

      if (this.rentlist) {

        this.rating = this.rentlist.rating;

        this.loadLocation();

        if (User.getCurrentUser()) {
          this.checkIfIsLiked();
          this.checkIfIsStarred();
        }
        
        this.loadReviews();

        if (this.rentlist.image) {
          this.images.push(this.rentlist.image);
        }
  
        if (this.rentlist.imageTwo) {
          this.images.push(this.rentlist.imageTwo);
        }
  
        if (this.rentlist.imageThree) {
          this.images.push(this.rentlist.imageThree);
        }
  
        if (this.rentlist.imageFour) {
          this.images.push(this.rentlist.imageFour);
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
      const isLiked = await this.rentlistService.isLiked(this.rentlist)
      this.isLiked = isLiked;
    } catch (err) {
      console.warn(err.message);
    }
  }

  async checkIfIsStarred() {
    try {
      const isStarred = await this.rentlistService.isStarred(this.rentlist)
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

      let rentlistreview = await this.reviewService.load({ rentlist: this.rentlist, limit: 5 });
      this.rentlistreview = rentlistreview;

    } catch (err) {
      console.warn(err.message);
    }
  }

  openSignUpModal() {
    this.navigateTo('SignInPage');
  }

  openAddReviewModal() {
    let modal = this.modalCtrl.create('AddRentListReviewPage', { rentlist: this.rentlist });
    modal.present();
  }

  onLike () {

    if (User.getCurrentUser()) {
      this.isLiked = true;
      this.rentlistService.like(this.rentlist);
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
      await this.socialSharing.share(this.rentlist.title, null, null, this.rentlist.website)
    } catch (err) {
      console.warn(err)
    }
  }

  async onCall () {

    if (!this.rentlist.phone) return;

    try {
      await this.callNumber.callNumber(this.rentlist.phone, true)
    } catch (err) {
      console.warn(err)
    }
  }

  openUrl () {

    if (!this.rentlist.website) return;

    if (this.platform.is('cordova')) {
      
      this.browserTab.isAvailable().then((isAvailable: boolean) => {

        if (isAvailable) {
          this.browserTab.openUrl(this.rentlist.website);
        } else {
          this.inAppBrowser.create(this.rentlist.website, '_system');
        }
  
      }).catch((err) => console.warn(err));

    } else {
      this.inAppBrowser.create(this.rentlist.website, '_system');
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
        this.rentlist.location.latitude,
        this.rentlist.location.longitude
      ];

      await this.launchNavigator.navigate(destination, options);

    } catch (err) {
      console.warn(err);
    }

  }

  goToReviews() {
    this.navigateTo('RentListReviewPage', this.rentlist);
  }

}
