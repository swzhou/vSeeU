'use strict';

angular.module('vSeeUApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/vsees', {
        templateUrl: 'app/vsees/vsees.html',
        controller: 'VseesCtrl'
      });
  });
