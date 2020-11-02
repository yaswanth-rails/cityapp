import { IonicPage,PopoverController } from 'ionic-angular';
import { Component, Injector } from '@angular/core';
import { BasePage } from '../base-page/base-page';
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
  selector: 'page-subitem',
  templateUrl: 'subitem.html',
    animations: [
    trigger('staggerIn', [
      transition('* => *', [
        query(':enter', style({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
        query(':enter', stagger('100ms', [animate('300ms', style({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
      ])
    ])
  ]
})
export class SubitemPage extends BasePage {
stats: any = {
    
    places: 0,
    jobslist:0,
    // updatelist:0,
    salelist:0,
    // homeservcielist:0,
    // offerslist:0
    
  };


  constructor(injector: Injector,    public popoverCtrl: PopoverController

) {
    super(injector);


  }

  enableMenuSwipe() {
    return true;
  }

  ionViewDidLoad() {


  }

  goToPlaces() {
    this.navigateTo('AddPlacePage');
  }

  goToAddHomeService() {
    this.navigateTo('AddHomeServiceListPage');
  }

  goToAddJobsList() {
    this.navigateTo('AddJobsListPage');
  }


 goToAddUpdateList() {
    this.navigateTo('AddUpdateListPage');
  }
  

 goToAddSaleList() {
    this.navigateTo('AddSaleListPage');
  }
  openPopover(myEvent) {
   //this.navctrl.setRoot(CancionPopoverPage,{event})
   let popover =  this.popoverCtrl.create(CancionPopoverPage);
    popover.present({

           ev: myEvent

    });

  }
   goToAddRentList() {
    this.navigateTo('AddRentListPage');
  }



}
