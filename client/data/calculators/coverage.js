function calculate(coverage) {
    var projects = _.groupBy(coverage, function (cov) {
        return  cov.project;
    });
    var labels = _.keys(projects);
    var data = _.map(projects, function (project) {
        var coverageInfo = _.map(moment.monthsShort(), function () {
            return {
                day: -1,
                coverageNumber: 0
            };
        });
        _.each(project, function (datum) {
            var date = moment(datum.time);
            var monthIndex = date.month();
            var dayIndex = date.date();
            if(coverageInfo[monthIndex].day < dayIndex) {
                coverageInfo[monthIndex].day = dayIndex;
                coverageInfo[monthIndex].coverageNumber = datum.coverage;
            }
        });
        return _.map(coverageInfo, function (info, index) {
            if(info.day === -1 && index > 0 && index <= moment().month()) {
                info.coverageNumber = coverageInfo[index - 1].coverageNumber;
            }
            return info.coverageNumber;
        });
    });
    return {
        labels: labels,
        data: data
    };
}