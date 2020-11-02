import { IonicPage,PopoverController } from 'ionic-angular';
import { Component, Injector, Renderer } from '@angular/core';
import { UpdateList } from '../../providers/updatelist-service';
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
  templateUrl: 'favorite-news.html',
  animations: [
    trigger('staggerIn', [
      transition('* => *', [
        query(':enter', style({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
        query(':enter', stagger('100ms', [animate('300ms', style({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
      ])
    ])
  ]
})
export class FavoritesUpdatePage extends BasePage {

  private params: any = {};
  private updatelist: UpdateList[] = [];

  constructor(injector: Injector,
    private renderer: Renderer,
        public popoverCtrl: PopoverController,
    private updatelistService: UpdateList) {
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

  goToUpdate(updatelist) {
    this.navigateTo('UpdateListDetailPage', { updatelist: updatelist });
  }

    openPopover(myEvent) {
   //this.navctrl.setRoot(CancionPopoverPage,{event})
   let popover =  this.popoverCtrl.create(CancionPopoverPage);
    popover.present({

           ev: myEvent

    });

  }

  loadData() {

    this.updatelistService.loadFavorites(this.params).then(updates => {

      for (let update of updates) {
        this.updatelist.push(update);
      }

      this.onRefreshComplete(updates);

      if (this.updatelist.length) {
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
    this.updatelist = [];
    this.params.page = 0;
    this.loadData();
  }

}
