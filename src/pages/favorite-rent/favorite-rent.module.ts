import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavoritesRentPage } from './favorite-rent';
import { SharedModule } from '../../shared.module';
 
@NgModule({
  declarations: [
    FavoritesRentPage,
  ],
  imports: [
    IonicPageModule.forChild(FavoritesRentPage),
    SharedModule
  ],
  exports: [
    FavoritesRentPage
  ]
})
export class FavoritesRentPageModule {}
