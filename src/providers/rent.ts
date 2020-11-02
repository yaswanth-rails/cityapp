import { Injectable } from '@angular/core';
import Parse from 'parse';

@Injectable()
export class Rent extends Parse.Object {

  constructor() {
    super('Rent');
  }

  load(): Promise<Rent[]> {
    return new Promise((resolve, reject) => {
      let query = new Parse.Query(this);
      query.ascending('sort');
      query.doesNotExist('deletedAt');
      query.find().then((data: Rent[]) => resolve(data), error => reject(error));
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
    return this.get('rentlistCount');
  }

}

Parse.Object.registerSubclass('Rent', Rent);
