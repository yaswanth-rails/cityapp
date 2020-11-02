import { IonicPage } from 'ionic-angular';
import { Component, Injector } from '@angular/core';
import { HomeServiceListReview  } from '../../providers/homeservicelistreview-service';
import { BasePage } from '../base-page/base-page';

@IonicPage()
@Component({
  selector: 'page-homeservicelistreviews-page',
  templateUrl: 'homeservicelistreview.html'
})
export class HomeServiceListReviewPage extends BasePage {

  private homeservicelistreviews: HomeServiceListReview[];
  private params: any = {};

  constructor(injector: Injector, private homeservicelistreviewService: HomeServiceListReview) {
    super(injector);
    this.params.homeservicelist = this.navParams.data;
  }

  enableMenuSwipe() {
    return false;
  }

  ionViewDidLoad() {
    this.showLoadingView();
    this.onReload();
  }

  loadData() {
    this.homeservicelistreviewService.load(this.params).then(homeservicelistreviews => {
      
      for (let homeservicelistreview of homeservicelistreviews) {
        this.homeservicelistreviews.push(homeservicelistreview);
      }

      this.onRefreshComplete(homeservicelistreviews);

      if (this.homeservicelistreviews.length) {
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
    this.homeservicelistreviews = [];
    this.params.page = 0;
    this.loadData();
  }

}
