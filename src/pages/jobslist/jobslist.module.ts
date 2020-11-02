import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JobsListPage } from './jobslist';
import { SharedModule } from '../../shared.module';
 
@NgModule({
  declarations: [
    JobsListPage,
  ],
  imports: [
    IonicPageModule.forChild(JobsListPage),
    SharedModule
  ],
  exports: [
    JobsListPage
  ]
})
export class JobsListPageModule {}
