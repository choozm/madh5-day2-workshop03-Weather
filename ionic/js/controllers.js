var Ctrl = angular.module('app.controllers', ["ionic"]);

var CityCtrl = function ($scope, $state, $stateParams, $ionicPopup, CitySvc) {
    $scope.weather = "";
    $scope.cities = ["Singapore", "London"];
    for (var i =0; i < $scope.cities.length; i++) {
        CitySvc.add($scope.cities[i]);
    }

    $scope.add = function () {
        $ionicPopup.prompt({
            title: "Add a city",
            inputType: "text",
            inputPlaceholder: "City name"
        }).then(function (result) {
            if (result && $scope.cities.indexOf(result) < 0) {
                CitySvc.add(result);
                console.info($scope.cities);
                $scope.cities = CitySvc.getAll();
                console.info($scope.cities);
            }
        })
    };

    $scope.showWeather = function (c) {
        $state.go("weather", {city: c});
    };
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
Ctrl.controller("CityCtrl", ["$scope", "$state", "$stateParams", "$ionicPopup", "CitySvc", CityCtrl]);
