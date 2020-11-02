import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavoritesPlacePage } from './favorite-place';
import { SharedModule } from '../../shared.module';
 
@NgModule({
  declarations: [
    FavoritesPlacePage,
  ],
  imports: [
    IonicPageModule.forChild(FavoritesPlacePage),
    SharedModule
  ],
  exports: [
    FavoritesPlacePage
  ]
})
export class FavoritesPlacePageModule {}
