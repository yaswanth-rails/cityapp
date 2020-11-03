'use strict';

 angular.module('app')
 .controller('RentCtrl', function ($scope, $mdDialog, $mdToast, $translate, Rent, Auth) {

 	// Pagination options.
 	$scope.rowOptions = [10, 20, 40];

 	$scope.query = {
 		filter: '',
 		limit: 40,
 		page: 1,
 		total: 0
 	};

	 $scope.rent = [];
	 
	 var showToast = function (message) {
		$mdToast.show(
			$mdToast.simple()
			.content(message)
			.action('OK')
			.hideDelay(3000)
		);
	};

 	var loadRent = function() {
    Auth.ensureLoggedIn().then(function () {
 		  $scope.promise = Rent.all($scope.query).then(function(rent) {
 			  $scope.rent = rent;
 		  });
    });
 	}

 	loadRent();

  var loadCount = function () {
    Auth.ensureLoggedIn().then(function () {
      Rent.count($scope.query).then(function(total) {
   		  $scope.query.total = total;
   	  });
    });
  }

  loadCount();

 	$scope.onSearch = function () {
 		$scope.query.page = 1;
 		$scope.query.total = 0;
 		loadRent();
    loadCount();
 	};

 	$scope.onPaginationChange = function (page, limit) {
 		$scope.query.page = page;
 		$scope.query.limit = limit;
 		loadRent();
 	};

 	$scope.openMenu = function ($mdOpenMenu, ev) {
 		$mdOpenMenu(ev);
 	};

 	$scope.onNewRent = function (ev) {

 		$mdDialog.show({
 			controller: 'DialogRentController',
 			templateUrl: '/views/partials/rent.html',
 			parent: angular.element(document.body),
 			targetEvent: ev,
 			locals: {
 				rent: null
 			},
 			clickOutsideToClose: true
 		})
 		.then(function(answer) {
 			loadRent();
      loadCount();
 		});
 	}

 	$scope.onEditRent = function (ev, rent) {

 		$mdDialog.show({
 			controller: 'DialogRentController',
 			templateUrl: '/views/partials/rent.html',
 			parent: angular.element(document.body),
 			targetEvent: ev,
 			locals: {
 				rent: angular.copy(rent)
 			},
 			clickOutsideToClose: true
 		})
 		.then(function(answer) {
 			loadRent();
 		});
 	}

 	$scope.onDestroyRent = function(ev, rent) {

		$translate(['DELETE', 'CONFIRM_DELETE', 'CONFIRM', 'CANCEL', 'DELETED']).then(function(str) {
			
			var confirm = $mdDialog.confirm()
				.title(str.DELETE)
				.textContent(str.CONFIRM_DELETE)
				.ariaLabel(str.DELETE)
				.ok(str.CONFIRM)
				.cancel(str.CANCEL);
			$mdDialog.show(confirm).then(function() {

				Rent.destroy(rent.id).then(function() {
					$translate('DELETED').then(function(str) {
							showToast(str);
					});
					loadRent();
				  loadCount();
				}, function (error) {
					showToast(error.message);
				});
			});

		});

 	}

}).controller('DialogRentController',
function($scope, $mdDialog, $translate, $mdToast, Rent, File, rent) {

	$scope.isCreating = false;
	$scope.isUploading = false;
  $scope.isUploadingIcon = false;
	$scope.imageFilename = '';
  $scope.iconFilename = '';

	if (rent) {

		$scope.isCreating = false;
		$scope.imageFilename = rent.image.name();

    if (rent.icon) {
      $scope.iconFilename = rent.icon.name();
    }

		$scope.objRent = rent;

	} else {

		$scope.objRent = {};
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
        $scope.objRent.image = savedFile;
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
        $scope.objRent.icon = savedFile;
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

	$scope.onSaveRent = function (isFormValid) {

		if(!isFormValid) {
			$translate('FILL_FIELDS').then(function(str) {
				showToast(str);
		  });
		} else if (!$scope.objRent.image) {
			$translate('IMAGE_REQUIRED').then(function(str) {
				showToast(str);
		  });
		} else {

      $scope.isSavingRent = true;

			Rent.create($scope.objRent).then(function (rent) {
				$translate('SAVED').then(function(str) {
					showToast(str);
				});
				$mdDialog.hide();
        $scope.isSavingRent = false;
			}, function (error) {
				showToast(error.message);
        $scope.isSavingRent = false;
			});
		}

	};

	$scope.onUpdateRent = function (isFormValid) {

		if(!isFormValid) {
			$translate('FILL_FIELDS').then(function(str) {
				showToast(str);
		  });
		} else if(!$scope.objRent.image) {
			$translate('IMAGE_REQUIRED').then(function(str) {
				showToast(str);
		  });
		} else {

      $scope.isSavingRent = true;

			Rent.update($scope.objRent).then(function (rent) {
				$translate('SAVED').then(function(str) {
					showToast(str);
				});
				$mdDialog.hide();
        $scope.isSavingRent = false;
			}, function (error) {
				showToast(error.message);
        $scope.isSavingRent = false;
			});
		}
	}

});
