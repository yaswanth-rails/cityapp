import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RentListPage } from './rentlist';
import { SharedModule } from '../../shared.module';
 
@NgModule({
  declarations: [
    RentListPage,
  ],
  imports: [
    IonicPageModule.forChild(RentListPage),
    SharedModule
  ],
  exports: [
    RentListPage
  ]
})
export class RentListPageModule {}
