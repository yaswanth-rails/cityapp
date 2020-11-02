import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddRentListPage } from './add-rentlist';
import { SharedModule } from '../../shared.module';
 
@NgModule({
  declarations: [
    AddRentListPage,
  ],
  imports: [
    IonicPageModule.forChild(AddRentListPage),
    SharedModule
  ],
  exports: [
    AddRentListPage
  ]
})
export class AddRentListPageModule {}
