'use strict';

 angular.module('app')
 .controller('CityUpdateCtrl', function ($scope, $mdDialog, $mdToast, $translate, CityUpdate, Auth) {

 	// Pagination options.
 	$scope.rowOptions = [10, 20, 40];

 	$scope.query = {
 		filter: '',
 		limit: 40,
 		page: 1,
 		total: 0
 	};

	 $scope.cityupdate = [];
	 
	 var showToast = function (message) {
		$mdToast.show(
			$mdToast.simple()
			.content(message)
			.action('OK')
			.hideDelay(3000)
		);
	};

 	var loadCityUpdate = function() {
    Auth.ensureLoggedIn().then(function () {
 		  $scope.promise = CityUpdate.all($scope.query).then(function(cityupdate) {
 			  $scope.cityupdate = cityupdate;
 		  });
    });
 	}

 	loadCityUpdate();

  var loadCount = function () {
    Auth.ensureLoggedIn().then(function () {
      CityUpdate.count($scope.query).then(function(total) {
   		  $scope.query.total = total;
   	  });
    });
  }

  loadCount();

 	$scope.onSearch = function () {
 		$scope.query.page = 1;
 		$scope.query.total = 0;
 		loadCityUpdate();
    loadCount();
 	};

 	$scope.onPaginationChange = function (page, limit) {
 		$scope.query.page = page;
 		$scope.query.limit = limit;
 		loadCityUpdate();
 	};

 	$scope.openMenu = function ($mdOpenMenu, ev) {
 		$mdOpenMenu(ev);
 	};

 	$scope.onNewCityUpdate = function (ev) {

 		$mdDialog.show({
 			controller: 'DialogCityUpdateController',
 			templateUrl: '/views/partials/cityupdate.html',
 			parent: angular.element(document.body),
 			targetEvent: ev,
 			locals: {
 				cityupdate: null
 			},
 			clickOutsideToClose: true
 		})
 		.then(function(answer) {
 			loadCityUpdate();
      loadCount();
 		});
 	}

 	$scope.onEditCityUpdate = function (ev, cityupdate) {

 		$mdDialog.show({
 			controller: 'DialogCityUpdateController',
 			templateUrl: '/views/partials/cityupdate.html',
 			parent: angular.element(document.body),
 			targetEvent: ev,
 			locals: {
 				cityupdate: angular.copy(cityupdate)
 			},
 			clickOutsideToClose: true
 		})
 		.then(function(answer) {
 			loadCityUpdate();
 		});
 	}

 	$scope.onDestroyCityUpdate = function(ev, cityupdate) {

		$translate(['DELETE', 'CONFIRM_DELETE', 'CONFIRM', 'CANCEL', 'DELETED']).then(function(str) {
			
			var confirm = $mdDialog.confirm()
				.title(str.DELETE)
				.textContent(str.CONFIRM_DELETE)
				.ariaLabel(str.DELETE)
				.ok(str.CONFIRM)
				.cancel(str.CANCEL);
			$mdDialog.show(confirm).then(function() {

				CityUpdate.destroy(cityupdate.id).then(function() {
					$translate('DELETED').then(function(str) {
							showToast(str);
					});
					loadCityUpdate();
				  loadCount();
				}, function (error) {
					showToast(error.message);
				});
			});

		});

 	}

}).controller('DialogCityUpdateController',
function($scope, $mdDialog, $translate, $mdToast, CityUpdate, File, cityupdate) {

	$scope.isCreating = false;
	$scope.isUploading = false;
  $scope.isUploadingIcon = false;
	$scope.imageFilename = '';
  $scope.iconFilename = '';

	if (cityupdate) {

		$scope.isCreating = false;
		$scope.imageFilename = cityupdate.image.name();

    if (cityupdate.icon) {
      $scope.iconFilename = cityupdate.icon.name();
    }

		$scope.objCityUpdate = cityupdate;

	} else {

		$scope.objCityUpdate = {};
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

	$scope.uploadImage = function (file, invalidFile) {

		if (file) {
      $scope.imageFilename = file.name;
			$scope.isUploading = true;

			File.upload(file).then(function (savedFile) {
        $scope.objCityUpdate.image = savedFile;
        $scope.isUploading = false;
	 		},
      function (error) {
   		  showToast(error.message);
   		  $scope.isUploading = false;
	 		});
		} else {
      if (invalidFile) {
        if (invalidFile.$error === 'maxSize') {
          showToast('Image too big. Max ' + invalidFile.$errorParam);
        }
      }
    }
	};

  $scope.uploadIcon = function (file, invalidFile) {

    if (file) {
      $scope.iconFilename = file.name;
			$scope.isUploadingIcon = true;

			File.upload(file).then(function (savedFile) {
        $scope.objCityUpdate.icon = savedFile;
        $scope.isUploadingIcon = false;
	 		}, function (error) {
	 		  showToast(error.message);
	 		  $scope.isUploadingIcon = false;
	 		});
    } else {
      if (invalidFile) {
        if (invalidFile.$error === 'maxSize') {
          showToast('Icon too big. Max ' + invalidFile.$errorParam);
        } else if (invalidFile.$error === 'dimensions') {
          $translate('ICON_SIZE_HELP').then(function(str) {
						showToast(str);
					});
        }
      }
    }
	};

	$scope.onSaveCityUpdate = function (isFormValid) {

		if(!isFormValid) {
			$translate('FILL_FIELDS').then(function(str) {
				showToast(str);
		  });
		} else if (!$scope.objCityUpdate.image) {
			$translate('IMAGE_REQUIRED').then(function(str) {
				showToast(str);
		  });
		} else {

      $scope.isSavingCityUpdate = true;

			CityUpdate.create($scope.objCityUpdate).then(function (cityupdate) {
				$translate('SAVED').then(function(str) {
					showToast(str);
				});
				$mdDialog.hide();
        $scope.isSavingCityUpdate = false;
			}, function (error) {
				showToast(error.message);
        $scope.isSavingCityUpdate = false;
			});
		}

	};

	$scope.onUpdateCityUpdate = function (isFormValid) {

		if(!isFormValid) {
			$translate('FILL_FIELDS').then(function(str) {
				showToast(str);
		  });
		} else if(!$scope.objCityUpdate.image) {
			$translate('IMAGE_REQUIRED').then(function(str) {
				showToast(str);
		  });
		} else {

      $scope.isSavingCityUpdate = true;

			CityUpdate.update($scope.objCityUpdate).then(function (cityupdate) {
				$translate('SAVED').then(function(str) {
					showToast(str);
				});
				$mdDialog.hide();
        $scope.isSavingCityUpdate = false;
			}, function (error) {
				showToast(error.message);
        $scope.isSavingCityUpdate = false;
			});
		}
	}

});
