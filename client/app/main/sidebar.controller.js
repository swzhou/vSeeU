'use strict';

angular.module('vSeeUApp')
    .controller('MainSidebarCtrl', ['$scope', '$routeParams', '$location',
        function ($scope, $routeParams, $location) {
            $scope.vseesLoaded.then(function() {
                if(!$routeParams.index) {
                    $location.path('/see/' + $scope.vsees[0].index);
                }
                $scope.isActive = function (vsee) {
                    return $routeParams.index === vsee.index ? 'active' : '';
                };
            });
        }]);