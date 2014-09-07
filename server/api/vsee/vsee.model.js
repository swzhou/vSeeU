'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var VseeSchema = new Schema({
    index: String,
    name: String,
    data: String,
    definition: String,
    calculator: String,
    owner: Schema.ObjectId
});

module.exports = mongoose.model('Vsee', VseeSchema);