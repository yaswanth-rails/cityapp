import { Injectable } from '@angular/core';
import Parse from 'parse';

@Injectable()
export class JobsListReview extends Parse.Object {

  constructor() {
    super('JobsListReview');
  }

  create(data) {
    return new Promise((resolve, reject) => {
      let jobslistreview = new JobsListReview();
      jobslistreview.save(data).then(data => resolve(data), error => reject(error));
    });
  }

  load(params: any = {}): Promise<JobsListReview[]> {

    return new Promise((resolve, reject) => {

      let query = new Parse.Query(this);

      if (params.jobslist) {
        query.equalTo('jobslist', params.jobslist);
      }

      if (params.user) {
        query.equalTo('user', params.user);
      }
      
      query.equalTo('isInappropriate', true);
      query.descending('createdAt');
      query.include(['user', 'jobslist']);
      query.doesNotExist('deletedAt');

      let limit = params.limit || 100;
      let page = params.page || 0;
      query.skip(page * limit);
      query.limit(limit);

      query.find().then((data: JobsListReview[]) => resolve(data), error => reject(error));
    });
  }

  get rating(): number {
    return this.get('rating');
  }

  get comment(): string {
    return this.get('comment');
  }

  get jobslist(): any {
    return this.get('jobslist');
  }

  get user(): any {
    return this.get('user');
  }
}

Parse.Object.registerSubclass('JobsListReview', JobsListReview);
