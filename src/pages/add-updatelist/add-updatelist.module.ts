import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddUpdateListPage } from './add-updatelist';
import { SharedModule } from '../../shared.module';
 
@NgModule({
  declarations: [
    AddUpdateListPage,
  ],
  imports: [
    IonicPageModule.forChild(AddUpdateListPage),
    SharedModule
  ],
  exports: [
    AddUpdateListPage
  ]
})
export class AddUpdateListPageModule {}
