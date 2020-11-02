import { IonicPage,PopoverController } from 'ionic-angular';
import { Component, Injector, Renderer } from '@angular/core';
import { RentList } from '../../providers/rentlist-service';
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
  templateUrl: 'favorite-rent.html',
  animations: [
    trigger('staggerIn', [
      transition('* => *', [
        query(':enter', style({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
        query(':enter', stagger('100ms', [animate('300ms', style({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
      ])
    ])
  ]
})
export class FavoritesRentPage extends BasePage {

  private params: any = {};
  private rentlists: RentList[] = [];

  constructor(injector: Injector,
    private renderer: Renderer,
        public popoverCtrl: PopoverController,
    private rentlistService: RentList) {
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

  goToRentList(rentlist) {
    this.navigateTo('RentListDetailPage', { rentlist: rentlist });
  }
    openPopover(myEvent) {
   //this.navctrl.setRoot(CancionPopoverPage,{event})
   let popover =  this.popoverCtrl.create(CancionPopoverPage);
    popover.present({

           ev: myEvent

    });

  }

  loadData() {

    this.rentlistService.loadFavorites(this.params).then(rentlists => {

      for (let rentlist of rentlists) {
        this.rentlists.push(rentlist);
      }

      this.onRefreshComplete(rentlists);

      if (this.rentlists.length) {
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
    this.rentlists = [];
    this.params.page = 0;
    this.loadData();
  }

}
