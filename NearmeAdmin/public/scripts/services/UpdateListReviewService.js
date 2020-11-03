'use strict';
 angular.module('app')
 .factory('UpdateListReview', function ($q) {

    var UpdateListReview = Parse.Object.extend('UpdateListReview', {

    }, {

      update: function (updatelistreview) {

        var defer = $q.defer();

        updatelistreview.save(null, {
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
        query.include(['user', 'updatelist']);
        query.limit(params.limit);
        query.skip((params.page * params.limit) - params.limit);
        query.find({
          success: function (updatelistreviews) {
            defer.resolve(updatelistreviews);
          },
          error: function (error) {
            defer.reject(error);
          }
        });

        return defer.promise;

      },

    });

    Object.defineProperty(UpdateListReview.prototype, 'user', {
      get: function () {
        return this.get('user');
      }
    });

    Object.defineProperty(UpdateListReview.prototype, 'updatelist', {
      get: function () {
        return this.get('updatelist');
      }
    });

    Object.defineProperty(UpdateListReview.prototype, 'comment', {
      get: function () {
        return this.get('comment');
      }
    });

    Object.defineProperty(UpdateListReview.prototype, 'rating', {
      get: function () {
        return this.get('rating');
      }
    });

    Object.defineProperty(UpdateListReview.prototype, 'isInappropriate', {
      get: function () {
        return this.get('isInappropriate');
      },
      set: function (val) {
        this.set('isInappropriate', val);
      }
    });

    return UpdateListReview;

});
