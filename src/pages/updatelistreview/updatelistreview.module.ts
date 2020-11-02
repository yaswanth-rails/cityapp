import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpdateListReviewPage } from './updatelistreview';
import { SharedModule } from '../../shared.module';
 
@NgModule({
  declarations: [
    UpdateListReviewPage,
  ],
  imports: [
    IonicPageModule.forChild(UpdateListReviewPage),
    SharedModule
  ],
  exports: [
    UpdateListReviewPage
  ]
})
export class UpdateListReviewPageModule {}
