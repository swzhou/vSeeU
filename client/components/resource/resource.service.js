'use strict';

angular.module('vSeeUApp')
    .service('ResourceService', ['$http', function ($http) {
        return {
            get: function (uri) {
                return $http.get('/api/resource?uri=' + uri).then(function(response) {
                    return response.data;
                });
            }
        };
    }]);
