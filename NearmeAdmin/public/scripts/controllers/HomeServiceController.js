'use strict';

 angular.module('app')
 .controller('HomeServiceCtrl', function ($scope, $mdDialog, $mdToast, $translate, HomeService, Auth) {

 	// Pagination options.
 	$scope.rowOptions = [10, 20, 40];

 	$scope.query = {
 		filter: '',
 		limit: 40,
 		page: 1,
 		total: 0
 	};

	 $scope.homeservice = [];
	 
	 var showToast = function (message) {
		$mdToast.show(
			$mdToast.simple()
			.content(message)
			.action('OK')
			.hideDelay(3000)
		);
	};

 	var loadHomeService = function() {
    Auth.ensureLoggedIn().then(function () {
 		  $scope.promise = HomeService.all($scope.query).then(function(homeservice) {
 			  $scope.homeservice = homeservice;
 		  });
    });
 	}

 	loadHomeService();

  var loadCount = function () {
    Auth.ensureLoggedIn().then(function () {
      HomeService.count($scope.query).then(function(total) {
   		  $scope.query.total = total;
   	  });
    });
  }

  loadCount();

 	$scope.onSearch = function () {
 		$scope.query.page = 1;
 		$scope.query.total = 0;
 		loadHomeService();
    loadCount();
 	};

 	$scope.onPaginationChange = function (page, limit) {
 		$scope.query.page = page;
 		$scope.query.limit = limit;
 		loadHomeService();
 	};

 	$scope.openMenu = function ($mdOpenMenu, ev) {
 		$mdOpenMenu(ev);
 	};

 	$scope.onNewHomeService = function (ev) {

 		$mdDialog.show({
 			controller: 'DialogHomeServiceController',
 			templateUrl: '/views/partials/homeservice.html',
 			parent: angular.element(document.body),
 			targetEvent: ev,
 			locals: {
 				homeservice: null
 			},
 			clickOutsideToClose: true
 		})
 		.then(function(answer) {
 			loadHomeService();
      loadCount();
 		});
 	}

 	$scope.onEditHomeService = function (ev, homeservice) {

 		$mdDialog.show({
 			controller: 'DialogHomeServiceController',
 			templateUrl: '/views/partials/homeservice.html',
 			parent: angular.element(document.body),
 			targetEvent: ev,
 			locals: {
 				homeservice: angular.copy(homeservice)
 			},
 			clickOutsideToClose: true
 		})
 		.then(function(answer) {
 			loadHomeService();
 		});
 	}

 	$scope.onDestroyHomeService = function(ev, homeservice) {

		$translate(['DELETE', 'CONFIRM_DELETE', 'CONFIRM', 'CANCEL', 'DELETED']).then(function(str) {
			
			var confirm = $mdDialog.confirm()
				.title(str.DELETE)
				.textContent(str.CONFIRM_DELETE)
				.ariaLabel(str.DELETE)
				.ok(str.CONFIRM)
				.cancel(str.CANCEL);
			$mdDialog.show(confirm).then(function() {

				HomeService.destroy(homeservice.id).then(function() {
					$translate('DELETED').then(function(str) {
							showToast(str);
					});
					loadHomeService();
				  loadCount();
				}, function (error) {
					showToast(error.message);
				});
			});

		});

 	}

}).controller('DialogHomeServiceController',
function($scope, $mdDialog, $translate, $mdToast, HomeService, File, homeservice) {

	$scope.isCreating = false;
	$scope.isUploading = false;
  $scope.isUploadingIcon = false;
	$scope.imageFilename = '';
  $scope.iconFilename = '';

	if (homeservice) {

		$scope.isCreating = false;
		$scope.imageFilename = homeservice.image.name();

    if (homeservice.icon) {
      $scope.iconFilename = homeservice.icon.name();
    }

		$scope.objHomeService = homeservice;

	} else {

		$scope.objHomeService = {};
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
        $scope.objHomeService.image = savedFile;
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
        $scope.objHomeService.icon = savedFile;
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

	$scope.onSaveHomeService = function (isFormValid) {

		if(!isFormValid) {
			$translate('FILL_FIELDS').then(function(str) {
				showToast(str);
		  });
		} else if (!$scope.objHomeService.image) {
			$translate('IMAGE_REQUIRED').then(function(str) {
				showToast(str);
		  });
		} else {

      $scope.isSavingHomeService = true;

			HomeService.create($scope.objHomeService).then(function (homeservice) {
				$translate('SAVED').then(function(str) {
					showToast(str);
				});
				$mdDialog.hide();
        $scope.isSavingHomeService = false;
			}, function (error) {
				showToast(error.message);
        $scope.isSavingHomeService = false;
			});
		}

	};

	$scope.onUpdateHomeService = function (isFormValid) {

		if(!isFormValid) {
			$translate('FILL_FIELDS').then(function(str) {
				showToast(str);
		  });
		} else if(!$scope.objHomeService.image) {
			$translate('IMAGE_REQUIRED').then(function(str) {
				showToast(str);
		  });
		} else {

      $scope.isSavingHomeService = true;

			HomeService.update($scope.objHomeService).then(function (homeservice) {
				$translate('SAVED').then(function(str) {
					showToast(str);
				});
				$mdDialog.hide();
        $scope.isSavingHomeService = false;
			}, function (error) {
				showToast(error.message);
        $scope.isSavingHomeService = false;
			});
		}
	}

});
