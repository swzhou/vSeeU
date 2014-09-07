'use strict';

angular.module('vSeeUApp')
    .controller('VseesCtrl', ['$scope', '$http', 'socket', 'User',
        function ($scope, $http, socket, User) {
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

            $scope.add = function () {
                if (_.isEmpty($scope.newVsee)) {
                    return;
                }
                User.get().$promise.then(function (currentUser) {
                    var newVsee = _.extend($scope.newVsee, {owner: currentUser._id});
                    $http.post('/api/vsees', newVsee).then(function () {
                        $scope.newVsee = {};
                    });
                });
            };

            $scope.$on('$destroy', function () {
                socket.unsyncUpdates('vsee');
            });
        }]);
