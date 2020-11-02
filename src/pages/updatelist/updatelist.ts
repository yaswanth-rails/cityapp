import { IonicPage ,PopoverController} from 'ionic-angular';
import { Component, Injector, Renderer } from '@angular/core';
import { BasePage } from '../base-page/base-page';
import { AppConfig } from '../../app/app.config';
import { UpdateList } from '../../providers/updatelist-service';
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
  selector: 'page-updatelist',
  templateUrl: 'updatelist.html',
  animations: [
    trigger('staggerIn', [
      transition('* => *', [
        query(':enter', style({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
        query(':enter', stagger('100ms', [animate('300ms', style({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
      ])
    ])
  ]
})
export class UpdateListPage extends BasePage {

  private params: any = {};
  private updatelists: UpdateList[] = [];

  constructor(injector: Injector,
    private renderer: Renderer,
    private admobFree: AdMobFree,
        public popoverCtrl: PopoverController,
    private updatelistService: UpdateList,
    private preference: Preference) {
    super(injector);

    this.params.cityupdate = this.navParams.get('cityupdate');
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

  goToUpdateList(updatelist) {
    this.navigateTo('UpdateListDetailPage', { updatelist: updatelist });
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

      const updatelists = await this.updatelistService.load(this.params);

      for (let updatelist of updatelists) {
        this.updatelists.push(updatelist);
      }

      this.onRefreshComplete(updatelists);

      if (this.updatelists.length) {
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
    this.updatelists = [];
    this.params.page = 0;
    this.loadData();
  }

}
