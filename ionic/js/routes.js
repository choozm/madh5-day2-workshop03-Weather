angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider.state('cities', {
    url: '/cities',
    templateUrl: 'templates/cities.html',
    controller: "CityCtrl"
  })

  .state('weather', {
    url: '/weather/:city',
    templateUrl: 'templates/weather.html',
    controller: "WeatherCtrl"
  })

$urlRouterProvider.otherwise('/cities')

});