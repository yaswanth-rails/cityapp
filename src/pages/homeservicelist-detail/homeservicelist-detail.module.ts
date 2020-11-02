import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeServiceListDetailPage } from './homeservicelist-detail';
import { SharedModule } from '../../shared.module';
 
@NgModule({
  declarations: [
    HomeServiceListDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeServiceListDetailPage),
    SharedModule
  ],
  exports: [
    HomeServiceListDetailPage
  ]
})
export class HomeServiceListDetailPageModule {}
