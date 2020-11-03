'use strict';

 angular.module('app')
 .controller('JobsListCtrl',
 function ($scope, $mdDialog, $mdToast, $translate, JobsList, Jobs, Auth) {

 	// Pagination options
 	$scope.rowOptions = [10, 20, 40];

  $scope.query = {
 		filter: '',
 		limit: 40,
 		page: 1,
    total: 0,
    isFeatured: null,
    status: null,
    jobs: null,
    date: null
 	};

 	$scope.jobslist = [];

 	var showSimpleToast = function (message) {
 	  $mdToast.show(
 	    $mdToast.simple()
 		  .content(message)
 		  .action('OK')
 		  .hideDelay(3000)
 	  );
 	};

 	var loadJobsList = function () {
    Auth.ensureLoggedIn().then(function () {
 		  $scope.promise = JobsList.all($scope.query).then(function (jobslist) {
 			  $scope.jobslist = jobslist;
        console.log($scope.jobslist);
 		  });
    });
 	};

 	loadJobsList();

  var loadCount = function () {
    Auth.ensureLoggedIn().then(function () {
      JobsList.count($scope.query).then(function (total) {
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
      Jobs.all(params).then(function (jobs) {
        $scope.jobs = jobs;
      });
    });
  }

  loadCategories();

  $scope.onQueryChange = function () {
    $scope.query.page = 1;
 		$scope.query.total = 0;
 		loadJobsList();
    loadCount();
  }

 	$scope.onCreateJobsList = function (ev) {

 		$mdDialog.show({
 			controller: 'DialogJobsListController',
 			templateUrl: '/views/partials/jobslist.html',
 			parent: angular.element(document.body),
 			targetEvent: ev,
 			locals: {
 				jobslist: null
 			},
 			clickOutsideToClose: true
 		})
 		.then(function (answer) {
 			loadJobsList();
      loadCount();
 		});
 	};

 	$scope.onPaginationChange = function (page, limit) {
 		$scope.query.page = page;
 		$scope.query.limit = limit;
 		loadJobsList();
 	};

 	$scope.openMenu = function ($mdOpenMenu, ev) {
 		$mdOpenMenu(ev);
 	};

  $scope.isDate = function (date) {
    return angular.isDate(date);
  }

  $scope.onUpdateExpiresAt = function (ev, jobslist) {

    $mdDialog.show({
      controller: 'DialogJobsListExpiresAtController',
      templateUrl: '/views/partials/expiration-modal.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      locals: {
        jobslist: jobslist
      }
    });

  }

 	$scope.onUpdateJobsList = function (ev, jobslist) {

    var objJobsList = angular.copy(jobslist);

 		$mdDialog.show({
 		  controller: 'DialogJobsListController',
 		  templateUrl: '/views/partials/jobslist.html',
 		  parent: angular.element(document.body),
	    targetEvent: ev,
	    locals: {
        jobslist: objJobsList
      },
 		  clickOutsideToClose: true
 		});
 	};

 	$scope.onDestroyJobsList = function (ev, jobslist) {

    $translate(['DELETE', 'CONFIRM_DELETE', 'CONFIRM', 'CANCEL', 'DELETED']).then(function(str) {
			
			var confirm = $mdDialog.confirm()
				.title(str.DELETE)
				.textContent(str.CONFIRM_DELETE)
				.ariaLabel(str.DELETE)
				.ok(str.CONFIRM)
				.cancel(str.CANCEL);
			$mdDialog.show(confirm).then(function() {


				JobsList.destroy(jobslist).then(function() {
					$translate('DELETED').then(function(str) {
							showSimpleToast(str);
					});
					loadJobsList();
				  loadCount();
				}, function (error) {
					showSimpleToast(error.message);
				});
			});

		});
 	};

  $scope.onChangeStatus = function (jobslist, status) {

    jobslist.status = status;
    jobslist.unset('expiresAt');

    JobsList.update(jobslist).then(function () {
      $translate('SAVED').then(function(str) {
        showSimpleToast(str);
      });
    }, function (error) {
      showSimpleToast('Error');
    });

  };

 }).controller('DialogJobsListController', function(
 	$scope, $mdDialog, $mdToast, $translate, JobsList, Jobs, File, NgMap, GeoCoder, jobslist) {

   var marker, map;
   
  $scope.jobslistFromGoogleJobsList = null;

  $scope.autocompleteOptions = {
  }

  $scope.$watch(function (scope) {
    return scope.jobslistFromGoogleJobsList;
  }, function (newValue, oldValue) {

    if (newValue) {
      $scope.jobslist.title     = $scope.placeFromGooglePlace.name;
      $scope.jobslist.address   = $scope.placeFromGooglePlace.formatted_address;
      $scope.jobslist.website   = $scope.placeFromGooglePlace.website;
      $scope.jobslist.phone     = $scope.placeFromGooglePlace.formatted_phone_number;
      $scope.input = {
        latitude: $scope.placeFromGooglePlace.geometry.location.lat(),
        longitude: $scope.placeFromGooglePlace.geometry.location.lng()
      };

      $scope.onInputLocationChanged();
    }
  });

 	$scope.jobs = [];
 	$scope.jobslist = {};
  $scope.jobslist.jobs = null;
  $scope.jobslist.website = '';
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

 	if (jobslist) {

 		$scope.jobslist = jobslist;
    if ($scope.jobslist.image) {
      $scope.imageOneFilename = $scope.jobslist.image.name();
    }

    if ($scope.jobslist.imageTwo) {
      $scope.imageTwoFilename = $scope.jobslist.imageTwo.name();
    }

    if ($scope.jobslist.imageThree) {
      $scope.imageThreeFilename = $scope.jobslist.imageThree.name();
    }

    if ($scope.jobslist.imageFour) {
      $scope.imageFourFilename = $scope.jobslist.imageFour.name();
    }

    $scope.input.latitude = jobslist.location.latitude;
    $scope.input.longitude = jobslist.location.longitude;

 		$scope.isCreating = false;
 	}

 	Jobs.all({ page: 1, limit: 1000, filter: '' })
  .then(function (jobs) {
    $scope.jobs = jobs;
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
    GeoCoder.geocode({ address: $scope.jobslist.address }).then(function (result) {

      if (map) {

        var location = result[0].geometry.location;
        location = new google.maps.LatLng(location.lat(), location.lng());

        map.setCenter(location);
        map.setZoom(15);

        marker.setPosition(location);

        $scope.jobslist.location = new Parse.GeoPoint({
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

    if (jobslist) {

      var jobslistLocation = new google.maps.LatLng(
        jobslist.location.latitude,
        jobslist.location.longitude);

      map.setCenter(jobslistLocation)
      marker.setPosition(jobslistLocation);
      map.setZoom(15);
    } else {
      map.setZoom(1);
      map.setCenter(new google.maps.LatLng(0, 0));
    }
  });


  $scope.onMarkerDragEnd = function (ev) {

    var lat = ev.latLng.lat();
    var lng = ev.latLng.lng();

    $scope.jobslist.location = new Parse.GeoPoint({
      latitude: lat,
      longitude: lng
    });

    $scope.input.latitude = lat;
    $scope.input.longitude = lng;
  };

  $scope.onInputLocationChanged = function () {

    if ($scope.input.latitude && $scope.input.longitude && map) {

      $scope.jobslist.location = new Parse.GeoPoint({
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

        $scope.jobslist.image = savedFile;
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

        $scope.jobslist.imageTwo = savedFile;
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

        $scope.jobslist.imageThree = savedFile;
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

        $scope.jobslist.imageFour = savedFile;
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

 	$scope.onSaveJobsList = function (isFormValid) {

 		if (!isFormValid) {
      $translate('FILL_FIELDS').then(function(str) {
        showSimpleToast(str);
      });
 		}  else if (!$scope.jobslist.location) {
      $translate('LOCATION_REQUIRED').then(function(str) {
        showSimpleToast(str);
      });
 		}
 		else {

      $scope.isSavingJobsList = true;

      $scope.jobslist.isApproved = true;

 			JobsList.create($scope.jobslist).then(function (jobslist) {
        $translate('SAVED').then(function(str) {
          showSimpleToast(str);
        });
 				$mdDialog.hide();
        $scope.isSavingJobsList = false;
 			},
 			function (error) {
 				showSimpleToast(error.message);
        $scope.isSavingJobsList = false;
 			});
 		}
 	};

 	$scope.onUpdateJobsList = function (isFormValid) {

 		if(!isFormValid) {
      $translate('FILL_FIELDS').then(function(str) {
        showSimpleToast(str);
      });
 		} else {

      $scope.isSavingJobsList = true;

 			JobsList.update($scope.jobslist).then(function (jobslist) {
        $translate('SAVED').then(function(str) {
          showSimpleToast(str);
        });
 				$mdDialog.hide();
        $scope.isSavingJobsList = false;
 			},
 			function (error) {
 				showSimpleToast(error.message);
        $scope.isSavingJobsList = false;
 			});

 		}
 	};

}).controller('DialogJobsListExpiresAtController',
function($scope, $mdDialog, $mdToast, $translate, JobsList, jobslist) {

  $scope.jobslist = jobslist;
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
    jobslist.expiresAt = expiresAt;
    jobslist.status = 'Approved';

    $scope.isSavingExpiresAt = true;

    JobsList.update(jobslist).then(function () {
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
