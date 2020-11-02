import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeServicePage } from './homeservice';
import { SharedModule } from '../../shared.module';
 
@NgModule({
  declarations: [
    HomeServicePage,
  ],
  imports: [
    IonicPageModule.forChild(HomeServicePage),
    SharedModule
  ],
  exports: [
    HomeServicePage
  ]
})
export class HomeServicePageModule {}
