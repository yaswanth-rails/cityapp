import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RentPage } from './rent';
import { SharedModule } from '../../shared.module';
 
@NgModule({
  declarations: [
    RentPage,
  ],
  imports: [
    IonicPageModule.forChild(RentPage),
    SharedModule
  ],
  exports: [
    RentPage
  ]
})
export class RentPageModule {}
