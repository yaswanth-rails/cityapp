import { Injectable } from '@angular/core';
import Parse from 'parse';

@Injectable()
export class HomeService extends Parse.Object {

  constructor() {
    super('HomeService');
  }

  load(): Promise<HomeService[]> {
    return new Promise((resolve, reject) => {
      let query = new Parse.Query(this);
      query.ascending('sort');
      query.doesNotExist('deletedAt');
      query.find().then((data: HomeService[]) => resolve(data), error => reject(error));
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
    return this.get('homeservicelistCount');
  }

}

Parse.Object.registerSubclass('HomeService', HomeService);
