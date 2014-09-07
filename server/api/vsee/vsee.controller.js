'use strict';

var _ = require('lodash');
var Vsee = require('./vsee.model');

// Get list of vsees
exports.index = function(req, res) {
  Vsee.find(function (err, vsees) {
    if(err) { return handleError(res, err); }
    return res.json(200, vsees);
  });
};

// Get a single vsee
exports.show = function(req, res) {
  Vsee.findById(req.params.id, function (err, vsee) {
    if(err) { return handleError(res, err); }
    if(!vsee) { return res.send(404); }
    return res.json(vsee);
  });
};

// Creates a new vsee in the DB.
exports.create = function(req, res) {
  Vsee.create(req.body, function(err, vsee) {
    if(err) { return handleError(res, err); }
    return res.json(201, vsee);
  });
};

// Updates an existing vsee in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Vsee.findById(req.params.id, function (err, vsee) {
    if (err) { return handleError(res, err); }
    if(!vsee) { return res.send(404); }
    var updated = _.merge(vsee, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, vsee);
    });
  });
};

// Deletes a vsee from the DB.
exports.destroy = function(req, res) {
  Vsee.findById(req.params.id, function (err, vsee) {
    if(err) { return handleError(res, err); }
    if(!vsee) { return res.send(404); }
    vsee.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}