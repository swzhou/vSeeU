'use strict';

angular.module('vSeeUApp')
    .service('CalculationService', ['$http', function ($http) {
        return {
            calculate: function (calculatorUrl, data) {
                return $http.get(calculatorUrl).then(function (response) {
                    console.log('url: ', calculatorUrl);
                    console.log('data: ', response.data);
                    var calculator = eval('(' + response.data + ')');
                    return calculator(data);
                });
            }
        };
    }]);