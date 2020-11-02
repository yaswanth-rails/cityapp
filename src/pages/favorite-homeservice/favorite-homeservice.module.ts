import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavoritesHomeServiceListPage } from './favorite-homeservice';
import { SharedModule } from '../../shared.module';
 
@NgModule({
  declarations: [
    FavoritesHomeServiceListPage,
  ],
  imports: [
    IonicPageModule.forChild(FavoritesHomeServiceListPage),
    SharedModule
  ],
  exports: [
    FavoritesHomeServiceListPage
  ]
})
export class FavoritesHomeServiceListPageModule {}
