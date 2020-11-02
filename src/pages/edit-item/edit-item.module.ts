import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditItemPage } from './edit-item';
import { SharedModule } from '../../shared.module';
 
@NgModule({
  declarations: [
    EditItemPage,
  ],
  imports: [
    IonicPageModule.forChild(EditItemPage),
    SharedModule
  ],
  exports: [
    EditItemPage
  ]
})
export class EditItemPageModule {}
