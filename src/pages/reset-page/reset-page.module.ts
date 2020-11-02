import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResetPage } from './reset-page';
import { SharedModule } from '../../shared.module';
 
@NgModule({
  declarations: [
    ResetPage,
  ],
  imports: [
    IonicPageModule.forChild(ResetPage),
    SharedModule
  ],
  exports: [
    ResetPage
  ]
})
export class ChangePasswordPageModule {}
