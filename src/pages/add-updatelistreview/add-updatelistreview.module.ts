import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddUpdateListReviewPage } from './add-updatelistreview';
import { SharedModule } from '../../shared.module';
 
@NgModule({
  declarations: [
    AddUpdateListReviewPage,
  ],
  imports: [
    IonicPageModule.forChild(AddUpdateListReviewPage),
    SharedModule
  ],
  exports: [
    AddUpdateListReviewPage
  ]
})
export class AddUpdateListReviewPageModule {}
