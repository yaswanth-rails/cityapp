import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SaleListPage } from './salelist';
import { SharedModule } from '../../shared.module';
 
@NgModule({
  declarations: [
    SaleListPage,
  ],
  imports: [
    IonicPageModule.forChild(SaleListPage),
    SharedModule
  ],
  exports: [
    SaleListPage
  ]
})
export class SaleListPageModule {}
