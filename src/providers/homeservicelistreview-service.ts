import { Injectable } from '@angular/core';
import Parse from 'parse';

@Injectable()
export class HomeServiceListReview extends Parse.Object {

  constructor() {
    super('HomeServiceListReview');
  }

  create(data) {
    return new Promise((resolve, reject) => {
      let homeservicelistreview = new HomeServiceListReview();
      homeservicelistreview.save(data).then(data => resolve(data), error => reject(error));
    });
  }

  load(params: any = {}): Promise<HomeServiceListReview[]> {

    return new Promise((resolve, reject) => {

      let query = new Parse.Query(this);

      if (params.homeservicelist) {
        query.equalTo('homeservicelist', params.homeservicelist);
      }

      if (params.user) {
        query.equalTo('user', params.user);
      }
      
      query.equalTo('isInappropriate', true);
      query.descending('createdAt');
      query.include(['user', 'homeservicelist']);
      query.doesNotExist('deletedAt');

      let limit = params.limit || 100;
      let page = params.page || 0;
      query.skip(page * limit);
      query.limit(limit);

      query.find().then((data: HomeServiceListReview[]) => resolve(data), error => reject(error));
    });
  }

  get rating(): number {
    return this.get('rating');
  }

  get comment(): string {
    return this.get('comment');
  }

  get homeservicelist(): any {
    return this.get('homeservicelist');
  }

  get user(): any {
    return this.get('user');
  }
}

Parse.Object.registerSubclass('HomeServiceListReview', HomeServiceListReview);
