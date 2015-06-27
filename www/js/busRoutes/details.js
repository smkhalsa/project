angular.module('app.details', [])

  .controller('DetailsController', function($scope, route, LocationService, RestBusService, MapService, VehiclesService) {
    $scope.route = route;
  
    $scope.userLocation = LocationService.getCurrentLocation(function(data) {
      $scope.map = MapService.createMap(data);

      LocationService.displayUser($scope.map, data, './img/user.png', 3000);

      RestBusService.getStationLocation($scope.map, route);

      VehiclesService.displayVehicles($scope.map, $scope.route, './img/bus.png', 3000);

    });

  });
