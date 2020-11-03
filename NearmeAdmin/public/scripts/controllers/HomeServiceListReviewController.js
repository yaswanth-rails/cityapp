'use strict';

 angular.module('app')
 .controller('HomeServiceListReviewCtrl', function ($scope, $translate, $mdToast, $mdDialog, HomeServiceListReview, Auth) {

  // Pagination options.
  $scope.rowOptions = [10, 20, 40];

  $scope.query = {
    limit: 40,
    page: 1,
    total: 0,
    status: null
  };

  $scope.homeservicelistreviews = [];

  var loadHomeServiceListReviews = function() {
    Auth.ensureLoggedIn().then(function () {
      $scope.promise = HomeServiceListReview.all($scope.query).then(function (homeservicelistreviews) {
        $scope.homeservicelistreviews = homeservicelistreviews;
        console.log($scope.homeservicelistreviews)
      });
    });
  }

  loadHomeServiceListReviews();

  var loadCount = function () {
    Auth.ensureLoggedIn().then(function () {
      HomeServiceListReview.count($scope.query).then(function (total) {
        $scope.query.total = total;
      });
    });
  }

  loadCount();

  var showToast = function (message) {
    $mdToast.show(
      $mdToast.simple()
      .content(message)
      .action('OK')
      .hideDelay(3000)
    );
  };

  $scope.onQueryChange = function () {
    $scope.query.page = 1;
    loadHomeServiceListReviews();
    loadCount();
  }

  $scope.onPaginationChange = function (page, limit) {
    $scope.query.page = page;
    $scope.query.limit = limit;
    loadHomeServiceListReviews();
   };
   
   $scope.onDelete = function (ev, homeservicelistreview) {

    $translate(['DELETE', 'CONFIRM_DELETE', 'CONFIRM', 'CANCEL', 'DELETED']).then(function(str) {
      
      var confirm = $mdDialog.confirm()
        .title(str.DELETE)
        .textContent(str.CONFIRM_DELETE)
        .ariaLabel(str.DELETE)
        .ok(str.CONFIRM)
        .cancel(str.CANCEL);
      $mdDialog.show(confirm).then(function() {


        HomeServiceListReview.destroy(homeservicelistreview).then(function() {
          $translate('DELETED').then(function(str) {
            showToast(str);
          });
          loadHomeServiceListReviews();
          loadCount();
        }, function (error) {
          showToast(error.message);
        });
      });

    });
  };

  $scope.onUpdateIsInappropriate = function (homeservicelistreview, value) {

    var objHomeServiceListReview = angular.copy(homeservicelistreview);

    objHomeServiceListReview.isInappropriate = value;

    HomeServiceListReview.update(objHomeServiceListReview).then(function (success) {
      $translate('SAVED').then(function(str) {
        showToast(str);
      });
      }, function (error) {
      showToast('Error');
    });
  };

  $scope.openMenu = function ($mdOpenMenu, ev) {
    $mdOpenMenu(ev);
  };
}).directive('starRating5', function () {

  return {
    restrict: 'EA',
    template:
      '<ul class="star-rating" ng-class="{readonly: readonly}">' +
      '  <li ng-repeat="star in stars" class="star" ng-class="{filled: star.filled}" ng-click="toggle($index)">' +
      '    <i class="fa fa-star">&#9733</i>' + // or &#9733
      '  </li>' +
      '</ul>',
    scope: {
      ratingValue: '=ngModel',
      max: '=?', // optional (default is 5)
      onRatingSelect: '&?',
      readonly: '=?'
    },
    link: function(scope, element, attributes) {
      if (scope.max == undefined) {
        scope.max = 5;
      }
      function updateStars() {
        scope.stars = [];
        for (var i = 0; i < scope.max; i++) {
          scope.stars.push({
            filled: i < scope.ratingValue
          });
        }
      };
      scope.toggle = function(index) {
        if (scope.readonly == undefined || scope.readonly === false){
          scope.ratingValue = index + 1;
          scope.onRatingSelect({
            rating: index + 1
          });
        }
      };
      scope.$watch('ratingValue', function(oldValue, newValue) {
        if (newValue) {
          updateStars();
        }
      });
    }
  };
});
