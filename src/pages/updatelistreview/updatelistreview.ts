import { IonicPage } from 'ionic-angular';
import { Component, Injector } from '@angular/core';
import { UpdateListReview  } from '../../providers/updatelistreview-service';
import { BasePage } from '../base-page/base-page';

@IonicPage()
@Component({
  selector: 'page-updatelistreviews',
  templateUrl: 'updatelistreview.html'
})
export class UpdateListReviewPage extends BasePage {

  private updatelistreviews: UpdateListReview[];
  private params: any = {};

  constructor(injector: Injector, private updatelistreviewService: UpdateListReview) {
    super(injector);
    this.params.updatelist = this.navParams.data;
  }

  enableMenuSwipe() {
    return false;
  }

  ionViewDidLoad() {
    this.showLoadingView();
    this.onReload();
  }

  loadData() {
    this.updatelistreviewService.load(this.params).then(updatelistreviews => {
      
      for (let updatelistreview of updatelistreviews) {
        this.updatelistreviews.push(updatelistreview);
      }

      this.onRefreshComplete(updatelistreviews);

      if (this.updatelistreviews.length) {
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
    this.updatelistreviews = [];
    this.params.page = 0;
    this.loadData();
  }

}
