'use strict';

angular.module('vSeeUApp')
    .controller('MainSidebarCtrl', ['$scope', '$routeParams', '$location',
        function ($scope, $routeParams) {
            $scope.isActive = function (vsee) {
                return $routeParams.index === vsee.index ? 'active' : '';
            };
        }]);