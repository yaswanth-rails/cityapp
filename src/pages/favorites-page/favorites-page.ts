import { IonicPage,PopoverController } from 'ionic-angular';
import { Component, Injector, Renderer } from '@angular/core';
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
  selector: 'page-favorites-page',
  templateUrl: 'favorites-page.html',
  animations: [
    trigger('staggerIn', [
      transition('* => *', [
        query(':enter', style({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
        query(':enter', stagger('100ms', [animate('300ms', style({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
      ])
    ])
  ]
})
export class FavoritesPage extends BasePage {

  private params: any = {};


  constructor(injector: Injector,
    private renderer: Renderer,
        public popoverCtrl: PopoverController,
) {
    super(injector);

  
    this.onReload();
  }

  enableMenuSwipe() {
    return true;
  }

  onImageLoad(imgLoader: ImgLoader) {
    this.renderer.setElementClass(imgLoader.element, 'fade-in', true);  
  }

  // goToPlace(place) {
  //   this.navigateTo('PlaceDetailPage', { place: place });
  // }
    openPopover(myEvent) {
   //this.navctrl.setRoot(CancionPopoverPage,{event})
   let popover =  this.popoverCtrl.create(CancionPopoverPage);
    popover.present({

           ev: myEvent

    });

  }
  gotoPlace(){
        this.navigateTo('FavoritesPlacePage');


  }
   gotoCityupdate(){

        this.navigateTo('FavoritesUpdatePage');


  }
 gotoSale(){
     
        this.navigateTo('FavoritesSale');


  }
  gotoRent(){
     
        this.navigateTo('FavoritesRentPage');


  }
   gotoJobs(){
     
        this.navigateTo('FavoritesJobsListPage');


  }
 
    gotoHomeServiceList(){
     
        this.navigateTo('FavoritesHomeServiceListPage');


  }
 
 

  onLoadMore(infiniteScroll) {
    this.infiniteScroll = infiniteScroll;
    this.params.page++;

  }

  onReload(refresher = null) {
    this.refresher = refresher;
   
    this.params.page = 0;

  }

}
