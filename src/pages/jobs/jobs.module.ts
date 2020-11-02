import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JobsPage } from './jobs';
import { SharedModule } from '../../shared.module';
 
@NgModule({
  declarations: [
    JobsPage,
  ],
  imports: [
    IonicPageModule.forChild(JobsPage),
    SharedModule
  ],
  exports: [
    JobsPage
  ]
})
export class JobsPageModule {}
