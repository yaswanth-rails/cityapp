import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubitemPage } from './subitem';

@NgModule({
  declarations: [
    SubitemPage,
  ],
  imports: [
    IonicPageModule.forChild(SubitemPage),
  ],
  exports: [
    SubitemPage
  ]
})
export class SubitemPageModule {}
