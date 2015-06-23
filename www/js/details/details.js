angular.module('app.details', [])

  .controller('DetailsController', function($scope, $ionicHistory, $location, LocationService, RestBusService, PageChangeService) {
    LocationService.getCurrentLocation(function(currentLocation) {

      var init = function() {
        $scope.routeDetails = PageChangeService.currentRoute;
      };
      
      $scope.goBack = function() {
        var lastPage = PageChangeService.backView
        $location.path(lastPage.splice(lastPage.length - 1, 1));
      };

      init();
    });
  });
