'use strict';
 angular.module('app')
 .factory('Summary', function ($q) {

    var Summary = Parse.Object.extend('Summary', {}, {

      create: function (summary) {

        var defer = $q.defer();
        var objSummary = new Summary();

        objSummary.save(summary, {
          success: function (obj) {
            defer.resolve(obj);
          }, error: function (obj, error) {
            defer.reject(error);
          }
        });

        return defer.promise;
      },


      update: function (summary) {

        var defer = $q.defer();

        summary.save(null, {
          success: function (obj) {
            defer.resolve(obj);
          }, error: function (obj, error) {
            defer.reject(error);
          }
        });

        return defer.promise;
      },

      destroy: function (summaryId) {

        var defer = $q.defer();

        var summary = new Summary();
        summary.id = summaryId;

        summary.destroy({
          success: function (obj) {
            defer.resolve(obj);
          }, error: function (obj, error) {
            defer.reject(error);
          }
        });

        return defer.promise;
      },

      count: function (params) {

        var defer = $q.defer();

        var query = new Parse.Query(this);

        if (params.filter != '') {
          query.contains('canonical', params.filter);
        }

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

        if (params.filter != '') {
          query.contains('canonical', params.filter);
        }

        if (params.order === 'order') {
          query.ascending('order');
        } else if (params.order === '-order') {
          query.descending('order');
        } else {
          query.ascending('order');
        }

        query.limit(params.limit);
        query.skip((params.page * params.limit) - params.limit);
        query.find({
          success: function (summary) {
            defer.resolve(summary);
          }, error: function (error) {
            defer.reject(error);
          }
        });

        return defer.promise;

      },

    });


    Object.defineProperty(Summary.prototype, 'image',
    {
      get: function () {
        return this.get('image');
      },
      set: function (val) {
        this.set('image', val);
      }
    });
    return Summary;
    });