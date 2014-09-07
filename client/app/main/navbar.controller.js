'use strict';

angular.module('vSeeUApp')
    .controller('MainNavbarCtrl', ['$scope', '$routeParams',
        function ($scope, $routeParams) {
            $scope.vseesLoaded.then(function() {
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
            });
        }]);