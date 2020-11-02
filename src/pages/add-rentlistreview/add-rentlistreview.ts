import { IonicPage } from 'ionic-angular';
import { Component, Injector } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { RentListReview } from '../../providers/rentlistreview-service';
import { BasePage } from '../base-page/base-page';
import swal from 'sweetalert';
import { RatingChangeEvent } from 'angular-star-rating';

@IonicPage()
@Component({
  selector: 'page-add-rentlistreview-page',
  templateUrl: 'add-rentlistreview.html'
})
export class AddRentListReviewPage extends BasePage {

  private rentlistreview: any = {
    rating: 3,
    comment: ''
  };

  constructor(injector: Injector,
    private rentlistreviewService: RentListReview,
    private viewCtrl: ViewController) {
    super(injector);
    this.rentlistreview.rentlist = this.navParams.get('rentlist');
  }

  enableMenuSwipe() {
    return false;
  }

  ionViewDidLoad() {
  }

  onRatingChange(event: RatingChangeEvent) {
    this.rentlistreview.rating = event.rating;
  }

  async onSubmit() {

    if (!this.rentlistreview.rating) {
      const message = await this.getTrans('PLEASE_SELECT_A_RATING');
      this.showToast(message);
      return;
    }

    try {

      await this.showLoadingView();

      await this.rentlistreviewService.create(this.rentlistreview)
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
