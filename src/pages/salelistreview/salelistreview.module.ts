import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SaleListReviewPage } from './salelistreview';
import { SharedModule } from '../../shared.module';
 
@NgModule({
  declarations: [
    SaleListReviewPage,
  ],
  imports: [
    IonicPageModule.forChild(SaleListReviewPage),
    SharedModule
  ],
  exports: [
    SaleListReviewPage
  ]
})
export class SaleListReviewPageModule {}
