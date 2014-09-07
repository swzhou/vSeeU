'use strict';

angular.module('vSeeUApp')
    .service('ChartService', ['color', function (color) {
        return {
            draw: function (labels, result) {
                var dataLabels = result.labels;
                var data = result.data;
                var datasets = _.map(data, function (datum, index) {
                    var colorIndex = index % color.length;
                    return {
                        label: dataLabels[index],
                        fillColor: color[colorIndex].fillColor,
                        strokeColor: color[colorIndex].strokeColor,
                        pointColor: color[colorIndex].pointColor,
                        pointStrokeColor: color[colorIndex].pointStrokeColor,
                        pointHighlightFill: color[colorIndex].pointHighlightFill,
                        data: datum
                    };
                });
                return {
                    labels: labels,
                    datasets: datasets
                };
            }
        };
    }]);
