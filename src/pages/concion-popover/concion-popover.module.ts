import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CancionPopoverPage } from './concion-popover';

@NgModule({
  declarations: [
    CancionPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(CancionPopoverPage),
  ],
})
export class ConcionPopoverPageModule {}
