import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeServiceListPage } from './homeservicelist';
import { SharedModule } from '../../shared.module';
 
@NgModule({
  declarations: [
    HomeServiceListPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeServiceListPage),
    SharedModule
  ],
  exports: [
    HomeServiceListPage
  ]
})
export class HomeServiceListPageModule {}
