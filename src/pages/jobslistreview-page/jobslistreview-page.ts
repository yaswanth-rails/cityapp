import { IonicPage } from 'ionic-angular';
import { Component, Injector } from '@angular/core';
import { JobsListReview  } from '../../providers/jobslistreview-service';
import { BasePage } from '../base-page/base-page';

@IonicPage()
@Component({
  selector: 'page-jobslistreviews-page',
  templateUrl: 'jobslistreview-page.html'
})
export class JobsListReviewPage extends BasePage {

  private jobslistreviews: JobsListReview[];
  private params: any = {};

  constructor(injector: Injector, private jobslistreviewService: JobsListReview) {
    super(injector);
    this.params.jobslist = this.navParams.data;
  }

  enableMenuSwipe() {
    return false;
  }

  ionViewDidLoad() {
    this.showLoadingView();
    this.onReload();
  }

  loadData() {
    this.jobslistreviewService.load(this.params).then(jobslistreviews => {
      
      for (let jobslistreview of jobslistreviews) {
        this.jobslistreviews.push(jobslistreview);
      }

      this.onRefreshComplete(jobslistreviews);

      if (this.jobslistreviews.length) {
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
    this.jobslistreviews = [];
    this.params.page = 0;
    this.loadData();
  }

}
