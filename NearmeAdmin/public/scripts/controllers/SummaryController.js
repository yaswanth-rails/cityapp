'use strict';

 angular.module('app')
 .controller('SummaryCtrl', function ($scope, $mdDialog, Summary, Auth, User, Category, $filter, Place, Jobs, JobsList, CityUpdate,UpdateList, Sale, SaleList, Rent, RentList) {

  // Pagination options.
  $scope.rowOptions = [10, 20, 40];

  $scope.query = {
    filter: '',
    limit: 40,
    page: 1,
    total: 0
  };

  $scope.summary = [];
  

  var loadSummary = function() {
    Auth.ensureLoggedIn().then(function () {
      $scope.promise = Summary.all($scope.query).then(function(summary) {
        $scope.summary = summary;
      });
    });
  }

  loadSummary();
   
// adding USers table here

     var loadUsers = function() {
           Auth.ensureLoggedIn().then(function () {
           $scope.promise = User.all($scope.query).then(function (data) {
           $scope.users = data.users;
           $scope.filteredHeroes = {};
           $scope.query.total = data.total;
           $scope.filteredHeroes.Admin = $filter('filter')($scope.users, {roleName: 'Admin'});
           $scope.filteredHeroes.User = $filter('filter')($scope.users, {roleName: 'User'});
           $scope.filteredHeroes.SO = $filter('filter')($scope.users, {roleName: 'SO'});
           $scope.filteredHeroes.SL = $filter('filter')($scope.users, {roleName: 'SL'});
        });
      });
    }
    
    loadUsers();
    
//end
//adding categories table here

  var loadCategories = function() {
    Auth.ensureLoggedIn().then(function () {
      $scope.promise = Category.all($scope.query).then(function(categories) {
        $scope.categories = categories;
      });
    });
  }

  loadCategories();
//end

  //adding place tables here

  var loadPlaces = function () {
    Auth.ensureLoggedIn().then(function () {
      $scope.promise = Place.all($scope.query).then(function (places) {
        $scope.places = places;
      });
    });
  };
  loadPlaces();
//end


  var loadCount = function () {
    Auth.ensureLoggedIn().then(function () {
      Summary.count($scope.query).then(function(total) {
        $scope.query.total = total;
      });
    });
  }

  loadCount();
  //adding offers tables


   var loadRent = function() {
    Auth.ensureLoggedIn().then(function () {
      $scope.promise = Rent.all($scope.query).then(function(rent) {
        $scope.rent = rent;
      });
    });
  }

  loadRent();


  //end here

  //adding offerslist tablehere
    
  //end

        var loadRentLists = function () {
    Auth.ensureLoggedIn().then(function () {
      $scope.promise = RentList.all($scope.query).then(function (rentlists) {
        $scope.rentlists = rentlists;
      });
    });
  };

  loadRentLists();


//adding jobs here
var loadjobs = function() {
    Auth.ensureLoggedIn().then(function () {
      $scope.promise = Jobs.all($scope.query).then(function(jobs) {
        $scope.jobs = jobs;
      });
    });
  }

  loadjobs();
//end

//adding jobslist here

 var loadJobsLists = function () {
    Auth.ensureLoggedIn().then(function () {
      $scope.promise = JobsList.all($scope.query).then(function (jobslists) {
        $scope.jobslists = jobslists;
      });
    });
  };

  loadJobsLists();
//end


//adding update table here
  var loadCityUpdate = function() {
    Auth.ensureLoggedIn().then(function () {
      $scope.promise = CityUpdate.all($scope.query).then(function(cityupdate) {
        $scope.cityupdate = cityupdate;
      });
    });
  }

loadCityUpdate();
//end
// add update list here
  var loadUpdateLists = function () {
    Auth.ensureLoggedIn().then(function () {
      $scope.promise = UpdateList.all($scope.query).then(function (updatelists) {
        $scope.updatelists = updatelists;
      });
    });
  };
       loadUpdateLists();
//end
// adding update list
  var loadSaleLists = function () {
    Auth.ensureLoggedIn().then(function () {
      $scope.promise = SaleList.all($scope.query).then(function (salelists) {
        $scope.salelists = salelists;
      });
    });
  };

  loadSaleLists();

//end
//adding sale table
  var loadSale = function() {
    Auth.ensureLoggedIn().then(function () {
      $scope.promise = Sale.all($scope.query).then(function(sale) {
        $scope.sale = sale;
      });
    });
  }

  loadSale();
//end

  $scope.onSearch = function () {
    $scope.query.page = 1;
    $scope.query.total = 0;
    loadSummary();
    loadCount();
  };

 


}).controller('DialogSummaryController',
function($scope, $mdDialog, $mdToast, Summary, File, summary) {


  
  $scope.isCreating = false;
  $scope.isUploading = false;
  $scope.isUploadingIcon = false;
  $scope.imageFilename = '';
  $scope.iconFilename = '';

  if (category) {

    $scope.isCreating = false;
    $scope.imageFilename = category.image.name();

    if (category.icon) {
      $scope.iconFilename = category.icon.name();
    }

    $scope.objCategory = category;

  } else {

    $scope.objCategory = {};
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
        $scope.objCategory.image = savedFile;
        $scope.isUploading = false;
        showToast('Image uploaded');
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
        $scope.objCategory.icon = savedFile;
        $scope.isUploadingIcon = false;
        showToast('Icon uploaded');
      }, function (error) {
        showToast(error.message);
        $scope.isUploadingIcon = false;
      });
    } else {
      if (invalidFile) {
        if (invalidFile.$error === 'maxSize') {
          showToast('Icon too big. Max ' + invalidFile.$errorParam);
        } else if (invalidFile.$error === 'dimensions') {
          showToast('Icon size should be 64x64');
        }
      }
    }
  };

  $scope.onSaveSummary = function () {

    

      $scope.isSavingCategory = true;

      Category.create($scope.objCategory).then(function (summary) {
        showToast('Category saved');
        $mdDialog.hide();
        $scope.isSavingSummary = false;
      }, function (error) {
        showToast(error.message);
        $scope.isSavingSummary = false;
      });
    

  };

  $scope.onUpdateCategory = function (isFormValid) {

    if(!isFormValid) {
      showToast('Please correct all highlighted errors and try again');
    } else if(!$scope.objCategory.image) {
      showToast('Upload an image');
    } else {

      $scope.isSavingCategory = true;

      Category.update($scope.objCategory).then(function (category) {
        showToast('Category updated');
        $mdDialog.hide();
        $scope.isSavingCategory = false;
      }, function (error) {
        showToast(error.message);
        $scope.isSavingCategory = false;
      });
    }
  }
  




});
