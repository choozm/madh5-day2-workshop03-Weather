var Ctrl = angular.module('app.controllers', []);

var CityCtrl = function ($scope, $state, $stateParams, CitySvc) {
    $scope.city = "";
    $scope.weather = "";
    $scope.cities = ["singapore", "london"];

    $scope.add = function () {
        CitySvc.add($scope.city);
        $scope.city = "";
        $scope.cities = CitySvc.getAll();
    }

    $scope.showWeather = function (c) {
        $state.go("weather", {city: c});
    }
};

var WeatherCtrl = function ($scope, $state, $stateParams, WeatherSvc) {
    $scope.weather = {};
    WeatherSvc.getWeather($stateParams.city)
        .then(function (result) {
            $scope.weather = result;
        })
        .catch(function (msg) {
            $scope.weather = {};
        })
};

Ctrl.controller("WeatherCtrl", ["$scope", "$state", "$stateParams", "WeatherSvc", WeatherCtrl]);
Ctrl.controller("CityCtrl", ["$scope", "$state", "$stateParams", "CitySvc", CityCtrl]);
