'use strict';
 angular.module('app')
 .factory('SaleListReview', function ($q) {

    var SaleListReview = Parse.Object.extend('SaleListReview', {

    }, {

      update: function (salelistreview) {

        var defer = $q.defer();

        salelistreview.save(null, {
          success: function (obj) {
            defer.resolve(obj);
          },
          error: function (obj, error) {
            defer.reject(error);
          }
        });

        return defer.promise;
      },

      destroy: function (obj) {

        var defer = $q.defer();

        obj.destroy({
          success: function (obj) {
            defer.resolve(obj);
          },
          error: function (obj, error) {
            defer.reject(error);
          }
        });

        return defer.promise;
      },

      count: function (params) {

        var defer = $q.defer();

        var query = new Parse.Query(this);

        query.count({
          success: function (count) {
            defer.resolve(count);
          },
          error: function (error) {
            defer.reject(error);
          }
        });

        return defer.promise;

      },

      all: function (params) {

        var defer = $q.defer();

        var query = new Parse.Query(this);

        query.descending('createdAt');
        query.include(['user', 'salelist']);
        query.limit(params.limit);
        query.skip((params.page * params.limit) - params.limit);
        query.find({
          success: function (salelistreviews) {
            defer.resolve(salelistreviews);
          },
          error: function (error) {
            defer.reject(error);
          }
        });

        return defer.promise;

      },

    });

    Object.defineProperty(SaleListReview.prototype, 'user', {
      get: function () {
        return this.get('user');
      }
    });

    Object.defineProperty(SaleListReview.prototype, 'salelist', {
      get: function () {
        return this.get('salelist');
      }
    });

    Object.defineProperty(SaleListReview.prototype, 'comment', {
      get: function () {
        return this.get('comment');
      }
    });

    Object.defineProperty(SaleListReview.prototype, 'rating', {
      get: function () {
        return this.get('rating');
      }
    });

    Object.defineProperty(SaleListReview.prototype, 'isInappropriate', {
      get: function () {
        return this.get('isInappropriate');
      },
      set: function (val) {
        this.set('isInappropriate', val);
      }
    });

    return SaleListReview;

});
