import { IonicPage } from 'ionic-angular';
import { Component, Injector } from '@angular/core';
import { RentListReview  } from '../../providers/rentlistreview-service';
import { BasePage } from '../base-page/base-page';

@IonicPage()
@Component({
  selector: 'page-rentlistreviews',
  templateUrl: 'rentlistreview.html'
})
export class RentListReviewPage extends BasePage {

  private rentlistreviews: RentListReview[];
  private params: any = {};

  constructor(injector: Injector, private rentlistreviewService: RentListReview) {
    super(injector);
    this.params.rentlist = this.navParams.data;
  }

  enableMenuSwipe() {
    return false;
  }

  ionViewDidLoad() {
    this.showLoadingView();
    this.onReload();
  }

  loadData() {
    this.rentlistreviewService.load(this.params).then(rentlistreviews => {
      
      for (let rentlistreview of rentlistreviews) {
        this.rentlistreviews.push(rentlistreview);
      }

      this.onRefreshComplete(rentlistreviews);

      if (this.rentlistreviews.length) {
        this.showContentView();
      } else {
        this.showEmptyView();
      }

    }, () => {
      this.showErrorView();
      this.onRefreshComplete();
    });
  }

  onLoadMore(infiniteScroll) {
    this.infiniteScroll = infiniteScroll;
    this.params.page++;
    this.loadData();
  }

  onReload(refresher = null) {
    this.refresher = refresher;
    this.rentlistreviews = [];
    this.params.page = 0;
    this.loadData();
  }

}
