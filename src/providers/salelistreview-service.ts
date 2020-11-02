import { Injectable } from '@angular/core';
import Parse from 'parse';

@Injectable()
export class SaleListReview extends Parse.Object {

  constructor() {
    super('SaleListReview');
  }

  create(data) {
    return new Promise((resolve, reject) => {
      let salelistreview = new SaleListReview();
      salelistreview.save(data).then(data => resolve(data), error => reject(error));
    });
  }

  load(params: any = {}): Promise<SaleListReview[]> {

    return new Promise((resolve, reject) => {

      let query = new Parse.Query(this);

      if (params.salelist) {
        query.equalTo('salelist', params.salelist);
      }

      if (params.user) {
        query.equalTo('user', params.user);
      }
      
      query.equalTo('isInappropriate', true);
      query.descending('createdAt');
      query.include(['user', 'salelist']);
      query.doesNotExist('deletedAt');

      let limit = params.limit || 100;
      let page = params.page || 0;
      query.skip(page * limit);
      query.limit(limit);

      query.find().then((data: SaleListReview[]) => resolve(data), error => reject(error));
    });
  }

  get rating(): number {
    return this.get('rating');
  }

  get comment(): string {
    return this.get('comment');
  }

  get salelist(): any {
    return this.get('salelist');
  }

  get user(): any {
    return this.get('user');
  }
}

Parse.Object.registerSubclass('SaleListReview', SaleListReview);
