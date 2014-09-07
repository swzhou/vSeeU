'use strict';

angular.module('vSeeUApp')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/see/:index', {
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl'
            })
            .when('/', {
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl'
            });
    });