'use strict';

angular.module('vSeeUApp')
    .service('CalculationService', ['$http', function ($http) {
        return {
            calculate: function (calculatorUrl, data) {
                return $http.get(calculatorUrl).then(function (response) {
                    var calculator = eval('(' + response.data + ')');
                    return calculator(data);
                });
            }
        };
    }]);
