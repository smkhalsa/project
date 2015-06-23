angular.module('app.details', [])

  .controller('DetailsController', function($scope, $ionicHistory, $location, LocationService, RestBusService, PageChangeService) {
    var init = function() {
      $scope.routeDetails = PageChangeService.currentRoute;
    };
    
    $scope.goBack = function() {
      var lastPage = PageChangeService.backView
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

        // station markers
        $scope.stationMarkers = [];

        // geocoder
        $scope.geocoder = new google.maps.Geocoder();

        // get current city with reverse-geocoder
        $scope.geocoder.geocode({
          'latLng': new google.maps.LatLng($scope.loc.latitude, $scope.loc.longitude)}, 
          function(results, status) {
            $scope.city = results[0].address_components[3].long_name;
            $scope.stopName = $scope.routeDetails.stop.title.slice(6);
            console.log($scope.routeDetails);

            // mark station location with geocode
            $scope.geocoder.geocode({address: $scope.stopName + ', ' + $scope.city}, function(results, status) {
              var loc = results[0].geometry.location;

              var stationMarker = new google.maps.Marker({
                position: new google.maps.LatLng(loc.A, loc.F),
                map: $scope.map,
                title: 'station'
              });

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
