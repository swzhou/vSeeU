'use strict';

var express = require('express');
var controller = require('./resource.controller');

var router = express.Router();

router.get('/', controller.proxy);

module.exports = router;
