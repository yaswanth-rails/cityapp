import { Injectable } from '@angular/core';
import Parse from 'parse';

@Injectable()
export class GeoList extends Parse.Object {
  GeoArray:any[];

  constructor() {
    super('GeoList');
  }


  static load() {

    return new Promise((resolve, reject) => {
      let query = new Parse.Query(this);
      query.find().then(data => {
        console.log(data);
        resolve(data);
      }, error => {
        reject(error);
      });

    });
  }

  get title(): string {
    return this.get('title');
  }

  get radius() {
    return this.get('radius');
  }

  get location() {
    return this.get('location');
  }
  get message() {
    return this.get('message');
  }

}

Parse.Object.registerSubclass('GeoList', GeoList);
