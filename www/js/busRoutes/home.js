angular.module('app.home', [])

.controller('HomeController', function($scope, routes, RestBusService) {
    $scope.routes = routes;

    $scope.doRefresh = function() {
      RestBusService.getRoutes()
      .then(function() {
        $scope.routes = routes;
      });
      $scope.$broadcast('scroll.refreshComplete');
    }
  });