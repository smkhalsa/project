angular.module('app.details', [])

  .controller('DetailsController', function($scope, $ionicHistory, $location, LocationService, RestBusService,
   PageChangeService, ReadFileService, VehiclesService, StopCodeService) {

    StopCodeService.getStopCodes()
      .then(function(data) {
        console.log(data);
      });

    var init = function() {
      $scope.vehicles = [];
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
        $scope.routeDetails = data.data[12];
        
        // load map 
        // var sanFran = {lat: 37.78, lng: -122.416}
        $scope.mapOptions = {center: {lat: $scope.loc.latitude, lng: $scope.loc.longitude}, zoom: 17};
        $scope.map = new google.maps.Map(document.getElementById('mapContainer'), $scope.mapOptions);


      // console.log($scope.routeDetails);
        $scope.getStops()
        .then(function() {
          $scope.getStopLocation()
          .then(function() {
            $scope.renderMapMarkers();

            $scope.getVehicles()
            .then(function(data) {
              var vehicles = data.data;
              // console.log(vehicles);

              for(var i = 0, len = vehicles.length; i < len; i++) {

                if(vehicles[i].routeId === $scope.routeDetails.route.id) {

                  $scope.vehicles.push(
                    {
                      id: vehicles[i].id,
                      marker: new google.maps.Marker({
                        position: new google.maps.LatLng(vehicles[i].lat, vehicles[i].lon),
                        map: $scope.map,
                        title: 'station',
                        icon: './img/bus.png'
                      })
                    }
                  );

                }
              }

              // update all map markers
              setInterval(function(){$scope.updateMapMarkers();}, 3000);
            });

            
          });
        });

      });
    });

    
    $scope.goBack = function() {
      var lastPage = PageChangeService.backView;
      $location.path(lastPage.splice(lastPage.length - 1, 1));
    };

    $scope.getLocation = function(callback) {
      LocationService.getCurrentLocation(callback);
    };

    $scope.getStops = function() {
      return RestBusService.getStops($scope.loc)
      .then(function() {
        $scope.routeInfo = PageChangeService.currentRoute;
        $scope.stations = {};
      });
    };

    $scope.getVehicles = function() {
      return VehiclesService.getVehicles();
    };

    $scope.getStopLocation = function() {
      // get list of stations
      return ReadFileService.readFile('../stops.json')
      .then(function(data) {
        $scope.stations = data.data;
      });
    };
    
    $scope.renderMapMarkers = function() {
      // mark user location
      $scope.userMarker = new google.maps.Marker({
        position: new google.maps.LatLng($scope.loc.latitude, $scope.loc.longitude),
        map: $scope.map,
        title: 'user',
        icon: './img/user.png'
      });

      var currentStation = $scope.stations[$scope.routeDetails.stop.id];
      // mark station
      $scope.stationMarker = new google.maps.Marker({
        position: new google.maps.LatLng(currentStation.lat, currentStation.lon),
        map: $scope.map,
        title: 'station'
      });
    };

    $scope.updateMapMarkers = function() {

      //update user position
      $scope.getLocation(function(data) {
        var lat = data.latitude;
        var lon = data.longitude;

        $scope.userMarker.setPosition(new google.maps.LatLng(lat, lon));
        // $scope.map.panTo(new google.maps.LatLng(lat, lon));
        $scope.loc.latitude = lat;
        $scope.loc.longitude = lon;
      });

      // switch to new closest station
      RestBusService.getStops($scope.loc)
      .then(function(data) {
        var stops = data.data;
        var stopsArr = [];
        for(var i = 0; i < stops.length; i++) {
          if(stops[i].route.id === $scope.routeDetails.route.id) {
            stopsArr.push(stops[i]);
          }
        }

        // console.log(stopsArr);
        var lat = $scope.stations[stopsArr[0].stop.id].lat;
        var lon = $scope.stations[stopsArr[0].stop.id].lon;

        $scope.stationMarker.setPosition(new google.maps.LatLng(lat, lon));
      });

      // update vehicle position
      $scope.getVehicles()
      .then(function(data) {
        var vehicles = data.data.filter(function(vehicle){return vehicle.routeId === $scope.routeDetails.route.id;});
        var vehiclesById = {};

        for(var i = 0, len = vehicles.length; i < len; i++) {
          vehiclesById[vehicles[i].id] = vehicles[i];
        }

        for(var j = 0, len2 = $scope.vehicles.length; j < len2; j++) {
          var lat = vehiclesById[$scope.vehicles[j].id].lat;
          var lon = vehiclesById[$scope.vehicles[j].id].lon;

          $scope.vehicles[j].marker.setPosition(new google.maps.LatLng(lat, lon));
        } 

      });

    };

    init();

  });
