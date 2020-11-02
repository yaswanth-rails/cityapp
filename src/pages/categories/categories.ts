import { IonicPage } from 'ionic-angular';
import { Component, Injector, Renderer } from '@angular/core';
import { Events,PopoverController } from 'ionic-angular';
import { Category } from '../../providers/categories';
import { BasePage } from '../base-page/base-page';
import { User } from '../../providers/user-service';
import { ImgLoader } from 'ionic-image-loader';
import { CancionPopoverPage } from '../concion-popover/concion-popover';
import { GeolocationOptions, Geolocation } from '@ionic-native/geolocation';

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
  selector: 'page-categories',
  templateUrl: 'categories.html',
  animations: [
    trigger('staggerIn', [
      transition('* => *', [
        query(':enter', style({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
        query(':enter', stagger('100ms', [animate('300ms', style({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
      ])
    ])
  ]
})
export class CategoriesPage extends BasePage {

  private categories: Category[] = [];
  location:any;

  constructor(injector: Injector,
    private events: Events,
    private renderer: Renderer,
    public geolocation:Geolocation,
    public popoverCtrl: PopoverController,
    private categoryService: Category) {
    super(injector);

         const options: GeolocationOptions = {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 60000
      };

     this.geolocation.getCurrentPosition(options).then((result)=>{
   this.location = result.coords;
   console.log(this.location);


     })
  }

  enableMenuSwipe() {
    return true;
  }

  ionViewDidLoad() {
    this.showLoadingView();
    this.loadData();
  }

  goToPlaces(category: Category) {
    
   
    this.navigateTo('PlacesPage', { category: category,location:this.location });
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

      this.categories = await this.categoryService.load();
  
      if (this.categories.length) {
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
