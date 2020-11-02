import { Injectable } from '@angular/core';
import Parse from 'parse';

@Injectable()
export class RentListReview extends Parse.Object {

  constructor() {
    super('RentListReview');
  }

  create(data) {
    return new Promise((resolve, reject) => {
      let rentlistreview = new RentListReview();
      rentlistreview.save(data).then(data => resolve(data), error => reject(error));
    });
  }

  load(params: any = {}): Promise<RentListReview[]> {

    return new Promise((resolve, reject) => {

      let query = new Parse.Query(this);

      if (params.rentlist) {
        query.equalTo('rentlist', params.rentlist);
      }

      if (params.user) {
        query.equalTo('user', params.user);
      }
      
      query.equalTo('isInappropriate', true);
      query.descending('createdAt');
      query.include(['user', 'rentlist']);
      query.doesNotExist('deletedAt');

      let limit = params.limit || 100;
      let page = params.page || 0;
      query.skip(page * limit);
      query.limit(limit);

      query.find().then((data: RentListReview[]) => resolve(data), error => reject(error));
    });
  }

  get rating(): number {
    return this.get('rating');
  }

  get comment(): string {
    return this.get('comment');
  }

  get rentlist(): any {
    return this.get('rentlist');
  }

  get user(): any {
    return this.get('user');
  }
}

Parse.Object.registerSubclass('RentListReview', RentListReview);
