import { IonicPage,PopoverController } from 'ionic-angular';
import { Component, Injector, Renderer } from '@angular/core';
import { Events } from 'ionic-angular';
import { Sale } from '../../providers/sale';
import { BasePage } from '../base-page/base-page';
import { User } from '../../providers/user-service';
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
  selector: 'page-sale',
  templateUrl: 'sale.html',
  animations: [
    trigger('staggerIn', [
      transition('* => *', [
        query(':enter', style({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
        query(':enter', stagger('100ms', [animate('300ms', style({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
      ])
    ])
  ]
})
export class SalePage extends BasePage {

  private sale: Sale[] = [];

  constructor(injector: Injector,
    private events: Events,
    private renderer: Renderer,
    public popoverCtrl: PopoverController,

    private saleService: Sale) {
    super(injector);
  }

  enableMenuSwipe() {
    return true;
  }

  ionViewDidLoad() {
    this.showLoadingView();
    this.loadData();
  }

  goToSaleList(sale: Sale) {
    this.navigateTo('SaleListPage', { sale: sale });
  }

  onImageLoad(imgLoader: ImgLoader) {
    this.renderer.setElementClass(imgLoader.element, 'fade-in', true);  
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

      this.sale = await this.saleService.load();
  
      if (this.sale.length) {
        this.showContentView();
      } else {
        this.showEmptyView();
      }
  
      this.onRefreshComplete();

    } catch (error) {
      if (error.code === 209) {
        User.logOut().then(
          () => this.events.publish('user:logout')),
          err => console.log(err);
      }

      this.showErrorView();
      this.onRefreshComplete();
    }
  }

  onReload(refresher) {
    this.refresher = refresher;
    this.loadData();
  }

}
