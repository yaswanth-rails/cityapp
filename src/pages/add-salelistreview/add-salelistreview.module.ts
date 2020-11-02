import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddSaleListReviewPage } from './add-salelistreview';
import { SharedModule } from '../../shared.module';
 
@NgModule({
  declarations: [
    AddSaleListReviewPage,
  ],
  imports: [
    IonicPageModule.forChild(AddSaleListReviewPage),
    SharedModule
  ],
  exports: [
    AddSaleListReviewPage
  ]
})
export class AddSaleListReviewPageModule {}
