'use strict';

angular.module('vSeeUApp')
    .controller('MainCtrl', ['$scope', '$location', '$routeParams', '$http', 'vsees',
        function ($scope, $location, $routeParams, $http, vsees) {
            $scope.vsees = vsees;
            if(!$routeParams.index) {
                $location.path('/see/' + $scope.vsees[0].index);
            }
            $scope.getTitle = function () {
                var currentIndex = _.find($scope.vsees, function (vsee) {
                    return $routeParams.index === vsee.index;
                });
                return !!currentIndex ? currentIndex.name : '';
            };

            $scope.shouldShowChart = true;
            $scope.showChart = function () {
                $scope.shouldShowChart = true;
            };
            $scope.showData = function () {
                $scope.shouldShowChart = false;
            };
        }]);