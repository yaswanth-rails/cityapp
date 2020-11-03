'use strict';
 angular.module('app')
 .factory('RentListReview', function ($q) {

    var RentListReview = Parse.Object.extend('RentListReview', {

    }, {

      update: function (rentlistreview) {

        var defer = $q.defer();

        rentlistreview.save(null, {
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
        query.include(['user', 'rentlist']);
        query.limit(params.limit);
        query.skip((params.page * params.limit) - params.limit);
        query.find({
          success: function (rentlistreviews) {
            defer.resolve(rentlistreviews);
          },
          error: function (error) {
            defer.reject(error);
          }
        });

        return defer.promise;

      },

    });

    Object.defineProperty(RentListReview.prototype, 'user', {
      get: function () {
        return this.get('user');
      }
    });

    Object.defineProperty(RentListReview.prototype, 'rentlist', {
      get: function () {
        return this.get('rentlist');
      }
    });

    Object.defineProperty(RentListReview.prototype, 'comment', {
      get: function () {
        return this.get('comment');
      }
    });

    Object.defineProperty(RentListReview.prototype, 'rating', {
      get: function () {
        return this.get('rating');
      }
    });

    Object.defineProperty(RentListReview.prototype, 'isInappropriate', {
      get: function () {
        return this.get('isInappropriate');
      },
      set: function (val) {
        this.set('isInappropriate', val);
      }
    });

    return RentListReview;

});
