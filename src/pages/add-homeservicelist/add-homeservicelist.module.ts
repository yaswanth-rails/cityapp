import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddHomeServiceListPage } from './add-homeservicelist';
import { SharedModule } from '../../shared.module';
 
@NgModule({
  declarations: [
    AddHomeServiceListPage,
  ],
  imports: [
    IonicPageModule.forChild(AddHomeServiceListPage),
    SharedModule
  ],
  exports: [
    AddHomeServiceListPage
  ]
})
export class AddHomeServiceListPageModule {}
