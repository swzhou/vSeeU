'use strict';

angular.module('vSeeUApp')
    .controller('ChartCtrl', ['$scope', 'CalculationService', 'ChartService', '$routeParams', '$http', 'ChartTypes',
        function ($scope, CalculationService, ChartService, $routeParams, $http, ChartTypes) {
            $scope.chartOptions = {};
            $scope.chartTypes = ChartTypes;
            $scope.chartOptions.chartType = ChartTypes[0];
            var currentVsee = _.find($scope.vsees, function (vsee) {
                return $routeParams.index === vsee.index;
            });
            if(!!currentVsee) {
                $http.get(currentVsee.definition).then(function (response) {
                    $scope.definitions = response.data;
                });
                $http.get(currentVsee.data).then(function (response) {
                    $scope.data = response.data;
                    $scope.options = {};
                    var months = moment.monthsShort();
                    $scope.$watch('data', function(data) {
                        CalculationService.calculate(currentVsee.calculator, data).then(function(result) {
                            $scope.chart = ChartService.draw(months, result);
                        });
                    }, true);
                });
            }
        }]);