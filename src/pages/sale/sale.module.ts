import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalePage } from './sale';
import { SharedModule } from '../../shared.module';
 
@NgModule({
  declarations: [
    SalePage,
  ],
  imports: [
    IonicPageModule.forChild(SalePage),
    SharedModule
  ],
  exports: [
    SalePage
  ]
})
export class SalePageModule {}
