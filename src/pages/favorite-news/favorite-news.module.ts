import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavoritesUpdatePage } from './favorite-news';
import { SharedModule } from '../../shared.module';
 
@NgModule({
  declarations: [
    FavoritesUpdatePage,
  ],
  imports: [
    IonicPageModule.forChild(FavoritesUpdatePage),
    SharedModule
  ],
  exports: [
    FavoritesUpdatePage
  ]
})
export class FavoritesUpdatePageModule {}
