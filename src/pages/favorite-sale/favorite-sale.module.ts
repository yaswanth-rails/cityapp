import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavoritesSale } from './favorite-sale';
import { SharedModule } from '../../shared.module';
 
@NgModule({
  declarations: [
    FavoritesSale,
  ],
  imports: [
    IonicPageModule.forChild(FavoritesSale),
    SharedModule
  ],
  exports: [
    FavoritesSale
  ]
})
export class FavoritesSalePageModule {}
