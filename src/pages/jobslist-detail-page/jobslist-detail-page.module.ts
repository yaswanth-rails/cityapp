import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JobsListDetailPage } from './jobslist-detail-page';
import { SharedModule } from '../../shared.module';
 
@NgModule({
  declarations: [
    JobsListDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(JobsListDetailPage),
    SharedModule
  ],
  exports: [
    JobsListDetailPage
  ]
})
export class JobsListDetailPageModule {}
