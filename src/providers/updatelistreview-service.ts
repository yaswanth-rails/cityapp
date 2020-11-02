import { Injectable } from '@angular/core';
import Parse from 'parse';

@Injectable()
export class UpdateListReview extends Parse.Object {

  constructor() {
    super('UpdateListReview');
  }

  create(data) {
    return new Promise((resolve, reject) => {
      let updatelistreview = new UpdateListReview();
      updatelistreview.save(data).then(data => resolve(data), error => reject(error));
    });
  }

  load(params: any = {}): Promise<UpdateListReview[]> {

    return new Promise((resolve, reject) => {

      let query = new Parse.Query(this);

      if (params.updatelist) {
        query.equalTo('updatelist', params.updatelist);
      }

      if (params.user) {
        query.equalTo('user', params.user);
      }
      
      query.equalTo('isInappropriate', true);
      query.descending('createdAt');
      query.include(['user', 'updatelist']);
      query.doesNotExist('deletedAt');

      let limit = params.limit || 100;
      let page = params.page || 0;
      query.skip(page * limit);
      query.limit(limit);

      query.find().then((data: UpdateListReview[]) => resolve(data), error => reject(error));
    });
  }

  get rating(): number {
    return this.get('rating');
  }

  get comment(): string {
    return this.get('comment');
  }

  get updatelist(): any {
    return this.get('updatelist');
  }

  get user(): any {
    return this.get('user');
  }
}

Parse.Object.registerSubclass('UpdateListReview', UpdateListReview);
