'use strict';
 angular.module('app')
 .factory('HomeServiceListReview', function ($q) {

    var HomeServiceListReview = Parse.Object.extend('HomeServiceListReview', {

    }, {

      update: function (homeservicelistreview) {

        var defer = $q.defer();

        homeservicelistreview.save(null, {
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
        query.include(['user', 'homeservicelist']);
        query.limit(params.limit);
        query.skip((params.page * params.limit) - params.limit);
        query.find({
          success: function (homeservicelistreviews) {
            defer.resolve(homeservicelistreviews);
          },
          error: function (error) {
            defer.reject(error);
          }
        });

        return defer.promise;

      },

    });

    Object.defineProperty(HomeServiceListReview.prototype, 'user', {
      get: function () {
        return this.get('user');
      }
    });

    Object.defineProperty(HomeServiceListReview.prototype, 'homeservicelist', {
      get: function () {
        return this.get('homeservicelist');
      }
    });

    Object.defineProperty(HomeServiceListReview.prototype, 'comment', {
      get: function () {
        return this.get('comment');
      }
    });

    Object.defineProperty(HomeServiceListReview.prototype, 'rating', {
      get: function () {
        return this.get('rating');
      }
    });

    Object.defineProperty(HomeServiceListReview.prototype, 'isInappropriate', {
      get: function () {
        return this.get('isInappropriate');
      },
      set: function (val) {
        this.set('isInappropriate', val);
      }
    });

    return HomeServiceListReview;

});
