'use strict';

angular.module('vSeeUApp')
    .controller('VseesCtrl', ['$scope', '$http', 'socket', 'User', '$alert',
        function ($scope, $http, socket, User, $alert) {
            $scope.vsees = [];
            $scope.newVsee = {};

            $http.get('/api/vsees').success(function (vsees) {
                $scope.vsees = vsees;
                socket.syncUpdates('vsee', $scope.vsees);
            });

            $scope.save = function (vsee) {
                $http.put('/api/vsees/' + vsee._id, vsee).then(function() {
                    $alert({title: 'VSee updated.', animation: 'am-fade-and-slide-top', duration: 5, type: 'info'});
                });
            };

            $scope.remove = function (vsee) {
                $http.delete('/api/vsees/' + vsee._id).then(function() {
                    $alert({title: 'VSee deleted.', animation: 'am-fade-and-slide-top', duration: 5, type: 'danger'});
                });
            };

            $scope.add = function () {
                if (_.isEmpty($scope.newVsee)) {
                    return;
                }
                User.get().$promise.then(function (currentUser) {
                    var newVsee = _.extend($scope.newVsee, {owner: currentUser._id});
                    $http.post('/api/vsees', newVsee).then(function () {
                        $scope.newVsee = {};
                        $alert({title: 'VSee created.', animation: 'am-fade-and-slide-top', duration: 5, type: 'success'});
                    });
                });
            };

            $scope.$on('$destroy', function () {
                socket.unsyncUpdates('vsee');
            });
        }]);
