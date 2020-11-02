import { IonicPage, Platform ,PopoverController} from 'ionic-angular';
import { Component, Injector, Renderer} from '@angular/core';
import { ModalController } from 'ionic-angular';
import { HomeServiceList } from '../../providers/homeservicelist-service';
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
import { HomeServiceListReview } from '../../providers/homeservicelistreview-service';
import { CancionPopoverPage } from '../concion-popover/concion-popover';


@IonicPage()
@Component({
  selector: 'page-homeservicelist-detail-page',
  templateUrl: 'homeservicelist-detail.html'
})
export class HomeServiceListDetailPage extends BasePage {

  private images = [];
  private homeservicelist: HomeServiceList;
  private rating: number = 0;
  private isLiked: boolean = false;
  private isStarred: boolean = false;
  private location: any;
  private unit: string;

  private homeservicelistreview: HomeServiceListReview[] = [];

  constructor(injector: Injector,
    private renderer: Renderer,
    private platform: Platform,
    private homeservicelistService: HomeServiceList,
    private modalCtrl: ModalController,
    private preference: Preference,
    private callNumber: CallNumber,
    private geolocation: Geolocation,
    private inAppBrowser: InAppBrowser,
    private browserTab: BrowserTab,
    private reviewService: HomeServiceListReview,
    private launchNavigator: LaunchNavigator,
    private socialSharing: SocialSharing,
        public popoverCtrl: PopoverController
) {

      super(injector);

      this.homeservicelist = this.navParams.get('homeservicelist');
      console.log(this.homeservicelist)
      this.unit = this.preference.unit;
      this.images = [];

      if (this.homeservicelist) {

        this.rating = this.homeservicelist.rating;

        this.loadLocation();

        if (User.getCurrentUser()) {
          this.checkIfIsLiked();
          this.checkIfIsStarred();
        }
        
        this.loadReviews();

        if (this.homeservicelist.image) {
          this.images.push(this.homeservicelist.image);
        }
  
        if (this.homeservicelist.imageTwo) {
          this.images.push(this.homeservicelist.imageTwo);
        }
  
        if (this.homeservicelist.imageThree) {
          this.images.push(this.homeservicelist.imageThree);
        }
  
        if (this.homeservicelist.imageFour) {
          this.images.push(this.homeservicelist.imageFour);
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
      const isLiked = await this.homeservicelistService.isLiked(this.homeservicelist)
      this.isLiked = isLiked;
    } catch (err) {
      console.warn(err.message);
    }
  }

  async checkIfIsStarred() {
    try {
      const isStarred = await this.homeservicelistService.isStarred(this.homeservicelist)
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

      let homeservicelistreview = await this.reviewService.load({ homeservicelist: this.homeservicelist, limit: 5 });
      this.homeservicelistreview = homeservicelistreview;

    } catch (err) {
      console.warn(err.message);
    }
  }

     openPopover(myEvent) {
   //this.navctrl.setRoot(CancionPopoverPage,{event})
   let popover =  this.popoverCtrl.create(CancionPopoverPage);
    popover.present({

           ev: myEvent

    });

  }

  openSignUpModal() {
    this.navigateTo('SignInPage');
  }

  openAddReviewModal() {
    let modal = this.modalCtrl.create('AddHomeServiceListReviewPage', { homeservicelist: this.homeservicelist });
    modal.present();
  }

  onLike () {

    if (User.getCurrentUser()) {
      this.isLiked = true;
      this.homeservicelistService.like(this.homeservicelist);
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
      await this.socialSharing.share(this.homeservicelist.title, null, null, this.homeservicelist.website)
    } catch (err) {
      console.warn(err)
    }
  }

  async onCall () {

    if (!this.homeservicelist.phone) return;

    try {
      await this.callNumber.callNumber(this.homeservicelist.phone, true)
    } catch (err) {
      console.warn(err)
    }
  }

  openUrl () {

    if (!this.homeservicelist.website) return;

    if (this.platform.is('cordova')) {
      
      this.browserTab.isAvailable().then((isAvailable: boolean) => {

        if (isAvailable) {
          this.browserTab.openUrl(this.homeservicelist.website);
        } else {
          this.inAppBrowser.create(this.homeservicelist.website, '_system');
        }
  
      }).catch((err) => console.warn(err));

    } else {
      this.inAppBrowser.create(this.homeservicelist.website, '_system');
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
        this.homeservicelist.location.latitude,
        this.homeservicelist.location.longitude
      ];

      await this.launchNavigator.navigate(destination, options);

    } catch (err) {
      console.warn(err);
    }

  }

  goToReviews() {
    this.navigateTo('HomeServiceListReviewPage', this.homeservicelist);
  }

}
