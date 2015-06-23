angular.module('app', [
    'ionic',
    'ui.router',
    'app.home',
    'app.details',
    'app.services',
    'app.auth'
  ])
  /**
   * Class that begins ionic and cordova.
   * @file
   */
  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

.config(function($stateProvider, $urlRouterProvider) {

  // Send to home if route is not found
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'js/home/home.html'
    })
    .state('details', {
      url: '/details',
      templateUrl: 'js/details/details.html'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'js/auth/login.html'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'js/auth/signup.html'
    });
});