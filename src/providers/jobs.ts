import { Injectable } from '@angular/core';
import Parse from 'parse';

@Injectable()
export class Jobs extends Parse.Object {

  constructor() {
    super('Jobs');
  }

  load(): Promise<Jobs[]> {
    return new Promise((resolve, reject) => {
      let query = new Parse.Query(this);
      query.ascending('sort');
      query.doesNotExist('deletedAt');
      query.find().then((data: Jobs[]) => resolve(data), error => reject(error));
    });
  }

  get title(): string {
    return this.get('title');
  }

  get icon() {
    return this.get('icon');
  }

  get image() {
    return this.get('image');
  }

  get imageThumb() {
    return this.get('imageThumb');
  }

  get placeCount() {
    return this.get('jobslistCount');
  }

}

Parse.Object.registerSubclass('Jobs', Jobs);
