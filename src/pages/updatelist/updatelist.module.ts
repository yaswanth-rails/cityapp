import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpdateListPage } from './updatelist';
import { SharedModule } from '../../shared.module';
 
@NgModule({
  declarations: [
    UpdateListPage,
  ],
  imports: [
    IonicPageModule.forChild(UpdateListPage),
    SharedModule
  ],
  exports: [
    UpdateListPage
  ]
})
export class UpdateListPageModule {}
