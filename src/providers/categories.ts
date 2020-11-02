import { Injectable } from '@angular/core';
import Parse from 'parse';

@Injectable()
export class Category extends Parse.Object {

  constructor() {
    super('Category');
  }

  load(): Promise<Category[]> {
    return new Promise((resolve, reject) => {
      let query = new Parse.Query(this);
      query.ascending('sort');
      query.doesNotExist('deletedAt');
      query.find().then((data: Category[]) => resolve(data), error => reject(error));
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
    return this.get('placeCount');
  }

}

Parse.Object.registerSubclass('Category', Category);
