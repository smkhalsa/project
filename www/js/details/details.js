angular.module('app.details', [])

  .controller('DetailsController', function($scope, LocationService, RestBusService, PageChangeService) {
    LocationService.getCurrentLocation(function(currentLocation) {

      var init = function() {
        $scope.routeDetails = PageChangeService.currentRoute;
      };

      init();
    });
  });
