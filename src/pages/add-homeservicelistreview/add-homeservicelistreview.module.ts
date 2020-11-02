import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddHomeServiceListReviewPage } from './add-homeservicelistreview';
import { SharedModule } from '../../shared.module';
 
@NgModule({
  declarations: [
    AddHomeServiceListReviewPage,
  ],
  imports: [
    IonicPageModule.forChild(AddHomeServiceListReviewPage),
    SharedModule
  ],
  exports: [
    AddHomeServiceListReviewPage
  ]
})
export class AddHomeServiceListReviewPageModule {}
