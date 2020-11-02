import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddJobsListReviewPage } from './add-jobslistreview';
import { SharedModule } from '../../shared.module';
 
@NgModule({
  declarations: [
    AddJobsListReviewPage,
  ],
  imports: [
    IonicPageModule.forChild(AddJobsListReviewPage),
    SharedModule
  ],
  exports: [
    AddJobsListReviewPage
  ]
})
export class AddJobsListReviewPageModule {}
