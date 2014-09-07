'use strict';

angular.module('vSeeUApp')
    .controller('ChartCtrl', ['$scope', 'CalculationService', 'ChartService', '$routeParams', '$http', 'ChartTypes', 'ResourceService',
        function ($scope, CalculationService, ChartService, $routeParams, $http, ChartTypes, ResourceService) {
            $scope.chartOptions = {};
            $scope.chartTypes = ChartTypes;
            $scope.chartOptions.chartType = ChartTypes[0];
            var currentVsee = _.find($scope.vsees, function (vsee) {
                return $routeParams.index === vsee.index;
            });
            if(!!currentVsee) {
                ResourceService.get(currentVsee.definition).then(function (definitions) {
                    $scope.definitions = definitions;
                });
                ResourceService.get(currentVsee.data).then(function (data) {
                    $scope.data = data;
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