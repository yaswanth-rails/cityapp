'use strict';

 angular.module('app')
 .controller('RentListCtrl',
 function ($scope, $mdDialog, $mdToast, $translate, RentList, Rent, Auth) {

 	// Pagination options
 	$scope.rowOptions = [10, 20, 40];

  $scope.query = {
 		filter: '',
 		limit: 40,
 		page: 1,
    total: 0,
    isFeatured: null,
    status: null,
    rent: null,
    date: null
 	};

 	$scope.rentlist = [];

 	var showSimpleToast = function (message) {
 	  $mdToast.show(
 	    $mdToast.simple()
 		  .content(message)
 		  .action('OK')
 		  .hideDelay(3000)
 	  );
 	};

 	var loadRentList = function () {
    Auth.ensureLoggedIn().then(function () {
 		  $scope.promise = RentList.all($scope.query).then(function (rentlist) {
 			  $scope.rentlist = rentlist;
        console.log($scope.rentlist);
 		  });
    });
 	};

 	loadRentList();

  var loadCount = function () {
    Auth.ensureLoggedIn().then(function () {
      RentList.count($scope.query).then(function (total) {
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
      Rent.all(params).then(function (rent) {
        $scope.rent = rent;
      });
    });
  }

  loadCategories();

  $scope.onQueryChange = function () {
    $scope.query.page = 1;
 		$scope.query.total = 0;
 		loadRentList();
    loadCount();
  }

 	$scope.onCreateRentList = function (ev) {

 		$mdDialog.show({
 			controller: 'DialogRentListController',
 			templateUrl: '/views/partials/rentlist.html',
 			parent: angular.element(document.body),
 			targetEvent: ev,
 			locals: {
 				rentlist: null
 			},
 			clickOutsideToClose: true
 		})
 		.then(function (answer) {
 			loadRentList();
      loadCount();
 		});
 	};

 	$scope.onPaginationChange = function (page, limit) {
 		$scope.query.page = page;
 		$scope.query.limit = limit;
 		loadRentList();
 	};

 	$scope.openMenu = function ($mdOpenMenu, ev) {
 		$mdOpenMenu(ev);
 	};

  $scope.isDate = function (date) {
    return angular.isDate(date);
  }

  $scope.onUpdateExpiresAt = function (ev, rentlist) {

    $mdDialog.show({
      controller: 'DialogRentListExpiresAtController',
      templateUrl: '/views/partials/expiration-modal.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      locals: {
        rentlist: rentlist
      }
    });

  }

 	$scope.onUpdateRentList = function (ev, rentlist) {

    var objRentList = angular.copy(rentlist);

 		$mdDialog.show({
 		  controller: 'DialogRentListController',
 		  templateUrl: '/views/partials/rentlist.html',
 		  parent: angular.element(document.body),
	    targetEvent: ev,
	    locals: {
        rentlist: objRentList
      },
 		  clickOutsideToClose: true
 		});
 	};

 	$scope.onDestroyRentList = function (ev, rentlist) {

    $translate(['DELETE', 'CONFIRM_DELETE', 'CONFIRM', 'CANCEL', 'DELETED']).then(function(str) {
			
			var confirm = $mdDialog.confirm()
				.title(str.DELETE)
				.textContent(str.CONFIRM_DELETE)
				.ariaLabel(str.DELETE)
				.ok(str.CONFIRM)
				.cancel(str.CANCEL);
			$mdDialog.show(confirm).then(function() {


				RentList.destroy(rentlist).then(function() {
					$translate('DELETED').then(function(str) {
							showSimpleToast(str);
					});
					loadRentList();
				  loadCount();
				}, function (error) {
					showSimpleToast(error.message);
				});
			});

		});
 	};

  $scope.onChangeStatus = function (rentlist, status) {

    rentlist.status = status;
    rentlist.unset('expiresAt');

    RentList.update(rentlist).then(function () {
      $translate('SAVED').then(function(str) {
        showSimpleToast(str);
      });
    }, function (error) {
      showSimpleToast('Error');
    });

  };

 }).controller('DialogRentListController', function(
 	$scope, $mdDialog, $mdToast, $translate, RentList, Rent, File, NgMap, GeoCoder, rentlist) {

   var marker, map;
   
  $scope.rentlistFromGoogleRentList = null;

  $scope.autocompleteOptions = {
  }

  $scope.$watch(function (scope) {
    return scope.rentlistFromGoogleRentList;
  }, function (newValue, oldValue) {

    if (newValue) {
      $scope.rentlist.title     = $scope.placeFromGooglePlace.name;
      $scope.rentlist.address   = $scope.placeFromGooglePlace.formatted_address;
      $scope.rentlist.website   = $scope.placeFromGooglePlace.website;
      $scope.rentlist.phone     = $scope.placeFromGooglePlace.formatted_phone_number;
      $scope.input = {
        latitude: $scope.placeFromGooglePlace.geometry.location.lat(),
        longitude: $scope.placeFromGooglePlace.geometry.location.lng()
      };

      $scope.onInputLocationChanged();
    }
  });

 	$scope.rent = [];
 	$scope.rentlist = {};
  $scope.rentlist.rent = null;
  $scope.rentlist.website = '';
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

 	if (rentlist) {

 		$scope.rentlist = rentlist;
    if ($scope.rentlist.image) {
      $scope.imageOneFilename = $scope.rentlist.image.name();
    }

    if ($scope.rentlist.imageTwo) {
      $scope.imageTwoFilename = $scope.rentlist.imageTwo.name();
    }

    if ($scope.rentlist.imageThree) {
      $scope.imageThreeFilename = $scope.rentlist.imageThree.name();
    }

    if ($scope.rentlist.imageFour) {
      $scope.imageFourFilename = $scope.rentlist.imageFour.name();
    }

    $scope.input.latitude = rentlist.location.latitude;
    $scope.input.longitude = rentlist.location.longitude;

 		$scope.isCreating = false;
 	}

 	Rent.all({ page: 1, limit: 1000, filter: '' })
  .then(function (rent) {
    $scope.rent = rent;
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
    GeoCoder.geocode({ address: $scope.rentlist.address }).then(function (result) {

      if (map) {

        var location = result[0].geometry.location;
        location = new google.maps.LatLng(location.lat(), location.lng());

        map.setCenter(location);
        map.setZoom(15);

        marker.setPosition(location);

        $scope.rentlist.location = new Parse.GeoPoint({
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

    if (rentlist) {

      var rentlistLocation = new google.maps.LatLng(
        rentlist.location.latitude,
        rentlist.location.longitude);

      map.setCenter(rentlistLocation)
      marker.setPosition(rentlistLocation);
      map.setZoom(15);
    } else {
      map.setZoom(1);
      map.setCenter(new google.maps.LatLng(0, 0));
    }
  });


  $scope.onMarkerDragEnd = function (ev) {

    var lat = ev.latLng.lat();
    var lng = ev.latLng.lng();

    $scope.rentlist.location = new Parse.GeoPoint({
      latitude: lat,
      longitude: lng
    });

    $scope.input.latitude = lat;
    $scope.input.longitude = lng;
  };

  $scope.onInputLocationChanged = function () {

    if ($scope.input.latitude && $scope.input.longitude && map) {

      $scope.rentlist.location = new Parse.GeoPoint({
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

        $scope.rentlist.image = savedFile;
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

        $scope.rentlist.imageTwo = savedFile;
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

        $scope.rentlist.imageThree = savedFile;
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

        $scope.rentlist.imageFour = savedFile;
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

 	$scope.onSaveRentList = function (isFormValid) {

 		if (!isFormValid) {
      $translate('FILL_FIELDS').then(function(str) {
        showSimpleToast(str);
      });
 		}  else if (!$scope.rentlist.location) {
      $translate('LOCATION_REQUIRED').then(function(str) {
        showSimpleToast(str);
      });
 		}
 		else {

      $scope.isSavingRentList = true;

      $scope.rentlist.isApproved = true;

 			RentList.create($scope.rentlist).then(function (rentlist) {
        $translate('SAVED').then(function(str) {
          showSimpleToast(str);
        });
 				$mdDialog.hide();
        $scope.isSavingRentList = false;
 			},
 			function (error) {
 				showSimpleToast(error.message);
        $scope.isSavingRentList = false;
 			});
 		}
 	};

 	$scope.onUpdateRentList = function (isFormValid) {

 		if(!isFormValid) {
      $translate('FILL_FIELDS').then(function(str) {
        showSimpleToast(str);
      });
 		} else {

      $scope.isSavingRentList = true;

 			RentList.update($scope.rentlist).then(function (rentlist) {
        $translate('SAVED').then(function(str) {
          showSimpleToast(str);
        });
 				$mdDialog.hide();
        $scope.isSavingRentList = false;
 			},
 			function (error) {
 				showSimpleToast(error.message);
        $scope.isSavingRentList = false;
 			});

 		}
 	};

}).controller('DialogRentListExpiresAtController',
function($scope, $mdDialog, $mdToast, $translate, RentList, rentlist) {

  $scope.rentlist = rentlist;
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
    rentlist.expiresAt = expiresAt;
    rentlist.status = 'Approved';

    $scope.isSavingExpiresAt = true;

    RentList.update(rentlist).then(function () {
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
