'use strict';

 angular.module('app')
 .controller('SaleCtrl', function ($scope, $mdDialog, $mdToast, $translate, Sale, Auth) {

 	// Pagination options.
 	$scope.rowOptions = [10, 20, 40];

 	$scope.query = {
 		filter: '',
 		limit: 40,
 		page: 1,
 		total: 0
 	};

	 $scope.sale = [];
	 
	 var showToast = function (message) {
		$mdToast.show(
			$mdToast.simple()
			.content(message)
			.action('OK')
			.hideDelay(3000)
		);
	};

 	var loadSale = function() {
    Auth.ensureLoggedIn().then(function () {
 		  $scope.promise = Sale.all($scope.query).then(function(sale) {
 			  $scope.sale = sale;
 		  });
    });
 	}

 	loadSale();

  var loadCount = function () {
    Auth.ensureLoggedIn().then(function () {
      Sale.count($scope.query).then(function(total) {
   		  $scope.query.total = total;
   	  });
    });
  }

  loadCount();

 	$scope.onSearch = function () {
 		$scope.query.page = 1;
 		$scope.query.total = 0;
 		loadSale();
    loadCount();
 	};

 	$scope.onPaginationChange = function (page, limit) {
 		$scope.query.page = page;
 		$scope.query.limit = limit;
 		loadSale();
 	};

 	$scope.openMenu = function ($mdOpenMenu, ev) {
 		$mdOpenMenu(ev);
 	};

 	$scope.onNewSale = function (ev) {

 		$mdDialog.show({
 			controller: 'DialogSaleController',
 			templateUrl: '/views/partials/sale.html',
 			parent: angular.element(document.body),
 			targetEvent: ev,
 			locals: {
 				sale: null
 			},
 			clickOutsideToClose: true
 		})
 		.then(function(answer) {
 			loadSale();
      loadCount();
 		});
 	}

 	$scope.onEditSale = function (ev, sale) {

 		$mdDialog.show({
 			controller: 'DialogSaleController',
 			templateUrl: '/views/partials/sale.html',
 			parent: angular.element(document.body),
 			targetEvent: ev,
 			locals: {
 				sale: angular.copy(sale)
 			},
 			clickOutsideToClose: true
 		})
 		.then(function(answer) {
 			loadSale();
 		});
 	}

 	$scope.onDestroySale = function(ev, sale) {

		$translate(['DELETE', 'CONFIRM_DELETE', 'CONFIRM', 'CANCEL', 'DELETED']).then(function(str) {
			
			var confirm = $mdDialog.confirm()
				.title(str.DELETE)
				.textContent(str.CONFIRM_DELETE)
				.ariaLabel(str.DELETE)
				.ok(str.CONFIRM)
				.cancel(str.CANCEL);
			$mdDialog.show(confirm).then(function() {

				Sale.destroy(sale.id).then(function() {
					$translate('DELETED').then(function(str) {
							showToast(str);
					});
					loadSale();
				  loadCount();
				}, function (error) {
					showToast(error.message);
				});
			});

		});

 	}

}).controller('DialogSaleController',
function($scope, $mdDialog, $translate, $mdToast, Sale, File, sale) {

	$scope.isCreating = false;
	$scope.isUploading = false;
  $scope.isUploadingIcon = false;
	$scope.imageFilename = '';
  $scope.iconFilename = '';

	if (sale) {

		$scope.isCreating = false;
		$scope.imageFilename = sale.image.name();

    if (sale.icon) {
      $scope.iconFilename = sale.icon.name();
    }

		$scope.objSale = sale;

	} else {

		$scope.objSale = {};
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
        $scope.objSale.image = savedFile;
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
        $scope.objSale.icon = savedFile;
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

	$scope.onSaveSale = function (isFormValid) {

		if(!isFormValid) {
			$translate('FILL_FIELDS').then(function(str) {
				showToast(str);
		  });
		} else if (!$scope.objSale.image) {
			$translate('IMAGE_REQUIRED').then(function(str) {
				showToast(str);
		  });
		} else {

      $scope.isSavingSale = true;

			Sale.create($scope.objSale).then(function (sale) {
				$translate('SAVED').then(function(str) {
					showToast(str);
				});
				$mdDialog.hide();
        $scope.isSavingSale = false;
			}, function (error) {
				showToast(error.message);
        $scope.isSavingSale = false;
			});
		}

	};

	$scope.onUpdateSale = function (isFormValid) {

		if(!isFormValid) {
			$translate('FILL_FIELDS').then(function(str) {
				showToast(str);
		  });
		} else if(!$scope.objSale.image) {
			$translate('IMAGE_REQUIRED').then(function(str) {
				showToast(str);
		  });
		} else {

      $scope.isSavingSale = true;

			Sale.update($scope.objSale).then(function (sale) {
				$translate('SAVED').then(function(str) {
					showToast(str);
				});
				$mdDialog.hide();
        $scope.isSavingSale = false;
			}, function (error) {
				showToast(error.message);
        $scope.isSavingSale = false;
			});
		}
	}

});
