angular.module('app.home', [])

  .controller('HomeController', function($scope, $location, LocationService, RestBusService, PageChangeService) {

    //on load get the user's current location
    LocationService.getCurrentLocation(function(currentLocation) {
      $scope.loc = currentLocation;

      RestBusService.getStops($scope.loc)
      .then(function(data) {
        $scope.stops = {};
        for (var i = 0; i < data.data.length; i++) {
          var routeName = data.data[i].route.title;
          if (!$scope.stops[routeName]) {
            $scope.stops[routeName] = data.data[i];
          } else {
            $scope.stops[routeName].values = $scope.stops[routeName].values.concat(data.data[i].values);
          }
        }
        console.log($scope.stops);
        console.log(data.data);
      });
    });

    $scope.log = function(data) {
      console.log(data);
    };
    
    $scope.changePage = function(route, uri) {
      PageChangeService.currentRoute = route;
      PageChangeService.backView.push($location.url());
      $location.path('/' + uri);
    };

  });
