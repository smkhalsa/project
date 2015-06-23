angular.module('app.details', [])

  .controller('DetailsController', function($scope, $ionicHistory, $location, LocationService, RestBusService,
   PageChangeService, ReadFileService) {

    var init = function() {
      $scope.routeDetails = PageChangeService.currentRoute;
    };
    
    $scope.goBack = function() {
      var lastPage = PageChangeService.backView;
      $location.path(lastPage.splice(lastPage.length - 1, 1));
    };

    LocationService.getCurrentLocation(function(currentLocation) {
      $scope.loc = currentLocation;
      console.log($scope.loc);

      RestBusService.getStops($scope.loc)
      .then(function(data) {
        $scope.routeInfo = PageChangeService.currentRoute;
        
        $scope.stations = {};

        // load map 
        // var sanFran = {lat: 37.78, lng: -122.416}
        $scope.mapOptions = {center: {lat: $scope.loc.latitude, lng: $scope.loc.longitude}, zoom: 17};
        $scope.map = new google.maps.Map(document.getElementById('mapContainer'), $scope.mapOptions);

        // get list of stations
        ReadFileService.readFile('../stops.json')
          .then(function(data) {
            $scope.stations = data.data;

            var currentStation = $scope.stations[$scope.routeDetails.stop.id];

            // mark station
            var stationMarker = new google.maps.Marker({
              position: new google.maps.LatLng(currentStation.lat, currentStation.lon),
              map: $scope.map,
              title: 'station'
            });
          });

        // mark user location
        var userMarker = new google.maps.Marker({
          position: new google.maps.LatLng($scope.loc.latitude, $scope.loc.longitude),
          map: $scope.map,
          title: 'user',
          icon: './img/user.png'
        });

      });

    });

    init();

  });
