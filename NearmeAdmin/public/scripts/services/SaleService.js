'use strict';
 angular.module('app')
 .factory('Sale', function ($q) {

    var Sale = Parse.Object.extend('Sale', {}, {

      create: function (sale) {

        var defer = $q.defer();
        var objSale = new Sale();

        objSale.save(sale, {
          success: function (obj) {
            defer.resolve(obj);
          }, error: function (obj, error) {
            defer.reject(error);
          }
        });

        return defer.promise;
      },

      update: function (sale) {

        var defer = $q.defer();

        sale.save(null, {
          success: function (obj) {
            defer.resolve(obj);
          }, error: function (obj, error) {
            defer.reject(error);
          }
        });

        return defer.promise;
      },

      destroy: function (saleId) {

        var defer = $q.defer();

        var sale = new Sale();
        sale.id = saleId;

        sale.destroy({
          success: function (obj) {
            defer.resolve(obj);
          }, error: function (error) {
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
          success: function (categories) {
            defer.resolve(categories);
          }, error: function (error) {
            defer.reject(error);
          }
        });

        return defer.promise;

      },

    });

    Object.defineProperty(Sale.prototype, 'title',
    {
      get: function () {
        return this.get('title');
      },
      set: function (val) {
        this.set('title', val);
      }
    });

    Object.defineProperty(Sale.prototype, 'image',
    {
      get: function () {
        return this.get('image');
      },
      set: function (val) {
        this.set('image', val);
      }
    });

    Object.defineProperty(Sale.prototype, 'imageThumb',
    {
      get: function () {
        return this.get('imageThumb');
      }
    });

    Object.defineProperty(Sale.prototype, 'icon',
    {
      get: function () {
        return this.get('icon');
      },
      set: function (val) {
        this.set('icon', val);
      }
    });

    Object.defineProperty(Sale.prototype, 'order',
    {
      get: function () {
        return this.get('order');
      },
      set: function (val) {
        this.set('order', val);
      }
    });

return Sale;

});
