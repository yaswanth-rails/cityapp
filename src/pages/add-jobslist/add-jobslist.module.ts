import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddJobsListPage } from './add-jobslist';
import { SharedModule } from '../../shared.module';
 
@NgModule({
  declarations: [
    AddJobsListPage,
  ],
  imports: [
    IonicPageModule.forChild(AddJobsListPage),
    SharedModule
  ],
  exports: [
    AddJobsListPage
  ]
})
export class AddJobsListPageModule {}
