import { Injectable } from '@angular/core';
import Parse, { GeoPoint } from 'parse';

@Injectable()
export class SaleList extends Parse.Object {

  constructor() {
    super('SaleList');
  }

  distance(location: GeoPoint, unit: string = 'km') {

    if (!location) return null;

    var geoPoint = new Parse.GeoPoint({
      latitude: location.latitude,
      longitude: location.longitude
    });

    if (unit === 'km') {
      return this.location.kilometersTo(geoPoint).toFixed(2) + ' ' + unit;
    } else {
      return this.location.milesTo(geoPoint).toFixed(2) + ' ' + unit;
    }
  }

  like(salelist: SaleList) {

    return new Promise((resolve, reject) => {
      Parse.Cloud.run('likeSaleList', { salelistId: salelist.id }).then(data => {
        resolve(data);
      }, error => {
        reject(error);
      });
     });
  }

  isLiked(salelist: SaleList): Promise <boolean> {

    return new Promise((resolve, reject) => {
      Parse.Cloud.run('isSaleListLiked', { salelistId: salelist.id }).then((data: boolean) => {
        resolve(data);
      }, error => {
        reject(error);
      });
     });
  }

  isStarred(salelist: SaleList): Promise <boolean> {

    return new Promise((resolve, reject) => {
      Parse.Cloud.run('isSaleListStarred', { salelistId: salelist.id }).then((data: boolean) => {
        resolve(data);
      }, error => {
        reject(error);
      });
     });
  }

  load(params: any = {}): Promise<SaleList[]> {

    return new Promise((resolve, reject) => {

      let page = params.page || 0;
      let limit = params.limit || 100;
      let distance = params.distance || 100;
      let status = params.status || 'Approved';

      let query = new Parse.Query(this);

      if (Array.isArray(status)) {
        query.containedIn('status', status);
      } else {
        query.equalTo('status', status);
      }

      if (params.sale) {
        query.equalTo('sale', params.sale);
      }

      if (params.isFeatured) {
        query.equalTo('isFeatured', params.isFeatured);
      }

      if (params.user) {
        query.equalTo('user', params.user);
      }

      if (params.canonical && params.canonical !== '') {
        query.startsWith('canonical', params.canonical);
      }

      if (params.location) {

        if (Array.isArray(params.location)) {

          const southwest = new Parse.GeoPoint(
            params.location[0].latitude,
            params.location[0].longitude
          );

          const northeast = new Parse.GeoPoint(
            params.location[1].latitude,
            params.location[1].longitude
          );

          query.withinGeoBox('location', southwest, northeast);

        } else {

          const point = new Parse.GeoPoint({
            latitude: params.location.latitude,
            longitude: params.location.longitude
          });

          if (params.unit && params.unit === 'km') {
            query.withinKilometers('location', point, distance);
          } else {
            query.withinMiles('location', point, distance);
          }

        }

      } else {
        query.descending('createdAt');
      }

      query.skip(page * limit);
      query.limit(limit);

      query.include('sale');
      query.doesNotExist('deletedAt');

      query.find().then((data: SaleList[]) => resolve(data), error => reject(error));
    });
  }

  loadFavorites(params: any = {}): Promise<SaleList[]> {

    return new Promise((resolve, reject) => {

      let page = params.page || 0;
      let limit = params.limit || 100;

      let query = new Parse.Query(this);
      query.equalTo('status', 'Approved');
      query.equalTo('likes', Parse.User.current());

      query.skip(page * limit);
      query.limit(limit);
      query.doesNotExist('deletedAt');

      query.find().then((data: SaleList[]) => resolve(data), error => reject(error));
    });
  }

  get title(): string {
    return this.get('title');
  }

  set title(val) {
    this.set('title', val);
  }

  get description(): string {
    return this.get('description');
  }

  set description(val) {
    this.set('description', val);
  }
   get likeCount(): string {
    return this.get('likeCount');
  }

  get phone(): string {
    return this.get('phone');
  }

  set phone(val) {
    this.set('phone', val);
  }

  get website(): string {
    return this.get('website');
  }

  set website(val) {
    this.set('website', val);
  }

  get address(): string {
    return this.get('address');
  }

  set address(val) {
    this.set('address', val);
  }

  get sale() {
    return this.get('sale');
  }

  set sale(val) {
    this.set('sale', val);
  }

  get image() {
    return this.get('image');
  }

  set image(val) {
    this.set('image', val);
  }

  get location() {
    return this.get('location');
  }

  set location(val) {
    var geoPoint = new Parse.GeoPoint({
      latitude: val.lat,
      longitude: val.lng
    });
    this.set('location', geoPoint);
  }

  get imageTwo() {
    return this.get('imageTwo');
  }

  get imageThree() {
    return this.get('imageThree');
  }

  get imageFour() {
    return this.get('imageFour');
  }

  get imageThumb() {
    return this.get('imageThumb');
  }

  get ratingCount() {
    return this.get('ratingCount');
  }

  get ratingTotal() {
    return this.get('ratingTotal');
  }

  get status() {
    return this.get('status');
  }

  get rating() {
    if (!this.ratingCount && !this.ratingTotal) return 0;
    return Math.round(this.ratingTotal / this.ratingCount);
  }

}

Parse.Object.registerSubclass('SaleList', SaleList);
