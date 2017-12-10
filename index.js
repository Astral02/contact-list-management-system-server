var express = require('express');
var app = express();
var config = require('./config/config').config;
var routes = require('./routes');

app.use('/', routes);

app.listen(config.port, config.host, function () {
    console.log('Server started at ' + config.host + ':' + config.port);
});




