import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CityUpdatePage } from './cityupdate';
import { SharedModule } from '../../shared.module';
 
@NgModule({
  declarations: [
    CityUpdatePage,
  ],
  imports: [
    IonicPageModule.forChild(CityUpdatePage),
    SharedModule
  ],
  exports: [
    CityUpdatePage
  ]
})
export class CityUpdatePageModule {}
