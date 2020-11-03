'use strict';

 angular.module('app')
 .controller('UpdateListCtrl',
 function ($scope, $mdDialog, $mdToast, $translate, UpdateList, CityUpdate, Auth) {

 	// Pagination options
 	$scope.rowOptions = [10, 20, 40];

  $scope.query = {
 		filter: '',
 		limit: 40,
 		page: 1,
    total: 0,
    isFeatured: null,
    status: null,
    cityupdate: null,
    date: null
 	};

 	$scope.updatelist = [];

 	var showSimpleToast = function (message) {
 	  $mdToast.show(
 	    $mdToast.simple()
 		  .content(message)
 		  .action('OK')
 		  .hideDelay(3000)
 	  );
 	};

 	var loadUpdateList = function () {
    Auth.ensureLoggedIn().then(function () {
 		  $scope.promise = UpdateList.all($scope.query).then(function (updatelist) {
 			  $scope.updatelist = updatelist;
        console.log($scope.updatelist);
 		  });
    });
 	};

    $scope.onUpdateCityUpdateList = function (ev, updatelist) {

    var objUpdateList = angular.copy(updatelist);

    $mdDialog.show({
      controller: 'DialogUpdateListController',
      templateUrl: '/views/partials/updatelist.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      locals: {
        updatelist: objUpdateList
      },
      clickOutsideToClose: true
    });
  };

 	loadUpdateList();

  var loadCount = function () {
    Auth.ensureLoggedIn().then(function () {
      UpdateList.count($scope.query).then(function (total) {
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
      CityUpdate.all(params).then(function (cityupdate) {
        $scope.cityupdate = cityupdate;
      });
    });
  }

  loadCategories();

  $scope.onQueryChange = function () {
    $scope.query.page = 1;
 		$scope.query.total = 0;
 		loadUpdateList();
    loadCount();
  }

 	$scope.onCreateUpdateList = function (ev) {

 		$mdDialog.show({
 			controller: 'DialogUpdateListController',
 			templateUrl: '/views/partials/updatelist.html',
 			parent: angular.element(document.body),
 			targetEvent: ev,
 			locals: {
 				updatelist: null
 			},
 			clickOutsideToClose: true
 		})
 		.then(function (answer) {
 			loadUpdateList();
      loadCount();
 		});
 	};

 	$scope.onPaginationChange = function (page, limit) {
 		$scope.query.page = page;
 		$scope.query.limit = limit;
 		loadUpdateList();
 	};

 	$scope.openMenu = function ($mdOpenMenu, ev) {
 		$mdOpenMenu(ev);
 	};

  $scope.isDate = function (date) {
    return angular.isDate(date);
  }

  $scope.onUpdateExpiresAt = function (ev, updatelist) {

    $mdDialog.show({
      controller: 'DialogUpdateListExpiresAtController',
      templateUrl: '/views/partials/expiration-modal.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      locals: {
        updatelist: updatelist
      }
    });

  }

 	$scope.onUpdateUpdateList = function (ev, updatelist) {

    var objUpdateList = angular.copy(updatelist);

 		$mdDialog.show({
 		  controller: 'DialogUpdateListController',
 		  templateUrl: '/views/partials/updatelist.html',
 		  parent: angular.element(document.body),
	    targetEvent: ev,
	    locals: {
        updatelist: objUpdateList
      },
 		  clickOutsideToClose: true
 		});
 	};

 	$scope.onDestroyUpdateList = function (ev, updatelist) {

    $translate(['DELETE', 'CONFIRM_DELETE', 'CONFIRM', 'CANCEL', 'DELETED']).then(function(str) {
			
			var confirm = $mdDialog.confirm()
				.title(str.DELETE)
				.textContent(str.CONFIRM_DELETE)
				.ariaLabel(str.DELETE)
				.ok(str.CONFIRM)
				.cancel(str.CANCEL);
			$mdDialog.show(confirm).then(function() {


				UpdateList.destroy(updatelist).then(function() {
					$translate('DELETED').then(function(str) {
							showSimpleToast(str);
					});
					loadUpdateList();
				  loadCount();
				}, function (error) {
					showSimpleToast(error.message);
				});
			});

		});
 	};

  $scope.onChangeStatus = function (updatelist, status) {

    updatelist.status = status;
    updatelist.unset('expiresAt');

    UpdateList.update(updatelist).then(function () {
      $translate('SAVED').then(function(str) {
        showSimpleToast(str);
      });
    }, function (error) {
      showSimpleToast('Error');
    });

  };

 }).controller('DialogUpdateListController', function(
 	$scope, $mdDialog, $mdToast, $translate, UpdateList, CityUpdate, File, NgMap, GeoCoder, updatelist) {

   var marker, map;
   
  $scope.updatelistFromGoogleUpdateList = null;

  $scope.autocompleteOptions = {
  }

  $scope.$watch(function (scope) {
    return scope.updatelistFromGoogleUpdateList;
  }, function (newValue, oldValue) {

    if (newValue) {
      $scope.updatelist.title     = $scope.placeFromGooglePlace.name;
      $scope.updatelist.address   = $scope.placeFromGooglePlace.formatted_address;
      $scope.updatelist.website   = $scope.placeFromGooglePlace.website;
      $scope.updatelist.phone     = $scope.placeFromGooglePlace.formatted_phone_number;
      $scope.input = {
        latitude: $scope.placeFromGooglePlace.geometry.location.lat(),
        longitude: $scope.placeFromGooglePlace.geometry.location.lng()
      };

      $scope.onInputLocationChanged();
    }
  });

 	$scope.cityupdate = [];
 	$scope.updatelist = {};
  $scope.updatelist.cityupdate = null;
  $scope.updatelist.website = '';
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

 	if (updatelist) {

 		$scope.updatelist = updatelist;
    if ($scope.updatelist.image) {
      $scope.imageOneFilename = $scope.updatelist.image.name();
    }

    if ($scope.updatelist.imageTwo) {
      $scope.imageTwoFilename = $scope.updatelist.imageTwo.name();
    }

    if ($scope.updatelist.imageThree) {
      $scope.imageThreeFilename = $scope.updatelist.imageThree.name();
    }

    if ($scope.updatelist.imageFour) {
      $scope.imageFourFilename = $scope.updatelist.imageFour.name();
    }

    $scope.input.latitude = updatelist.location.latitude;
    $scope.input.longitude = updatelist.location.longitude;

 		$scope.isCreating = false;
 	}

 	CityUpdate.all({ page: 1, limit: 1000, filter: '' })
  .then(function (cityupdate) {
    $scope.cityupdate = cityupdate;
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
    GeoCoder.geocode({ address: $scope.updatelist.address }).then(function (result) {

      if (map) {

        var location = result[0].geometry.location;
        location = new google.maps.LatLng(location.lat(), location.lng());

        map.setCenter(location);
        map.setZoom(15);

        marker.setPosition(location);

        $scope.updatelist.location = new Parse.GeoPoint({
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

    if (updatelist) {

      var updatelistLocation = new google.maps.LatLng(
        updatelist.location.latitude,
        updatelist.location.longitude);

      map.setCenter(updatelistLocation)
      marker.setPosition(updatelistLocation);
      map.setZoom(15);
    } else {
      map.setZoom(1);
      map.setCenter(new google.maps.LatLng(0, 0));
    }
  });


  $scope.onMarkerDragEnd = function (ev) {

    var lat = ev.latLng.lat();
    var lng = ev.latLng.lng();

    $scope.updatelist.location = new Parse.GeoPoint({
      latitude: lat,
      longitude: lng
    });

    $scope.input.latitude = lat;
    $scope.input.longitude = lng;
  };

  $scope.onInputLocationChanged = function () {

    if ($scope.input.latitude && $scope.input.longitude && map) {

      $scope.updatelist.location = new Parse.GeoPoint({
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

        $scope.updatelist.image = savedFile;
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

        $scope.updatelist.imageTwo = savedFile;
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

        $scope.updatelist.imageThree = savedFile;
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

        $scope.updatelist.imageFour = savedFile;
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

 	$scope.onSaveUpdateList = function (isFormValid) {

 		if (!isFormValid) {
      $translate('FILL_FIELDS').then(function(str) {
        showSimpleToast(str);
      });
 		}  else if (!$scope.updatelist.location) {
      $translate('LOCATION_REQUIRED').then(function(str) {
        showSimpleToast(str);
      });
 		}
 		else {

      $scope.isSavingUpdateList = true;

      $scope.updatelist.isApproved = true;

 			UpdateList.create($scope.updatelist).then(function (updatelist) {
        $translate('SAVED').then(function(str) {
          showSimpleToast(str);
        });
 				$mdDialog.hide();
        $scope.isSavingUpdateList = false;
 			},
 			function (error) {
 				showSimpleToast(error.message);
        $scope.isSavingUpdateList = false;
 			});
 		}
 	};

 	$scope.onUpdateUpdateList = function (isFormValid) {

 		if(!isFormValid) {
      $translate('FILL_FIELDS').then(function(str) {
        showSimpleToast(str);
      });
 		} else {

      $scope.isSavingUpdateList = true;

 			UpdateList.update($scope.updatelist).then(function (updatelist) {
        $translate('SAVED').then(function(str) {
          showSimpleToast(str);
        });
 				$mdDialog.hide();
        $scope.isSavingUpdateList = false;
 			},
 			function (error) {
 				showSimpleToast(error.message);
        $scope.isSavingUpdateList = false;
 			});

 		}
 	};

}).controller('DialogUpdateListExpiresAtController',
function($scope, $mdDialog, $mdToast, $translate, UpdateList, updatelist) {

  $scope.updatelist = updatelist;
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
    updatelist.expiresAt = expiresAt;
    updatelist.status = 'Approved';

    $scope.isSavingExpiresAt = true;

    UpdateList.update(updatelist).then(function () {
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
