// Initialize
var models = require('./models');
var express = require('express');
var app = express();

// Routes
require('./routes/users')(app, models);
require('./routes/landlords')(app, models);
require('./routes/locations')(app, models);

// Server
app.listen(3000, function () {
  console.log('Up and running on port 3000');
});