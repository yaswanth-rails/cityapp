import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddRentListReviewPage } from './add-rentlistreview';
import { SharedModule } from '../../shared.module';
 
@NgModule({
  declarations: [
    AddRentListReviewPage,
  ],
  imports: [
    IonicPageModule.forChild(AddRentListReviewPage),
    SharedModule
  ],
  exports: [
    AddRentListReviewPage
  ]
})
export class AddRentListReviewPageModule {}
