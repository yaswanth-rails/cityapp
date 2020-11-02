import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddSaleListPage } from './add-salelist';
import { SharedModule } from '../../shared.module';
 
@NgModule({
  declarations: [
    AddSaleListPage,
  ],
  imports: [
    IonicPageModule.forChild(AddSaleListPage),
    SharedModule
  ],
  exports: [
    AddSaleListPage
  ]
})
export class AddSaleListPageModule {}
