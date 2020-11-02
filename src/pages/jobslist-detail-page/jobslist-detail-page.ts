import { IonicPage, Platform } from 'ionic-angular';
import { Component, Injector, Renderer} from '@angular/core';
import { ModalController } from 'ionic-angular';
import { JobsList } from '../../providers/jobslist-service';
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
import { JobsListReview } from '../../providers/jobslistreview-service';

@IonicPage()
@Component({
  selector: 'page-jobslist-detail-page',
  templateUrl: 'jobslist-detail-page.html'
})
export class JobsListDetailPage extends BasePage {

  private images = [];
  private jobslist: JobsList;
  private rating: number = 0;
  private isLiked: boolean = false;
  private isStarred: boolean = false;
  private location: any;
  private unit: string;

  private jobslistreview: JobsListReview[] = [];

  constructor(injector: Injector,
    private renderer: Renderer,
    private platform: Platform,
    private jobslistService: JobsList,
    private modalCtrl: ModalController,
    private preference: Preference,
    private callNumber: CallNumber,
    private geolocation: Geolocation,
    private inAppBrowser: InAppBrowser,
    private browserTab: BrowserTab,
    private reviewService: JobsListReview,
    private launchNavigator: LaunchNavigator,
    private socialSharing: SocialSharing) {

      super(injector);

      this.jobslist = this.navParams.get('jobslist');
      console.log(this.jobslist)
      this.unit = this.preference.unit;
      this.images = [];

      if (this.jobslist) {

        this.rating = this.jobslist.rating;

        this.loadLocation();

        if (User.getCurrentUser()) {
          this.checkIfIsLiked();
          this.checkIfIsStarred();
        }
        
        this.loadReviews();

        if (this.jobslist.image) {
          this.images.push(this.jobslist.image);
        }
  
        if (this.jobslist.imageTwo) {
          this.images.push(this.jobslist.imageTwo);
        }
  
        if (this.jobslist.imageThree) {
          this.images.push(this.jobslist.imageThree);
        }
  
        if (this.jobslist.imageFour) {
          this.images.push(this.jobslist.imageFour);
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
      const isLiked = await this.jobslistService.isLiked(this.jobslist)
      this.isLiked = isLiked;
    } catch (err) {
      console.warn(err.message);
    }
  }

  async checkIfIsStarred() {
    try {
      const isStarred = await this.jobslistService.isStarred(this.jobslist)
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

      let jobslistreview = await this.reviewService.load({ jobslist: this.jobslist, limit: 5 });
      this.jobslistreview = jobslistreview;

    } catch (err) {
      console.warn(err.message);
    }
  }

  openSignUpModal() {
    this.navigateTo('SignInPage');
  }

  openAddReviewModal() {
    let modal = this.modalCtrl.create('AddJobsListReviewPage', { jobslist: this.jobslist });
    modal.present();
  }

  onLike () {

    if (User.getCurrentUser()) {
      this.isLiked = true;
      this.jobslistService.like(this.jobslist);
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
      await this.socialSharing.share(this.jobslist.title, null, null, this.jobslist.website)
    } catch (err) {
      console.warn(err)
    }
  }

  async onCall () {

    if (!this.jobslist.phone) return;

    try {
      await this.callNumber.callNumber(this.jobslist.phone, true)
    } catch (err) {
      console.warn(err)
    }
  }

  openUrl () {

    if (!this.jobslist.website) return;

    if (this.platform.is('cordova')) {
      
      this.browserTab.isAvailable().then((isAvailable: boolean) => {

        if (isAvailable) {
          this.browserTab.openUrl(this.jobslist.website);
        } else {
          this.inAppBrowser.create(this.jobslist.website, '_system');
        }
  
      }).catch((err) => console.warn(err));

    } else {
      this.inAppBrowser.create(this.jobslist.website, '_system');
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
        this.jobslist.location.latitude,
        this.jobslist.location.longitude
      ];

      await this.launchNavigator.navigate(destination, options);

    } catch (err) {
      console.warn(err);
    }

  }

  goToReviews() {
    this.navigateTo('JobsListReviewPage', this.jobslist);
  }

}
