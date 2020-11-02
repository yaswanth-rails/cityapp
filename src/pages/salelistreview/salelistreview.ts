import { IonicPage } from 'ionic-angular';
import { Component, Injector } from '@angular/core';
import { SaleListReview  } from '../../providers/salelistreview-service';
import { BasePage } from '../base-page/base-page';

@IonicPage()
@Component({
  selector: 'page-salelistreviews',
  templateUrl: 'salelistreview.html'
})
export class SaleListReviewPage extends BasePage {

  private salelistreviews: SaleListReview[];
  private params: any = {};

  constructor(injector: Injector, private salelistreviewService: SaleListReview) {
    super(injector);
    this.params.salelist = this.navParams.data;
  }

  enableMenuSwipe() {
    return false;
  }

  ionViewDidLoad() {
    this.showLoadingView();
    this.onReload();
  }

  loadData() {
    this.salelistreviewService.load(this.params).then(salelistreviews => {
      
      for (let salelistreview of salelistreviews) {
        this.salelistreviews.push(salelistreview);
      }

      this.onRefreshComplete(salelistreviews);

      if (this.salelistreviews.length) {
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
    this.salelistreviews = [];
    this.params.page = 0;
    this.loadData();
  }

}
