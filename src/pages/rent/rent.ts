import { IonicPage } from 'ionic-angular';
import { Component, Injector, Renderer } from '@angular/core';
import { Events ,PopoverController} from 'ionic-angular';
import { Rent } from '../../providers/rent';
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
  selector: 'page-rent',
  templateUrl: 'rent.html',
  animations: [
    trigger('staggerIn', [
      transition('* => *', [
        query(':enter', style({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
        query(':enter', stagger('100ms', [animate('300ms', style({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
      ])
    ])
  ]
})
export class RentPage extends BasePage {

  private rent: Rent[] = [];

  constructor(injector: Injector,
    private events: Events,
    private renderer: Renderer,
        public popoverCtrl: PopoverController,

    private rentService: Rent) {
    super(injector);
  }

  enableMenuSwipe() {
    return true;
  }

  ionViewDidLoad() {
    this.showLoadingView();
    this.loadData();
  }

  goToRentList(rent: Rent) {
    this.navigateTo('RentListPage', { rent: rent });
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

      this.rent = await this.rentService.load();
  
      if (this.rent.length) {
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
