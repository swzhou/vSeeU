'use strict';

angular.module('vSeeUApp')
    .controller('MainCtrl', function ($scope, $http, socket) {
        $scope.vsees = [];

        $http.get('/api/vsees').success(function (vsees) {
            $scope.vsees = vsees;
            socket.syncUpdates('vsee', $scope.vsees);
        });

        $scope.addVsee = function () {
            if ($scope.vsee === '') {
                return;
            }
            $http.post('/api/vsees', { name: $scope.vsee});
            $scope.vsee = '';
        };

        $scope.deleteVsee = function (vsee) {
            $http.delete('/api/vsees/' + vsee._id);
        };

        $scope.$on('$destroy', function () {
            socket.unsyncUpdates('vsee');
        });
    });
