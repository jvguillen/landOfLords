'use strict';

const models = require('../models');
const fs = require('fs');
var listing;

fs.readFile(__dirname + '/raw/data.json', 'utf8', function (err, data) {
  if (err) throw err;
  listing = JSON.parse(data);
  //TODO: figure out how to insert stuff and use setters
});