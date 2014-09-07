'use strict';

angular.module('vSeeUApp')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/see/:index', {
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl',
                resolve: {
                    vsees: function ($http) {
                        return $http.get('/api/vsees').then(function (response) {
                            return response.data;
                        });
                    }
                }
            })
            .when('/', {
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl',
                resolve: {
                    vsees: function ($http) {
                        return $http.get('/api/vsees').then(function (response) {
                            return response.data;
                        });
                    }
                }
            });
    });