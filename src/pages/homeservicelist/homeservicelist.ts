import { IonicPage ,PopoverController} from 'ionic-angular';
import { Component, Injector, Renderer } from '@angular/core';
import { BasePage } from '../base-page/base-page';
import { AppConfig } from '../../app/app.config';
import { HomeServiceList } from '../../providers/homeservicelist-service';
import { Preference } from '../../providers/preference';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';
import { ImgLoader } from 'ionic-image-loader';
import { CancionPopoverPage } from '../concion-popover/concion-popover';

import {
  trigger,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';

@IonicPage()
@Component({
  selector: 'page-homeservicelist',
  templateUrl: 'homeservicelist.html',
  animations: [
    trigger('staggerIn', [
      transition('* => *', [
        query(':enter', style({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
        query(':enter', stagger('100ms', [animate('300ms', style({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
      ])
    ])
  ]
})
export class HomeServiceListPage extends BasePage {

  private params: any = {};
  private homeservicelists: HomeServiceList[] = [];

  constructor(injector: Injector,
    private renderer: Renderer,
    private admobFree: AdMobFree,
        public popoverCtrl: PopoverController,
    private homeservicelistService: HomeServiceList,
    private preference: Preference) {
    super(injector);

    this.params.homeservice = this.navParams.get('homeservice');
    this.params.isFeatured = this.navParams.get('isFeatured');
    this.params.location = this.navParams.get('location');
    this.params.unit = this.preference.unit;
    this.params.limit = 20;
    this.params.page = 0;

    this.showLoadingView();
    this.onReload();
    this.prepareAd();
  }

  enableMenuSwipe() {
    return false;
  }

  onImageLoad(imgLoader: ImgLoader) {
    this.renderer.setElementClass(imgLoader.element, 'fade-in', true);  
  }

  async prepareAd() {

    try {

      if (AppConfig.BANNER_ID) {
        
        const bannerConfig: AdMobFreeBannerConfig = {
          id: AppConfig.BANNER_ID,
          isTesting: false,
          autoShow: true
        };
        
        this.admobFree.banner.config(bannerConfig);
        
        this.admobFree.banner.prepare()
      }

    } catch (err) {
      console.warn(err);
    }

  }

  goToHomeServiceList(homeservicelist) {
    this.navigateTo('HomeServiceListDetailPage', { homeservicelist: homeservicelist });
  }
  

   openPopover(myEvent) {
   //this.navctrl.setRoot(CancionPopoverPage,{event})
   let popover =  this.popoverCtrl.create(CancionPopoverPage);
    popover.present({

           ev: myEvent

    });

  }

  async loadData() {

    try {

      const homeservicelists = await this.homeservicelistService.load(this.params);

      for (let homeservicelist of homeservicelists) {
        this.homeservicelists.push(homeservicelist);
        console.log(this.homeservicelists);
      }

      this.onRefreshComplete(homeservicelists);

      if (this.homeservicelists.length) {
        this.showContentView();
      } else {
        this.showEmptyView();
      }

    } catch (err) {
      this.onRefreshComplete();

      let message = await this.getTrans('ERROR_NETWORK');
      this.showToast(message);
    }
  }

  onLoadMore(infiniteScroll) {
    this.infiniteScroll = infiniteScroll;
    this.params.page++;
    this.loadData();
  }

  onReload(refresher = null) {
    this.refresher = refresher;
    this.homeservicelists = [];
    this.params.page = 0;
    this.loadData();
  }

}
