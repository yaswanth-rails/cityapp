'use strict';

 angular.module('app')
 .controller('GeoFenceCtrl', function ($scope, $mdDialog, GeoList, Auth) {

 	// Pagination options.
 	$scope.rowOptions = [10, 20, 40];

 	$scope.query = {
 		filter: '',
 		limit: 40,
 		page: 1,
 		total: 0
 	};

 	$scope.geolist = [];

 	var loadGeoList = function() {
    Auth.ensureLoggedIn().then(function () {
 		  $scope.promise = GeoList.all($scope.query).then(function(geolist) {
 			  $scope.geolist = geolist;
 		  });
    });
 	}

 	loadGeoList();

  var loadCount = function () {
    Auth.ensureLoggedIn().then(function () {
      GeoList.count($scope.query).then(function(total) {
   		  $scope.query.total = total;
   	  });
    });
  }

  loadCount();

 	$scope.onSearch = function () {
 		$scope.query.page = 1;
 		$scope.query.total = 0;
 		loadGeoList();
    loadCount();
 	};

 	$scope.onPaginationChange = function (page, limit) {
 		$scope.query.page = page;
 		$scope.query.limit = limit;
 		loadGeoList();
 	};

 	$scope.openMenu = function ($mdOpenMenu, ev) {
 		$mdOpenMenu(ev);
 	};

 	$scope.onNewGeoList = function (ev) {
 		$mdDialog.show({
 			controller: 'DialogGeoListController',
 			templateUrl: '/views/partials/geolist.html',
 			parent: angular.element(document.body),
 			targetEvent: ev,
 			locals: {
 				geolist: null
 			},
 			clickOutsideToClose: true
 		})
 		.then(function(answer) {
 			loadGeoList();
      loadCount();
 		});
 	}

 	$scope.onEditGeoList = function (ev, geolist) {
    console.log("hi")

 		$mdDialog.show({
 			controller: 'DialogGeoListController',
 			templateUrl: '/views/partials/geolist.html',
 			parent: angular.element(document.body),
 			targetEvent: ev,
 			locals: {
 				geolist: angular.copy(geolist)
 			},
 			clickOutsideToClose: true
 		})
 		.then(function(answer) {
 			loadGeoList();
 		});
 	}

 	$scope.onDestroyGeoList = function(ev, geolist) {

 		var confirm = $mdDialog.confirm()
	 		.title('Confirm action')
	 		.content('Are you sure you want to delete this geolist? Places of this geolist will be deleted.')
	 		.ok('Delete')
	 		.cancel('Cancel')
	 		.targetEvent(ev);

 		$mdDialog.show(confirm).then(function() {

 			GeoList.destroy(geolist.id).then(function(success) {
 				loadGeoList();
        loadCount();
 			}, function (error) {
 				showSimpleToast(error.message);
 			});

 		});


 	}

}).controller('DialogGeoListController',
function($scope, $mdDialog, $mdToast, GeoList, File, geolist,GeoCoder, NgMap) {
	var marker,map;
	 $scope.geolist = {};

	$scope.isCreating = false;
	$scope.isUploading = false;
  $scope.isUploadingIcon = false;
	$scope.imageFilename = '';
  $scope.iconFilename = '';
    $scope.input = {};



	if (geolist) {
    $scope.geolist=geolist;

		$scope.isCreating = false;
    $scope.input.latitude = geolist.location.latitude;
    $scope.input.longitude = geolist.location.longitude;


	} else {

		$scope.geolist = {};
		$scope.isCreating = true;
	}



	var showToast = function (message) {
		$mdToast.show(
			$mdToast.simple()
			.content(message)
			.action('OK')
			.hideDelay(3000)
		);
	};

	$scope.hide = function() {
		$mdDialog.cancel();
	};

	$scope.cancel = function() {
		$mdDialog.cancel();
	};

	// $scope.uploadImage = function (file, invalidFile) {

	// 	if (file) {
 //      $scope.imageFilename = file.name;
	// 		$scope.isUploading = true;

	// 		File.upload(file).then(function (savedFile) {
 //        $scope.objGeoList.image = savedFile;
 //        $scope.isUploading = false;
 //        showToast('Image uploaded');
	//  		},
 //      function (error) {
 //   		  showToast(error.message);
 //   		  $scope.isUploading = false;
	//  		});
	// 	} else {
 //      if (invalidFile) {
 //        if (invalidFile.$error === 'maxSize') {
 //          showToast('Image too big. Max ' + invalidFile.$errorParam);
 //        }
 //      }
 //    }
	// };

	  $scope.onAddressChanged = function () {
    GeoCoder.geocode({ address: $scope.geolist.address }).then(function (result) {

      if (map) {

        var location = result[0].geometry.location;
        location = new google.maps.LatLng(location.lat(), location.lng());

        map.setCenter(location);
        map.setZoom(15);

        marker.setPosition(location);

        $scope.geolist.location = new Parse.GeoPoint({
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

    if (geolist) {

      var geolistLocation = new google.maps.LatLng(
        geolist.location.latitude,
        geolist.location.longitude);
      map.setCenter(geolistLocation)
      marker.setPosition(geolistLocation);
      map.setZoom(15);
    } else {
      map.setZoom(1);
      map.setCenter(new google.maps.LatLng(0, 0));
    }
  });


    $scope.onMarkerDragEnd = function (ev) {

    var lat = ev.latLng.lat();
    var lng = ev.latLng.lng();

    $scope.geolist.location = new Parse.GeoPoint({
      latitude: lat,
      longitude: lng
    });

    $scope.input.latitude = lat;
    $scope.input.longitude = lng;
  };

  $scope.onInputLocationChanged = function () {

    if ($scope.input.latitude && $scope.input.longitude && map) {

      $scope.geolist.location = new Parse.GeoPoint({
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


 //  $scope.uploadIcon = function (file, invalidFile) {

 //    if (file) {
 //      $scope.iconFilename = file.name;
	// 		$scope.isUploadingIcon = true;

	// 		File.upload(file).then(function (savedFile) {
 //        $scope.objGeoList.icon = savedFile;
 //        $scope.isUploadingIcon = false;
 //        showToast('Icon uploaded');
	//  		}, function (error) {
	//  		  showToast(error.message);
	//  		  $scope.isUploadingIcon = false;
	//  		});
 //    } else {
 //      if (invalidFile) {
 //        if (invalidFile.$error === 'maxSize') {
 //          showToast('Icon too big. Max ' + invalidFile.$errorParam);
 //        } else if (invalidFile.$error === 'dimensions') {
 //          showToast('Icon size should be 64x64');
 //        }
 //      }
 //    }
	// };

	$scope.onSaveGeoList = function (isFormValid) {

		if(!isFormValid) {
			showToast('Please correct all highlighted errors and try again');
			return;

		} else if(!$scope.geolist.title || !$scope.geolist.message ) {
			showToast('Please add message and title');
		} else {

      $scope.isSavingGeoList = true;

			GeoList.create($scope.geolist).then(function (geolist) {
				showToast('GeoList saved');
				$mdDialog.hide();
        $scope.isSavingGeoList = false;
			}, function (error) {
				showToast(error.message);
        $scope.isSavingGeoList = false;
			});
		}

	};

	$scope.onUpdateGeoList = function (isFormValid) {

		if(!isFormValid) {
			showToast('Please correct all highlighted errors and try again');
		} else if(!$scope.geolist.title || !$scope.geolist.message) {
			showToast('Please add message and title');
		} else {

      $scope.isSavingGeoList = true;

			GeoList.update($scope.geolist).then(function (geolist) {
				showToast('GeoList updated');
				$mdDialog.hide();
        $scope.isSavingGeoList = false;
			}, function (error) {
				showToast(error.message);
        $scope.isSavingGeoList = false;
			});
		}
	}

});
