'use strict';

angular.module('vSeeUApp')
    .service('CalculationService', ['ResourceService', function (ResourceService) {
        return {
            calculate: function (calculatorUrl, data) {
                return ResourceService.get(calculatorUrl).then(function (func) {
                    var calculator = eval('(' + func + ')');
                    return calculator(data);
                });
            }
        };
    }]);