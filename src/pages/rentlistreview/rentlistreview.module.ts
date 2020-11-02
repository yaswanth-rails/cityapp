import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RentListReviewPage } from './rentlistreview';
import { SharedModule } from '../../shared.module';
 
@NgModule({
  declarations: [
    RentListReviewPage,
  ],
  imports: [
    IonicPageModule.forChild(RentListReviewPage),
    SharedModule
  ],
  exports: [
    RentListReviewPage
  ]
})
export class RentListReviewPageModule {}
