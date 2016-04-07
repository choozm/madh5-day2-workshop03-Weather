var Service = angular.module('app.services', []);


var CitySvc = function () {
    var cities = [];

    this.add = function (c) {
        cities.push(c);
    }

    this.getAll = function () {
        return cities;
    }
}

var WeatherSvc = function ($http, $q) {
    this.getWeather = function (city) {
        var defer = $q.defer();
        $http.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=66010b13108b92a4383a5eeebca2fc78&units=metric")
            .then(function(result) {
                defer.resolve(result.data);
            }).catch(function() {
            defer.reject("Error in getting weather");
        });
        return (defer.promise);
    }
}


Service.service("CitySvc", [CitySvc]);
Service.service("WeatherSvc", ["$http", "$q", WeatherSvc]);
