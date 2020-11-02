import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GooglemapPage } from './googlemap';
import { SharedModule } from '../../shared.module';


@NgModule({
  declarations: [
    GooglemapPage,
  ],
  imports: [
    IonicPageModule.forChild(GooglemapPage),
        SharedModule,

  ],
})
export class GooglemapPageModule {}

