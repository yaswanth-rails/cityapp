import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SaleListDetailPage } from './salelist-detail-page';
import { SharedModule } from '../../shared.module';
 
@NgModule({
  declarations: [
    SaleListDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(SaleListDetailPage),
    SharedModule
  ],
  exports: [
    SaleListDetailPage
  ]
})
export class SaleListDetailPageModule {}
