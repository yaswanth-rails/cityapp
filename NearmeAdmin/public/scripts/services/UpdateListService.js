'use strict';

angular.module('app').factory('UpdateList', function ($q, moment) {

    var UpdateList = Parse.Object.extend('UpdateList', {

    }, {

        getInstance: function () {
            return this;
        },

        new: function () {
            return new UpdateList();
        },

        create: function (updatelist) {

            var defer = $q.defer();

            var objUpdateList = new UpdateList();
            updatelist.user = Parse.User.current();

            objUpdateList.save(updatelist, {
                success: function (success) {
                    defer.resolve(success);
                },
                error: function (obj, error) {
                    defer.reject(error);
                }
            });

            return defer.promise;
        },

        update: function (updatelist) {

            var defer = $q.defer();

            updatelist.save(null, {
                success: function (success) {
                    defer.resolve(success);
                },
                error: function (obj, error) {
                    defer.reject(error);
                }
            });

            return defer.promise;

        },

        destroy: function (updatelist) {

            var defer = $q.defer();

            updatelist.destroy({
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

            if (params.cityupdate && params.cityupdate !== null) {
                query.equalTo('cityupdate', params.cityupdate);
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

            query.include('cityupdate')
            query.descending('createdAt');

            if (params && params.limit) {
                query.limit(params.limit);
            }

            if (params && params.limit && params.page) {
                query.skip((params.page * params.limit) - params.limit);
            }

            query.find({
                success: function (updatelists) {
                    defer.resolve(updatelists);
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

            if (params.cityupdate && params.cityupdate !== null) {
                query.equalTo('cityupdate', params.cityupdate);
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

    Object.defineProperty(UpdateList.prototype, 'cityupdate', {
        get: function () {
            return this.get('cityupdate');
        },
        set: function (value) {
            this.set('cityupdate', value);
        }
    });

    Object.defineProperty(UpdateList.prototype, 'user', {
        get: function () {
            return this.get('user');
        },
        set: function (value) {
            this.set('user', value);
        }
    });

    Object.defineProperty(UpdateList.prototype, 'title', {
        get: function () {
            return this.get('title');
        },
        set: function (value) {
            this.set('title', value);
        }
    });

    Object.defineProperty(UpdateList.prototype, 'description', {
        get: function () {
            return this.get('description');
        },
        set: function (value) {
            this.set('description', value);
        }
    });

    Object.defineProperty(UpdateList.prototype, 'phone', {
        get: function () {
            return this.get('phone');
        },
        set: function (value) {
            this.set('phone', value);
        }
    });

    Object.defineProperty(UpdateList.prototype, 'website', {
        get: function () {
            return this.get('website');
        },
        set: function (value) {
            this.set('website', value);
        }
    });

    Object.defineProperty(UpdateList.prototype, 'address', {
        get: function () {
            return this.get('address');
        },
        set: function (value) {
            this.set('address', value);
        }
    });

    Object.defineProperty(UpdateList.prototype, 'image', {
        get: function () {
            return this.get('image');
        },
        set: function (value) {
            this.set('image', value);
        }
    });

    Object.defineProperty(UpdateList.prototype, 'imageTwo', {
        get: function () {
            return this.get('imageTwo');
        },
        set: function (value) {
            this.set('imageTwo', value);
        }
    });

    Object.defineProperty(UpdateList.prototype, 'imageThree', {
        get: function () {
            return this.get('imageThree');
        },
        set: function (value) {
            this.set('imageThree', value);
        }
    });

    Object.defineProperty(UpdateList.prototype, 'imageFour', {
        get: function () {
            return this.get('imageFour');
        },
        set: function (value) {
            this.set('imageFour', value);
        }
    });

    Object.defineProperty(UpdateList.prototype, 'imageThumb', {
        get: function () {
            return this.get('imageThumb');
        }
    });

    Object.defineProperty(UpdateList.prototype, 'location', {
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

    Object.defineProperty(UpdateList.prototype, 'status', {
        get: function () {
            return this.get('status');
        },
        set: function (value) {
            this.set('status', value);
        }
    });

    Object.defineProperty(UpdateList.prototype, 'expiresAt', {
        get: function () {
            return this.get('expiresAt');
        },
        set: function (value) {
            this.set('expiresAt', value);
        }
    });

    Object.defineProperty(UpdateList.prototype, 'isFeatured', {
        get: function () {
            return this.get('isFeatured');
        },
        set: function (value) {
            this.set('isFeatured', value);
        }
    });

    return UpdateList;

});