'use strict';

 angular.module('app')
 .controller('HomeServiceListCtrl',
 function ($scope, $mdDialog, $mdToast, $translate, HomeServiceList, HomeService, Auth) {

 	// Pagination options
 	$scope.rowOptions = [10, 20, 40];

  $scope.query = {
 		filter: '',
 		limit: 40,
 		page: 1,
    total: 0,
    isFeatured: null,
    status: null,
    homeservice: null,
    date: null
 	};

 	$scope.homeservicelist = [];

 	var showSimpleToast = function (message) {
 	  $mdToast.show(
 	    $mdToast.simple()
 		  .content(message)
 		  .action('OK')
 		  .hideDelay(3000)
 	  );
 	};

 	var loadHomeServiceList = function () {
    Auth.ensureLoggedIn().then(function () {
 		  $scope.promise = HomeServiceList.all($scope.query).then(function (homeservicelist) {
 			  $scope.homeservicelist = homeservicelist;
        console.log($scope.homeservicelist);
 		  });
    });
 	};

 	loadHomeServiceList();

  var loadCount = function () {
    Auth.ensureLoggedIn().then(function () {
      HomeServiceList.count($scope.query).then(function (total) {
   		  $scope.query.total = total;
   	  });
    });
  }

  loadCount();

  var loadCategories = function () {
    var params = {
      page: 1, limit: 1000, filter: '', order: 'title'
    }

    Auth.ensureLoggedIn().then(function () {
      HomeService.all(params).then(function (homeservice) {
        $scope.homeservice = homeservice;
      });
    });
  }

  loadCategories();

  $scope.onQueryChange = function () {
    $scope.query.page = 1;
 		$scope.query.total = 0;
 		loadHomeServiceList();
    loadCount();
  }

 	$scope.onCreateHomeServiceList = function (ev) {

 		$mdDialog.show({
 			controller: 'DialogHomeServiceListController',
 			templateUrl: '/views/partials/homeservicelist.html',
 			parent: angular.element(document.body),
 			targetEvent: ev,
 			locals: {
 				homeservicelist: null
 			},
 			clickOutsideToClose: true
 		})
 		.then(function (answer) {
 			loadHomeServiceList();
      loadCount();
 		});
 	};

 	$scope.onPaginationChange = function (page, limit) {
 		$scope.query.page = page;
 		$scope.query.limit = limit;
 		loadHomeServiceList();
 	};

 	$scope.openMenu = function ($mdOpenMenu, ev) {
 		$mdOpenMenu(ev);
 	};

  $scope.isDate = function (date) {
    return angular.isDate(date);
  }

  $scope.onUpdateExpiresAt = function (ev, homeservicelist) {

    $mdDialog.show({
      controller: 'DialogHomeServiceListExpiresAtController',
      templateUrl: '/views/partials/expiration-modal.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      locals: {
        homeservicelist: homeservicelist
      }
    });

  }

 	$scope.onUpdateHomeServiceList = function (ev, homeservicelist) {

    var objHomeServiceList = angular.copy(homeservicelist);

 		$mdDialog.show({
 		  controller: 'DialogHomeServiceListController',
 		  templateUrl: '/views/partials/homeservicelist.html',
 		  parent: angular.element(document.body),
	    targetEvent: ev,
	    locals: {
        homeservicelist: objHomeServiceList
      },
 		  clickOutsideToClose: true
 		});
 	};

 	$scope.onDestroyHomeServiceList = function (ev, homeservicelist) {

    $translate(['DELETE', 'CONFIRM_DELETE', 'CONFIRM', 'CANCEL', 'DELETED']).then(function(str) {
			
			var confirm = $mdDialog.confirm()
				.title(str.DELETE)
				.textContent(str.CONFIRM_DELETE)
				.ariaLabel(str.DELETE)
				.ok(str.CONFIRM)
				.cancel(str.CANCEL);
			$mdDialog.show(confirm).then(function() {


				HomeServiceList.destroy(homeservicelist).then(function() {
					$translate('DELETED').then(function(str) {
							showSimpleToast(str);
					});
					loadHomeServiceList();
				  loadCount();
				}, function (error) {
					showSimpleToast(error.message);
				});
			});

		});
 	};

  $scope.onChangeStatus = function (homeservicelist, status) {

    homeservicelist.status = status;
    homeservicelist.unset('expiresAt');

    HomeServiceList.update(homeservicelist).then(function () {
      $translate('SAVED').then(function(str) {
        showSimpleToast(str);
      });
    }, function (error) {
      showSimpleToast('Error');
    });

  };

 }).controller('DialogHomeServiceListController', function(
 	$scope, $mdDialog, $mdToast, $translate, HomeServiceList, HomeService, File, NgMap, GeoCoder, homeservicelist) {

   var marker, map;
   
  $scope.homeservicelistFromGoogleHomeServiceList = null;

  $scope.autocompleteOptions = {
  }

  $scope.$watch(function (scope) {
    return scope.homeservicelistFromGoogleHomeServiceList;
  }, function (newValue, oldValue) {

    if (newValue) {
      $scope.homeservicelist.title     = $scope.placeFromGooglePlace.name;
      $scope.homeservicelist.address   = $scope.placeFromGooglePlace.formatted_address;
      $scope.homeservicelist.website   = $scope.placeFromGooglePlace.website;
      $scope.homeservicelist.phone     = $scope.placeFromGooglePlace.formatted_phone_number;
      $scope.input = {
        latitude: $scope.placeFromGooglePlace.geometry.location.lat(),
        longitude: $scope.placeFromGooglePlace.geometry.location.lng()
      };

      $scope.onInputLocationChanged();
    }
  });

 	$scope.homeservice = [];
 	$scope.homeservicelist = {};
  $scope.homeservicelist.homeservice = null;
  $scope.homeservicelist.website = '';
 	$scope.imageOneFilename = '';
 	$scope.imageTwoFilename = '';
 	$scope.imageThreeFilename = '';
 	$scope.imageFourFilename = '';
  $scope.input = {};

 	$scope.isCreating = true;
  $scope.isImageOneUploading = false;
  $scope.isImageTwoUploading = false;
  $scope.isImageThreeUploading = false;
  $scope.isImageFourUploading = false;

 	if (homeservicelist) {

 		$scope.homeservicelist = homeservicelist;
    if ($scope.homeservicelist.image) {
      $scope.imageOneFilename = $scope.homeservicelist.image.name();
    }

    if ($scope.homeservicelist.imageTwo) {
      $scope.imageTwoFilename = $scope.homeservicelist.imageTwo.name();
    }

    if ($scope.homeservicelist.imageThree) {
      $scope.imageThreeFilename = $scope.homeservicelist.imageThree.name();
    }

    if ($scope.homeservicelist.imageFour) {
      $scope.imageFourFilename = $scope.homeservicelist.imageFour.name();
    }

    $scope.input.latitude = homeservicelist.location.latitude;
    $scope.input.longitude = homeservicelist.location.longitude;

 		$scope.isCreating = false;
 	}

 	HomeService.all({ page: 1, limit: 1000, filter: '' })
  .then(function (homeservice) {
    $scope.homeservice = homeservice;
  });

 	var showSimpleToast = function (message) {
 		$mdToast.show(
 			$mdToast.simple()
 			.content(message)
 			.action('OK')
 			.hideDelay(3000)
 		);
 	};

  $scope.onAddressChanged = function () {
    GeoCoder.geocode({ address: $scope.homeservicelist.address }).then(function (result) {

      if (map) {

        var location = result[0].geometry.location;
        location = new google.maps.LatLng(location.lat(), location.lng());

        map.setCenter(location);
        map.setZoom(15);

        marker.setPosition(location);

        $scope.homeservicelist.location = new Parse.GeoPoint({
          latitude: location.lat(),
          longitude: location.lng()
        });

        $scope.input.latitude = location.lat();
        $scope.input.longitude = location.lng();
      }
    });
  }

  NgMap.getMap().then(function (objMap) {

    map = objMap;
    marker = map.markers[0];

    // Fix gray area in second render
    google.maps.event.trigger(map,'resize');

    if (homeservicelist) {

      var homeservicelistLocation = new google.maps.LatLng(
        homeservicelist.location.latitude,
        homeservicelist.location.longitude);

      map.setCenter(homeservicelistLocation)
      marker.setPosition(homeservicelistLocation);
      map.setZoom(15);
    } else {
      map.setZoom(1);
      map.setCenter(new google.maps.LatLng(0, 0));
    }
  });


  $scope.onMarkerDragEnd = function (ev) {

    var lat = ev.latLng.lat();
    var lng = ev.latLng.lng();

    $scope.homeservicelist.location = new Parse.GeoPoint({
      latitude: lat,
      longitude: lng
    });

    $scope.input.latitude = lat;
    $scope.input.longitude = lng;
  };

  $scope.onInputLocationChanged = function () {

    if ($scope.input.latitude && $scope.input.longitude && map) {

      $scope.homeservicelist.location = new Parse.GeoPoint({
        latitude: $scope.input.latitude,
        longitude: $scope.input.longitude
      });

      marker.setPosition(new google.maps.LatLng(
        $scope.input.latitude,
        $scope.input.longitude
      ));

      map.setCenter(new google.maps.LatLng(
        $scope.input.latitude,
        $scope.input.longitude
      ));

      map.setZoom(12);
    }
  }

 	$scope.uploadImageOne = function (file, invalidFile) {

    if (file) {

      $scope.isImageOneUploading = true;
      $scope.imageOneFilename = file.name;

 		  File.upload(file).then(function (savedFile) {

        $scope.homeservicelist.image = savedFile;
        $scope.isImageOneUploading = false;
 		  },
      function (error) {
        $scope.isImageOneUploading = false;
        showSimpleToast(error.message);
 		  });

    } else {
      if (invalidFile) {
        if (invalidFile.$error === 'maxSize') {
          showSimpleToast('Image too big. Max ' + invalidFile.$errorParam);
        }
      }
    }
 	};

  $scope.uploadImageTwo = function (file, invalidFile) {

    if (file) {

      $scope.isImageTwoUploading = true;
      $scope.imageTwoFilename = file.name;

 		  File.upload(file).then(function (savedFile) {

        $scope.homeservicelist.imageTwo = savedFile;
        $scope.isImageTwoUploading = false;
 		  },
      function (error) {
        $scope.isImageTwoUploading = false;
        showSimpleToast(error.message);
 		  });

    } else {
      if (invalidFile) {
        if (invalidFile.$error === 'maxSize') {
          showSimpleToast('Image too big. Max ' + invalidFile.$errorParam);
        }
      }
    }
 	}

  $scope.uploadImageThree = function (file, invalidFile) {

    if (file) {

      $scope.isImageThreeUploading = true;
      $scope.imageThreeFilename = file.name;

 		  File.upload(file).then(function (savedFile) {

        $scope.homeservicelist.imageThree = savedFile;
        $scope.isImageThreeUploading = false;
 		  },
      function (error) {
        $scope.isImageThreeUploading = false;
        showSimpleToast(error.message);
 		  });
 	  } else {
      if (invalidFile) {
        if (invalidFile.$error === 'maxSize') {
          showSimpleToast('Image too big. Max ' + invalidFile.$errorParam);
        }
      }
    }
 	}

  $scope.uploadImageFour = function (file, invalidFile) {

    if (file) {

      $scope.isImageFourUploading = true;
      $scope.imageFourFilename = file.name;

 		  File.upload(file).then(function (savedFile) {

        $scope.homeservicelist.imageFour = savedFile;
        $scope.isImageFourUploading = false;
 		  },
      function (error) {
        $scope.isImageFourUploading = false;
        showSimpleToast(error.message);
 		  });
 	  } else {
      if (invalidFile) {
        if (invalidFile.$error === 'maxSize') {
          showSimpleToast('Image too big. Max ' + invalidFile.$errorParam);
        }
      }
    }
 	}

 	$scope.hide = function() {
 	  $mdDialog.cancel();
 	};

 	$scope.cancel = function() {
 	  $mdDialog.cancel();
 	};

 	$scope.onSaveHomeServiceList = function (isFormValid) {

 		if (!isFormValid) {
      $translate('FILL_FIELDS').then(function(str) {
        showSimpleToast(str);
      });
 		}  else if (!$scope.homeservicelist.location) {
      $translate('LOCATION_REQUIRED').then(function(str) {
        showSimpleToast(str);
      });
 		}
 		else {

      $scope.isSavingHomeServiceList = true;

      $scope.homeservicelist.isApproved = true;

 			HomeServiceList.create($scope.homeservicelist).then(function (homeservicelist) {
        $translate('SAVED').then(function(str) {
          showSimpleToast(str);
        });
 				$mdDialog.hide();
        $scope.isSavingHomeServiceList = false;
 			},
 			function (error) {
 				showSimpleToast(error.message);
        $scope.isSavingHomeServiceList = false;
 			});
 		}
 	};

 	$scope.onUpdateHomeServiceList = function (isFormValid) {

 		if(!isFormValid) {
      $translate('FILL_FIELDS').then(function(str) {
        showSimpleToast(str);
      });
 		} else {

      $scope.isSavingHomeServiceList = true;

 			HomeServiceList.update($scope.homeservicelist).then(function (homeservicelist) {
        $translate('SAVED').then(function(str) {
          showSimpleToast(str);
        });
 				$mdDialog.hide();
        $scope.isSavingHomeServiceList = false;
 			},
 			function (error) {
 				showSimpleToast(error.message);
        $scope.isSavingHomeServiceList = false;
 			});

 		}
 	};

}).controller('DialogHomeServiceListExpiresAtController',
function($scope, $mdDialog, $mdToast, $translate, HomeServiceList, homeservicelist) {

  $scope.homeservicelist = homeservicelist;
  $scope.formData = {};

  var showToast = function (message) {
 		$mdToast.show(
 			$mdToast.simple()
 			.content(message)
 			.action('OK')
 			.hideDelay(3000)
 		);
 	};

  $scope.isDayInvalid = function () {
    var days = $scope.formData.days;

    if (days) {
      days = parseInt(days, 10);
      return days < 1;
    }
    return true;
  }

  $scope.onUpdateExpiresAt = function () {

    var expiresAt = moment().add($scope.formData.days, 'days').startOf('day').toDate()
    homeservicelist.expiresAt = expiresAt;
    homeservicelist.status = 'Approved';

    $scope.isSavingExpiresAt = true;

    HomeServiceList.update(homeservicelist).then(function () {
      $scope.isSavingExpiresAt = false;
      $translate('SAVED').then(function(str) {
        showToast(str);
      });
      $scope.hide();
    },
    function (error) {
      $scope.isSavingExpiresAt = false;
      showToast('Error');
    });
  }

  $scope.hide = function() {
    $mdDialog.hide();
  };

}).directive('numbersOnly', function () {
  return {
    require: 'ngModel',
    link: function (scope, element, attr, ngModelCtrl) {
      function fromUser(text) {
        if (text) {
          var transformedInput = text.replace(/[^0-9]/g, '');

          if (transformedInput !== text) {
            ngModelCtrl.$setViewValue(transformedInput);
            ngModelCtrl.$render();
          }
          return transformedInput;
        }
        return undefined;
      }
      ngModelCtrl.$parsers.push(fromUser);
    }
  };
});
