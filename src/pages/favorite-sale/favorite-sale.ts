import { IonicPage,PopoverController } from 'ionic-angular';
import { Component, Injector, Renderer } from '@angular/core';
import { SaleList } from '../../providers/salelist-service';
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
  selector: 'page-favorite',
  templateUrl: 'favorite-sale.html',
  animations: [
    trigger('staggerIn', [
      transition('* => *', [
        query(':enter', style({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
        query(':enter', stagger('100ms', [animate('300ms', style({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
      ])
    ])
  ]
})
export class FavoritesSale extends BasePage {

  private params: any = {};
  private salelists: SaleList[] = [];

  constructor(injector: Injector,
    private renderer: Renderer,
        public popoverCtrl: PopoverController,
    private salelistService: SaleList) {
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

  goToSaleList(salelist) {
    this.navigateTo('SaleListDetailPage', { salelist: salelist });
  }
    openPopover(myEvent) {
   //this.navctrl.setRoot(CancionPopoverPage,{event})
   let popover =  this.popoverCtrl.create(CancionPopoverPage);
    popover.present({

           ev: myEvent

    });

  }

  loadData() {

    this.salelistService.loadFavorites(this.params).then(salelists => {

      for (let salelist of salelists) {
        this.salelists.push(salelist);
      }

      this.onRefreshComplete(salelists);

      if (this.salelists.length) {
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
    this.salelists = [];
    this.params.page = 0;
    this.loadData();
  }

}
