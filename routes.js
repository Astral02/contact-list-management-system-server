var express = require('express');
var app = express();
var contactList = require('./controllers/API/API');
var middlewares = require('./controllers/middlewares/middlewares');
var bodyParser = require('body-parser');

// using body-parser and cookieparser middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Common response headers
app.use(middlewares.commonResponseHeaders);

app.route('/getAllContactList').get(contactList.getContactLists);
app.route('/getContactList/:id').get(contactList.getContactList);
app.route('/createContact').post(contactList.createContact);
app.route('/editContact').put(contactList.editContact);
app.route('/deleteContact/:id').delete(contactList.deleteContactList);
app.route('/login').post(contactList.loginUser);
app.route('/getContactDetails/:id').get(contactList.getContactList);
app.route('/deleteContactDetails/:id').put(contactList.deleteContactDetails);

app.route('*').get(middlewares.error);

module.exports = app;