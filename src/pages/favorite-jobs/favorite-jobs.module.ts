import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavoritesJobsListPage } from './favorite-jobs';
import { SharedModule } from '../../shared.module';
 
@NgModule({
  declarations: [
    FavoritesJobsListPage,
  ],
  imports: [
    IonicPageModule.forChild(FavoritesJobsListPage),
    SharedModule
  ],
  exports: [
    FavoritesJobsListPage
  ]
})
export class FavoritesJobsListPageModule {}
