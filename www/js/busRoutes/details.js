angular.module('app.details', [])

  .controller('DetailsController', function($scope, route, LocationService, userLocation, RestBusService, MapService, VehiclesService) {
    $scope.route = route;
    $scope.userLocation = userLocation;
    $scope.map = MapService.createMap($scope.userLocation);
    
    $scope.doRefresh = function() {
      MapService.displayUser($scope.map, $scope.userLocation, './img/user.png');

      RestBusService.getStationLocation($scope.map, route);

      MapService.displayVehicles($scope.map, $scope.route, './img/bus.png');
      $scope.$broadcast('scroll.refreshComplete');
    };
   
    $scope.doRefresh();

  });
