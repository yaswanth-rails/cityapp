import { IonicPage } from 'ionic-angular';
import { Component, Injector } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { UpdateListReview } from '../../providers/updatelistreview-service';
import { BasePage } from '../base-page/base-page';
import swal from 'sweetalert';
import { RatingChangeEvent } from 'angular-star-rating';

@IonicPage()
@Component({
  selector: 'page-add-updatelistreview-page',
  templateUrl: 'add-updatelistreview.html'
})
export class AddUpdateListReviewPage extends BasePage {

  private updatelistreview: any = {
    rating: 3,
    comment: ''
  };

  constructor(injector: Injector,
    private updatelistreviewService: UpdateListReview,
    private viewCtrl: ViewController) {
    super(injector);
    this.updatelistreview.updatelist = this.navParams.get('updatelist');
  }

  enableMenuSwipe() {
    return false;
  }

  ionViewDidLoad() {
  }

  onRatingChange(event: RatingChangeEvent) {
    this.updatelistreview.rating = event.rating;
  }

  async onSubmit() {

    if (!this.updatelistreview.rating) {
      const message = await this.getTrans('PLEASE_SELECT_A_RATING');
      this.showToast(message);
      return;
    }

    try {

      await this.showLoadingView();

      await this.updatelistreviewService.create(this.updatelistreview)
      this.showContentView();
      this.onDismiss();

      const trans = await this.getTrans(['GOOD_JOB','REVIEW_ADDED']);
      swal(trans.GOOD_JOB, trans.REVIEW_ADDED, 'success');

    } catch (err) {

      this.showContentView();

      if (err.code === 5000) {
        this.translate.get('REVIEW_ALREADY_EXISTS').subscribe(str => this.showToast(str));
      } else {
        this.translate.get('ERROR_NETWORK').subscribe(str => this.showToast(str));
      }
    }
  }

  onDismiss() {
    this.viewCtrl.dismiss();
  }

}
