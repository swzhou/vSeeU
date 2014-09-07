'use strict';

angular.module('vSeeUApp')
    .controller('VseesCtrl', ['$scope', '$http', 'socket', function ($scope, $http, socket) {
        $scope.vsees = [];
        $scope.newVsee = {};

        $http.get('/api/vsees').success(function (vsees) {
            $scope.vsees = vsees;
            socket.syncUpdates('vsee', $scope.vsees);
        });

        $scope.save = function (vsee) {
            $http.put('/api/vsees/' + vsee._id, vsee);
        };

        $scope.remove = function (vsee) {
            $http.delete('/api/vsees/' + vsee._id);
        };

        $scope.add = function() {
            if (_.isEmpty($scope.newVsee)) {
                return;
            }
            $http.post('/api/vsees', $scope.newVsee).then(function() {
                $scope.newVsee = {};
            });
        };

        $scope.$on('$destroy', function () {
            socket.unsyncUpdates('vsee');
        });
    }]);
