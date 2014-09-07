'use strict';

angular.module('vSeeUApp')
    .controller('MainCtrl', ['$scope', '$location', '$routeParams', '$http',
        function ($scope, $location, $routeParams, $http) {
            $scope.vseesLoaded = $http.get('/api/vsees').then(function (response) {
                $scope.vsees = response.data;
            });
        }]);