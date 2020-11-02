import { IonicPage,PopoverController } from 'ionic-angular';
import { Component, Injector, Renderer } from '@angular/core';
import { HomeServiceList } from '../../providers/homeservicelist-service';
import { BasePage } from '../base-page/base-page';
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
  selector: 'page-favorites',
  templateUrl: 'favorite-homeservice.html',
  animations: [
    trigger('staggerIn', [
      transition('* => *', [
        query(':enter', style({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
        query(':enter', stagger('100ms', [animate('300ms', style({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
      ])
    ])
  ]
})
export class FavoritesHomeServiceListPage extends BasePage {

  private params: any = {};
  private homeservicelists: HomeServiceList[] = [];

  constructor(injector: Injector,
    private renderer: Renderer,
        public popoverCtrl: PopoverController,
    private homeservicelistService: HomeServiceList) {
    super(injector);

    this.showLoadingView();
    this.onReload();
  }

  enableMenuSwipe() {
    return true;
  }

  onImageLoad(imgLoader: ImgLoader) {
    this.renderer.setElementClass(imgLoader.element, 'fade-in', true);  
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

  loadData() {

    this.homeservicelistService.loadFavorites(this.params).then(homeservicelists => {

      for (let homeservicelist of homeservicelists) {
        this.homeservicelists.push(homeservicelist);
      }

      this.onRefreshComplete(homeservicelists);

      if (this.homeservicelists.length) {
        this.showContentView();
      } else {
        this.showEmptyView();
      }

    }, () => {
      this.onRefreshComplete();
    });
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
