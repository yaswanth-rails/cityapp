import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpdateListDetailPage } from './updatelist-detail';
import { SharedModule } from '../../shared.module';
 
@NgModule({
  declarations: [
    UpdateListDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(UpdateListDetailPage),
    SharedModule
  ],
  exports: [
    UpdateListDetailPage
  ]
})
export class UpdateListDetailPageModule {}
