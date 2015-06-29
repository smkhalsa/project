angular.module('app.details', [])

  .controller('DetailsController', function($scope, route, LocationService, userLocation, RestBusService, MapService, VehiclesService) {
    $scope.route = route;
    $scope.userLocation = userLocation;
        $scope.map = MapService.createMap($scope.userLocation);
    
    $scope.doRefresh = function() {
      LocationService.displayUser($scope.map, $scope.userLocation, './img/user.png', 3000);

      RestBusService.getStationLocation($scope.map, route);

      VehiclesService.displayVehicles($scope.map, $scope.route, './img/bus.png', 3000);
      $scope.$broadcast('scroll.refreshComplete');
    };
   
    $scope.doRefresh();

  });
