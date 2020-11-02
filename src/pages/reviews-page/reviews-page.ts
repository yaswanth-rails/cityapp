import { IonicPage } from 'ionic-angular';
import { Component, Injector } from '@angular/core';
import { Review } from '../../providers/review-service';
import { BasePage } from '../base-page/base-page';

@IonicPage()
@Component({
  selector: 'page-reviews-page',
  templateUrl: 'reviews-page.html'
})
export class ReviewsPage extends BasePage {

  private reviews:any=[];
  // private googlereviews:=[];
  private params: any = {};
  googleplace:any=[];
  googleplace1:any=[];

  constructor(injector: Injector, private reviewService: Review) {
    super(injector);
}

  enableMenuSwipe() {
    return false;
  }

  ionViewDidLoad() {
  this.loadGoogleData();
    
  }
  loadGoogleData(){
    
      this.googleplace=this.navParams.get('googleplace');
        console.log("hi-1"+this.googleplace)

        if(this.googleplace=='undefined' || this.googleplace){
        for(let i of this.googleplace){
  
     this.googleplace1.push(i);
      console.log(this.googleplace1)
    }

       }else{
           this.loadData()
       }

  }

  loadData() {
    
        this.params.place = this.navParams.get('place');
        console.log( this.params.place);
        
    this.reviewService.load(this.params).then(reviews => {
              console.log("hi-2"+reviews)

      for (let review of reviews) {
        this.reviews.push(review);
      }

      this.onRefreshComplete(reviews);

      if (this.reviews.length) {
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
  }

  onReload(refresher = null) {
    this.refresher = refresher;
    this.reviews = [];
    this.params.page = 0;
 
  }

}
