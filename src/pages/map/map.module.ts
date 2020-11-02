import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapPage1 } from './map';
import { SharedModule } from '../../shared.module';


@NgModule({
  declarations: [
    MapPage1,
  ],
  imports: [
    IonicPageModule.forChild(MapPage1),
        SharedModule

  ],
})
export class MapPage1Module {}
