function buildTime(builds) {
    var pipelines = _.groupBy(builds, function (build) {
        return  build.pipeline;
    });
    var labels = _.keys(pipelines);
    var data = _.map(pipelines, function (pipeline) {
        var pipelineInfo = _.map(moment.monthsShort(), function () {
            return {
                totalBuildTime: 0,
                totalNumber: 0
            };
        });
        _.each(pipeline, function (build) {
            var monthIndex = moment(build.time).month();
            if (build.status === 'pass') {
                pipelineInfo[monthIndex].totalNumber += 1;
                pipelineInfo[monthIndex].totalBuildTime += build.duration;
            }
        });
        return _.map(pipelineInfo, function (info) {
            return info.totalNumber === 0 ? 0 : info.totalBuildTime / info.totalNumber;
        });
    });
    return {
        labels: labels,
        data: data
    };
}