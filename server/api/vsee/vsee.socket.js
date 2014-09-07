/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Vsee = require('./vsee.model');

exports.register = function(socket) {
  Vsee.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Vsee.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('vsee:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('vsee:remove', doc);
}