'use strict';

 angular.module('app')
 .controller('JobsCtrl', function ($scope, $mdDialog, $mdToast, $translate, Jobs, Auth) {

 	// Pagination options.
 	$scope.rowOptions = [10, 20, 40];

 	$scope.query = {
 		filter: '',
 		limit: 40,
 		page: 1,
 		total: 0
 	};

	 $scope.jobs = [];
	 
	 var showToast = function (message) {
		$mdToast.show(
			$mdToast.simple()
			.content(message)
			.action('OK')
			.hideDelay(3000)
		);
	};

 	var loadJobs = function() {
    Auth.ensureLoggedIn().then(function () {
 		  $scope.promise = Jobs.all($scope.query).then(function(jobs) {
 			  $scope.jobs = jobs;
 		  });
    });
 	}

 	loadJobs();

  var loadCount = function () {
    Auth.ensureLoggedIn().then(function () {
      Jobs.count($scope.query).then(function(total) {
   		  $scope.query.total = total;
   	  });
    });
  }

  loadCount();

 	$scope.onSearch = function () {
 		$scope.query.page = 1;
 		$scope.query.total = 0;
 		loadJobs();
    loadCount();
 	};

 	$scope.onPaginationChange = function (page, limit) {
 		$scope.query.page = page;
 		$scope.query.limit = limit;
 		loadJobs();
 	};

 	$scope.openMenu = function ($mdOpenMenu, ev) {
 		$mdOpenMenu(ev);
 	};

 	$scope.onNewJobs = function (ev) {

 		$mdDialog.show({
 			controller: 'DialogJobsController',
 			templateUrl: '/views/partials/jobs.html',
 			parent: angular.element(document.body),
 			targetEvent: ev,
 			locals: {
 				jobs: null
 			},
 			clickOutsideToClose: true
 		})
 		.then(function(answer) {
 			loadJobs();
      loadCount();
 		});
 	}

 	$scope.onEditJobs = function (ev, jobs) {

 		$mdDialog.show({
 			controller: 'DialogJobsController',
 			templateUrl: '/views/partials/jobs.html',
 			parent: angular.element(document.body),
 			targetEvent: ev,
 			locals: {
 				jobs: angular.copy(jobs)
 			},
 			clickOutsideToClose: true
 		})
 		.then(function(answer) {
 			loadJobs();
 		});
 	}

 	$scope.onDestroyJobs = function(ev, jobs) {

		$translate(['DELETE', 'CONFIRM_DELETE', 'CONFIRM', 'CANCEL', 'DELETED']).then(function(str) {
			
			var confirm = $mdDialog.confirm()
				.title(str.DELETE)
				.textContent(str.CONFIRM_DELETE)
				.ariaLabel(str.DELETE)
				.ok(str.CONFIRM)
				.cancel(str.CANCEL);
			$mdDialog.show(confirm).then(function() {

				Jobs.destroy(jobs.id).then(function() {
					$translate('DELETED').then(function(str) {
							showToast(str);
					});
					loadJobs();
				  loadCount();
				}, function (error) {
					showToast(error.message);
				});
			});

		});

 	}

}).controller('DialogJobsController',
function($scope, $mdDialog, $translate, $mdToast, Jobs, File, jobs) {

	$scope.isCreating = false;
	$scope.isUploading = false;
  $scope.isUploadingIcon = false;
	$scope.imageFilename = '';
  $scope.iconFilename = '';

	if (jobs) {

		$scope.isCreating = false;
		$scope.imageFilename = jobs.image.name();

    if (jobs.icon) {
      $scope.iconFilename = jobs.icon.name();
    }

		$scope.objJobs = jobs;

	} else {

		$scope.objJobs = {};
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
        $scope.objJobs.image = savedFile;
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
        $scope.objJobs.icon = savedFile;
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

	$scope.onSaveJobs = function (isFormValid) {

		if(!isFormValid) {
			$translate('FILL_FIELDS').then(function(str) {
				showToast(str);
		  });
		} else if (!$scope.objJobs.image) {
			$translate('IMAGE_REQUIRED').then(function(str) {
				showToast(str);
		  });
		} else {

      $scope.isSavingJobs = true;

			Jobs.create($scope.objJobs).then(function (jobs) {
				$translate('SAVED').then(function(str) {
					showToast(str);
				});
				$mdDialog.hide();
        $scope.isSavingJobs = false;
			}, function (error) {
				showToast(error.message);
        $scope.isSavingJobs = false;
			});
		}

	};

	$scope.onUpdateJobs = function (isFormValid) {

		if(!isFormValid) {
			$translate('FILL_FIELDS').then(function(str) {
				showToast(str);
		  });
		} else if(!$scope.objJobs.image) {
			$translate('IMAGE_REQUIRED').then(function(str) {
				showToast(str);
		  });
		} else {

      $scope.isSavingJobs = true;

			Jobs.update($scope.objJobs).then(function (jobs) {
				$translate('SAVED').then(function(str) {
					showToast(str);
				});
				$mdDialog.hide();
        $scope.isSavingJobs = false;
			}, function (error) {
				showToast(error.message);
        $scope.isSavingJobs = false;
			});
		}
	}

});
