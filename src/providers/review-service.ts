import { Injectable } from '@angular/core';
import Parse from 'parse';

@Injectable()
export class Review extends Parse.Object {

  constructor() {
    super('Review');
  }

  create(data) {
    return new Promise((resolve, reject) => {
      let review = new Review();
      review.save(data).then(data => resolve(data), error => reject(error));
    });
  }

  load(params: any = {}): Promise<Review[]> {

    return new Promise((resolve, reject) => {

      let query = new Parse.Query(this);

      if (params.place) {
        query.equalTo('place', params.place);
      }

      if (params.user) {
        query.equalTo('user', params.user);
      }
      
      query.equalTo('isInappropriate', true);
      query.descending('createdAt');
      query.include(['user', 'place']);
      query.doesNotExist('deletedAt');

      let limit = params.limit || 100;
      let page = params.page || 0;
      query.skip(page * limit);
      query.limit(limit);

      query.find().then((data: Review[]) => resolve(data), error => reject(error));
    });
  }

  get rating(): number {
    return this.get('rating');
  }

  get comment(): string {
    return this.get('comment');
  }

  get place(): any {
    return this.get('place');
  }

  get user(): any {
    return this.get('user');
  }
}

Parse.Object.registerSubclass('Review', Review);
