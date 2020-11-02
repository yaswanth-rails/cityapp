import { Injectable } from '@angular/core';
import Parse from 'parse';

@Injectable()
export class Sale extends Parse.Object {

  constructor() {
    super('Sale');
  }

  load(): Promise<Sale[]> {
    return new Promise((resolve, reject) => {
      let query = new Parse.Query(this);
      query.ascending('sort');
      query.doesNotExist('deletedAt');
      query.find().then((data: Sale[]) => resolve(data), error => reject(error));
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
    return this.get('salelistCount');
  }

}

Parse.Object.registerSubclass('Sale', Sale);
