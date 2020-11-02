import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeServiceListReviewPage } from './homeservicelistreview';
import { SharedModule } from '../../shared.module';
 
@NgModule({
  declarations: [
    HomeServiceListReviewPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeServiceListReviewPage),
    SharedModule
  ],
  exports: [
    HomeServiceListReviewPage
  ]
})
export class HomeServiceListReviewPageModule {}
