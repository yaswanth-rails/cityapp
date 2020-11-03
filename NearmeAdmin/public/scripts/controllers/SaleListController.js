'use strict';

 angular.module('app')
 .controller('SaleListCtrl',
 function ($scope, $mdDialog, $mdToast, $translate, SaleList, Sale, Auth) {

 	// Pagination options
 	$scope.rowOptions = [10, 20, 40];

  $scope.query = {
 		filter: '',
 		limit: 40,
 		page: 1,
    total: 0,
    isFeatured: null,
    status: null,
    sale: null,
    date: null
 	};

 	$scope.salelist = [];

 	var showSimpleToast = function (message) {
 	  $mdToast.show(
 	    $mdToast.simple()
 		  .content(message)
 		  .action('OK')
 		  .hideDelay(3000)
 	  );
 	};

 	var loadSaleList = function () {
    Auth.ensureLoggedIn().then(function () {
 		  $scope.promise = SaleList.all($scope.query).then(function (salelist) {
 			  $scope.salelist = salelist;
        console.log($scope.salelist);
 		  });
    });
 	};

 	loadSaleList();

  var loadCount = function () {
    Auth.ensureLoggedIn().then(function () {
      SaleList.count($scope.query).then(function (total) {
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
      Sale.all(params).then(function (sale) {
        $scope.sale = sale;
      });
    });
  }

  loadCategories();

  $scope.onQueryChange = function () {
    $scope.query.page = 1;
 		$scope.query.total = 0;
 		loadSaleList();
    loadCount();
  }

 	$scope.onCreateSaleList = function (ev) {

 		$mdDialog.show({
 			controller: 'DialogSaleListController',
 			templateUrl: '/views/partials/salelist.html',
 			parent: angular.element(document.body),
 			targetEvent: ev,
 			locals: {
 				salelist: null
 			},
 			clickOutsideToClose: true
 		})
 		.then(function (answer) {
 			loadSaleList();
      loadCount();
 		});
 	};

 	$scope.onPaginationChange = function (page, limit) {
 		$scope.query.page = page;
 		$scope.query.limit = limit;
 		loadSaleList();
 	};

 	$scope.openMenu = function ($mdOpenMenu, ev) {
 		$mdOpenMenu(ev);
 	};

  $scope.isDate = function (date) {
    return angular.isDate(date);
  }

  $scope.onUpdateExpiresAt = function (ev, salelist) {

    $mdDialog.show({
      controller: 'DialogSaleListExpiresAtController',
      templateUrl: '/views/partials/expiration-modal.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      locals: {
        salelist: salelist
      }
    });

  }

 	$scope.onUpdateSaleList = function (ev, salelist) {

    var objSaleList = angular.copy(salelist);

 		$mdDialog.show({
 		  controller: 'DialogSaleListController',
 		  templateUrl: '/views/partials/salelist.html',
 		  parent: angular.element(document.body),
	    targetEvent: ev,
	    locals: {
        salelist: objSaleList
      },
 		  clickOutsideToClose: true
 		});
 	};

 	$scope.onDestroySaleList = function (ev, salelist) {

    $translate(['DELETE', 'CONFIRM_DELETE', 'CONFIRM', 'CANCEL', 'DELETED']).then(function(str) {
			
			var confirm = $mdDialog.confirm()
				.title(str.DELETE)
				.textContent(str.CONFIRM_DELETE)
				.ariaLabel(str.DELETE)
				.ok(str.CONFIRM)
				.cancel(str.CANCEL);
			$mdDialog.show(confirm).then(function() {


				SaleList.destroy(salelist).then(function() {
					$translate('DELETED').then(function(str) {
							showSimpleToast(str);
					});
					loadSaleList();
				  loadCount();
				}, function (error) {
					showSimpleToast(error.message);
				});
			});

		});
 	};

  $scope.onChangeStatus = function (salelist, status) {

    salelist.status = status;
    salelist.unset('expiresAt');

    SaleList.update(salelist).then(function () {
      $translate('SAVED').then(function(str) {
        showSimpleToast(str);
      });
    }, function (error) {
      showSimpleToast('Error');
    });

  };

 }).controller('DialogSaleListController', function(
 	$scope, $mdDialog, $mdToast, $translate, SaleList, Sale, File, NgMap, GeoCoder, salelist) {

   var marker, map;
   
  $scope.salelistFromGoogleSaleList = null;

  $scope.autocompleteOptions = {
  }

  $scope.$watch(function (scope) {
    return scope.salelistFromGoogleSaleList;
  }, function (newValue, oldValue) {

    if (newValue) {
      $scope.salelist.title     = $scope.placeFromGooglePlace.name;
      $scope.salelist.address   = $scope.placeFromGooglePlace.formatted_address;
      $scope.salelist.website   = $scope.placeFromGooglePlace.website;
      $scope.salelist.phone     = $scope.placeFromGooglePlace.formatted_phone_number;
      $scope.input = {
        latitude: $scope.placeFromGooglePlace.geometry.location.lat(),
        longitude: $scope.placeFromGooglePlace.geometry.location.lng()
      };

      $scope.onInputLocationChanged();
    }
  });

 	$scope.sale = [];
 	$scope.salelist = {};
  $scope.salelist.sale = null;
  $scope.salelist.website = '';
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

 	if (salelist) {

 		$scope.salelist = salelist;
    if ($scope.salelist.image) {
      $scope.imageOneFilename = $scope.salelist.image.name();
    }

    if ($scope.salelist.imageTwo) {
      $scope.imageTwoFilename = $scope.salelist.imageTwo.name();
    }

    if ($scope.salelist.imageThree) {
      $scope.imageThreeFilename = $scope.salelist.imageThree.name();
    }

    if ($scope.salelist.imageFour) {
      $scope.imageFourFilename = $scope.salelist.imageFour.name();
    }

    $scope.input.latitude = salelist.location.latitude;
    $scope.input.longitude = salelist.location.longitude;

 		$scope.isCreating = false;
 	}

 	Sale.all({ page: 1, limit: 1000, filter: '' })
  .then(function (sale) {
    $scope.sale = sale;
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
    GeoCoder.geocode({ address: $scope.salelist.address }).then(function (result) {

      if (map) {

        var location = result[0].geometry.location;
        location = new google.maps.LatLng(location.lat(), location.lng());

        map.setCenter(location);
        map.setZoom(15);

        marker.setPosition(location);

        $scope.salelist.location = new Parse.GeoPoint({
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

    if (salelist) {

      var salelistLocation = new google.maps.LatLng(
        salelist.location.latitude,
        salelist.location.longitude);

      map.setCenter(salelistLocation)
      marker.setPosition(salelistLocation);
      map.setZoom(15);
    } else {
      map.setZoom(1);
      map.setCenter(new google.maps.LatLng(0, 0));
    }
  });


  $scope.onMarkerDragEnd = function (ev) {

    var lat = ev.latLng.lat();
    var lng = ev.latLng.lng();

    $scope.salelist.location = new Parse.GeoPoint({
      latitude: lat,
      longitude: lng
    });

    $scope.input.latitude = lat;
    $scope.input.longitude = lng;
  };

  $scope.onInputLocationChanged = function () {

    if ($scope.input.latitude && $scope.input.longitude && map) {

      $scope.salelist.location = new Parse.GeoPoint({
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

        $scope.salelist.image = savedFile;
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

        $scope.salelist.imageTwo = savedFile;
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

        $scope.salelist.imageThree = savedFile;
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

        $scope.salelist.imageFour = savedFile;
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

 	$scope.onSaveSaleList = function (isFormValid) {

 		if (!isFormValid) {
      $translate('FILL_FIELDS').then(function(str) {
        showSimpleToast(str);
      });
 		}  else if (!$scope.salelist.location) {
      $translate('LOCATION_REQUIRED').then(function(str) {
        showSimpleToast(str);
      });
 		}
 		else {

      $scope.isSavingSaleList = true;

      $scope.salelist.isApproved = true;

 			SaleList.create($scope.salelist).then(function (salelist) {
        $translate('SAVED').then(function(str) {
          showSimpleToast(str);
        });
 				$mdDialog.hide();
        $scope.isSavingSaleList = false;
 			},
 			function (error) {
 				showSimpleToast(error.message);
        $scope.isSavingSaleList = false;
 			});
 		}
 	};

 	$scope.onUpdateSaleList = function (isFormValid) {

 		if(!isFormValid) {
      $translate('FILL_FIELDS').then(function(str) {
        showSimpleToast(str);
      });
 		} else {

      $scope.isSavingSaleList = true;

 			SaleList.update($scope.salelist).then(function (salelist) {
        $translate('SAVED').then(function(str) {
          showSimpleToast(str);
        });
 				$mdDialog.hide();
        $scope.isSavingSaleList = false;
 			},
 			function (error) {
 				showSimpleToast(error.message);
        $scope.isSavingSaleList = false;
 			});

 		}
 	};

}).controller('DialogSaleListExpiresAtController',
function($scope, $mdDialog, $mdToast, $translate, SaleList, salelist) {

  $scope.salelist = salelist;
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
    salelist.expiresAt = expiresAt;
    salelist.status = 'Approved';

    $scope.isSavingExpiresAt = true;

    SaleList.update(salelist).then(function () {
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
