import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JobsListReviewPage } from './jobslistreview-page';
import { SharedModule } from '../../shared.module';
 
@NgModule({
  declarations: [
    JobsListReviewPage,
  ],
  imports: [
    IonicPageModule.forChild(JobsListReviewPage),
    SharedModule
  ],
  exports: [
    JobsListReviewPage
  ]
})
export class JobsListReviewPageModule {}
