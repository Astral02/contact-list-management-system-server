var express = require('express');
var app = express();
var config = require('./config/config').config;
var routes = require('./routes');

app.use('/', routes);

app.listen(config.port, config.host, function () {
    console.log('Server started at ' + config.host + ':' + config.port);
});

// //Import the mongoose module
// var mongoose = require('mongoose');
// var contactListModel = require('./contact-list.module');
// var express = require('express');
// var http = require('http').Server(express);

// var bodyParser = require('body-parser');

// //Set up default mongoose connection
// var mongoDB = 'mongodb://127.0.0.1/contactlistDB';
// mongoose.connect(mongoDB, {
//     useMongoClient: true
// });
// // Get Mongoose to use the global promise library
// mongoose.Promise = global.Promise;
// //Get the default connection
// var db = mongoose.connection;

// db.on('error', function (err) {
//     console.log('connection error', err);
// });
// db.once('open', function () {
//     console.log('connected.');
// });

// // get all the users
// contactListModel.find({}, function (err, users) {
//     if (err) throw err;
//     // object of all the users
//     console.log(users);
// });

// // get the user starlord55
// contactListModel.find({ username: 'Admin' }, function (err, user) {
//     if (err) throw err;

//     // object of the user
//     console.log(user);
// });


// // Create our Express application
// var app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // // Use environment defined port or 3000
// // var port = process.env.PORT || 3000;

// // Create our Express router
// var router = express.Router();

// // Use environment defined port or 3000
// var port = 3000;

// // http://localhost:3000/api GET
// router.get('/', function (req, res) {
//     console.log("GET /api/ ");

//     //console.dir(req.body);
//     //console.dir(req.params);
//     console.dir(req.query); // when using GET and key/value is attached to the url

//     res.json({ message: 'You are running dangerously low on beer!' });
// });

// // http://localhost:3000/api POST
// router.post('/', function (req, res) {
//     console.log("POST /api/ ");

//     console.dir(req.body); //make sure you use x-www-form-urlencoded
//     //console.dir(req.params);
//     //console.dir(req.query); 

//     res.json({ message: 'You are running dangerously low on beer!' });
// });



