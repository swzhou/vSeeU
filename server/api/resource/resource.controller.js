'use strict';

var config = require('../../config/environment');
var request = require('request');

exports.proxy = function (req, res, next) {
    var uri = req.query.uri;
    request.get(uri, function (error, response, body) {
        if (error) return next(error);
        res.send(body);
    });
};
