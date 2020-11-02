import { IonicPage, Platform } from 'ionic-angular';
import { Component, Injector, Renderer} from '@angular/core';
import { ModalController } from 'ionic-angular';
import { UpdateList } from '../../providers/updatelist-service';
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
import { UpdateListReview } from '../../providers/updatelistreview-service';

@IonicPage()
@Component({
  selector: 'page-updatelist-detail',
  templateUrl: 'updatelist-detail.html'
})
export class UpdateListDetailPage extends BasePage {

  private images = [];
  private updatelist: UpdateList;
  private rating: number = 0;
  private isLiked: boolean = false;
  private isStarred: boolean = false;
  private location: any;
  private unit: string;

  private updatelistreview: UpdateListReview[] = [];

  constructor(injector: Injector,
    private renderer: Renderer,
    private platform: Platform,
    private updatelistService: UpdateList,
    private modalCtrl: ModalController,
    private preference: Preference,
    private callNumber: CallNumber,
    private geolocation: Geolocation,
    private inAppBrowser: InAppBrowser,
    private browserTab: BrowserTab,
    private reviewService: UpdateListReview,
    private launchNavigator: LaunchNavigator,
    private socialSharing: SocialSharing) {

      super(injector);
console.log("hi")
      this.updatelist = this.navParams.get('updatelist');
      console.log(this.updatelist)
      this.unit = this.preference.unit;
      this.images = [];

      if (this.updatelist) {

        this.rating = this.updatelist.rating;

        this.loadLocation();

        if (User.getCurrentUser()) {
          this.checkIfIsLiked();
          this.checkIfIsStarred();
        }
        
        this.loadReviews();

        if (this.updatelist.image) {
          this.images.push(this.updatelist.image);
        }
  
        if (this.updatelist.imageTwo) {
          this.images.push(this.updatelist.imageTwo);
        }
  
        if (this.updatelist.imageThree) {
          this.images.push(this.updatelist.imageThree);
        }
  
        if (this.updatelist.imageFour) {
          this.images.push(this.updatelist.imageFour);
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
      const isLiked = await this.updatelistService.isLiked(this.updatelist)
      this.isLiked = isLiked;
    } catch (err) {
      console.warn(err.message);
    }
  }

  async checkIfIsStarred() {
    try {
      const isStarred = await this.updatelistService.isStarred(this.updatelist)
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

      let updatelistreview = await this.reviewService.load({ updatelist: this.updatelist, limit: 5 });
      this.updatelistreview = updatelistreview;

    } catch (err) {
      console.warn(err.message);
    }
  }

  openSignUpModal() {
    this.navigateTo('SignInPage');
  }

  openAddReviewModal() {
    let modal = this.modalCtrl.create('AddUpdateListReviewPage', { updatelist: this.updatelist });
    modal.present();
  }

  onLike () {

    if (User.getCurrentUser()) {
      this.isLiked = true;
      this.updatelistService.like(this.updatelist);
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
      await this.socialSharing.share(this.updatelist.title, null, null, this.updatelist.website)
    } catch (err) {
      console.warn(err)
    }
  }

  async onCall () {

    if (!this.updatelist.phone) return;

    try {
      await this.callNumber.callNumber(this.updatelist.phone, true)
    } catch (err) {
      console.warn(err)
    }
  }

  openUrl () {

    if (!this.updatelist.website) return;

    if (this.platform.is('cordova')) {
      
      this.browserTab.isAvailable().then((isAvailable: boolean) => {

        if (isAvailable) {
          this.browserTab.openUrl(this.updatelist.website);
        } else {
          this.inAppBrowser.create(this.updatelist.website, '_system');
        }
  
      }).catch((err) => console.warn(err));

    } else {
      this.inAppBrowser.create(this.updatelist.website, '_system');
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
        this.updatelist.location.latitude,
        this.updatelist.location.longitude
      ];

      await this.launchNavigator.navigate(destination, options);

    } catch (err) {
      console.warn(err);
    }

  }

  goToReviews() {
    this.navigateTo('UpdateListReviewPage', this.updatelist);
  }

}
