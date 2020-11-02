import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SlPage } from './sl';

@NgModule({
  declarations: [
    SlPage,
  ],
  imports: [
    IonicPageModule.forChild(SlPage),
  ],
})
export class SlPageModule {}
