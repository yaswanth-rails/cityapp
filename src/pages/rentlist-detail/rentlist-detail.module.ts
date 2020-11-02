import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RentListDetailPage } from './rentlist-detail';
import { SharedModule } from '../../shared.module';
 
@NgModule({
  declarations: [
    RentListDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(RentListDetailPage),
    SharedModule
  ],
  exports: [
    RentListDetailPage
  ]
})
export class RentListDetailPageModule {}
