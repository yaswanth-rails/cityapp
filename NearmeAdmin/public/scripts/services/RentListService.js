'use strict';

angular.module('app').factory('RentList', function ($q, moment) {

    var RentList = Parse.Object.extend('RentList', {

    }, {

        getInstance: function () {
            return this;
        },

        new: function () {
            return new RentList();
        },

        create: function (rentlist) {

            var defer = $q.defer();

            var objRentList = new RentList();
            rentlist.user = Parse.User.current();

            objRentList.save(rentlist, {
                success: function (success) {
                    defer.resolve(success);
                },
                error: function (obj, error) {
                    defer.reject(error);
                }
            });

            return defer.promise;
        },

        update: function (rentlist) {

            var defer = $q.defer();

            rentlist.save(null, {
                success: function (success) {
                    defer.resolve(success);
                },
                error: function (obj, error) {
                    defer.reject(error);
                }
            });

            return defer.promise;

        },

        destroy: function (rentlist) {

            var defer = $q.defer();

            rentlist.destroy({
                success: function (obj) {
                    defer.resolve(obj);
                },
                error: function (obj, error) {
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

            if (params.rent && params.rent !== null) {
                query.equalTo('rent', params.rent);
            }

            if (params.date && params.date !== null) {
                var start = moment(params.date).startOf('day');
                var end = moment(params.date).endOf('day');
                query.greaterThanOrEqualTo('createdAt', start.toDate());
                query.lessThanOrEqualTo('createdAt', end.toDate());
            }

            if (params.status && params.status !== null) {
                query.equalTo('status', params.status);
            }

            if (params.isFeatured && params.isFeatured !== null) {
                query.equalTo('isFeatured', params.isFeatured);
            }

            query.include('rent')
            query.descending('createdAt');

            if (params && params.limit) {
                query.limit(params.limit);
            }

            if (params && params.limit && params.page) {
                query.skip((params.page * params.limit) - params.limit);
            }

            query.find({
                success: function (rentlists) {
                    defer.resolve(rentlists);
                },
                error: function (error) {
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

            if (params.rent && params.rent !== null) {
                query.equalTo('rent', params.rent);
            }

            if (params.date && params.date !== null) {
                var start = moment(params.date).startOf('day');
                var end = moment(params.date).endOf('day');
                query.greaterThanOrEqualTo('createdAt', start.toDate());
                query.lessThanOrEqualTo('createdAt', end.toDate());
            }

            if (params.status && params.status !== null) {
                query.equalTo('status', params.status);
            }

            if (params.isFeatured && params.isFeatured !== null) {
                query.equalTo('isFeatured', params.isFeatured);
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
        }

    });

    Object.defineProperty(RentList.prototype, 'rent', {
        get: function () {
            return this.get('rent');
        },
        set: function (value) {
            this.set('rent', value);
        }
    });

    Object.defineProperty(RentList.prototype, 'user', {
        get: function () {
            return this.get('user');
        },
        set: function (value) {
            this.set('user', value);
        }
    });

    Object.defineProperty(RentList.prototype, 'title', {
        get: function () {
            return this.get('title');
        },
        set: function (value) {
            this.set('title', value);
        }
    });

    Object.defineProperty(RentList.prototype, 'description', {
        get: function () {
            return this.get('description');
        },
        set: function (value) {
            this.set('description', value);
        }
    });

    Object.defineProperty(RentList.prototype, 'phone', {
        get: function () {
            return this.get('phone');
        },
        set: function (value) {
            this.set('phone', value);
        }
    });

    Object.defineProperty(RentList.prototype, 'website', {
        get: function () {
            return this.get('website');
        },
        set: function (value) {
            this.set('website', value);
        }
    });

    Object.defineProperty(RentList.prototype, 'address', {
        get: function () {
            return this.get('address');
        },
        set: function (value) {
            this.set('address', value);
        }
    });

    Object.defineProperty(RentList.prototype, 'image', {
        get: function () {
            return this.get('image');
        },
        set: function (value) {
            this.set('image', value);
        }
    });

    Object.defineProperty(RentList.prototype, 'imageTwo', {
        get: function () {
            return this.get('imageTwo');
        },
        set: function (value) {
            this.set('imageTwo', value);
        }
    });

    Object.defineProperty(RentList.prototype, 'imageThree', {
        get: function () {
            return this.get('imageThree');
        },
        set: function (value) {
            this.set('imageThree', value);
        }
    });

    Object.defineProperty(RentList.prototype, 'imageFour', {
        get: function () {
            return this.get('imageFour');
        },
        set: function (value) {
            this.set('imageFour', value);
        }
    });

    Object.defineProperty(RentList.prototype, 'imageThumb', {
        get: function () {
            return this.get('imageThumb');
        }
    });

    Object.defineProperty(RentList.prototype, 'location', {
        get: function () {
            return this.get('location');
        },
        set: function (val) {
            this.set('location', new Parse.GeoPoint({
                latitude: val.latitude,
                longitude: val.longitude
            }));
        }
    });

    Object.defineProperty(RentList.prototype, 'status', {
        get: function () {
            return this.get('status');
        },
        set: function (value) {
            this.set('status', value);
        }
    });

    Object.defineProperty(RentList.prototype, 'expiresAt', {
        get: function () {
            return this.get('expiresAt');
        },
        set: function (value) {
            this.set('expiresAt', value);
        }
    });

    Object.defineProperty(RentList.prototype, 'isFeatured', {
        get: function () {
            return this.get('isFeatured');
        },
        set: function (value) {
            this.set('isFeatured', value);
        }
    });

    return RentList;

});