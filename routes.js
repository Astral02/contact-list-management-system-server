//import { ContactList } from './models/models';

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

// Authentication Middleware
//app.use(middlewares.auth);

// NOTE: Following are just sample API not to be used for Production (Some insecure code exists)
// Some APIs have not been used and are partial just for the api. 
// You can delete or make it usable to working on improvement area of the APIs

app.route('/getAllContactList').get(contactList.getContactLists);
app.route('/getContactList/:id').get(contactList.getContactList);
app.route('/createContact').post(contactList.createContact);
app.route('/editContact').put(contactList.editContact);
app.route('/deleteContact/:id').delete(contactList.deleteContactList);
//login
app.route('/login').post(contactList.loginUser);
app.route('/getContactDetails/:id').get(contactList.getContactList);
app.route('/deleteContactDetails/:id').put(contactList.deleteContactDetails);

//app.route('/deleteDetails/:id').put(ContactList.deleteDetails);
// // Authentication REST APIs 
// app.route('/shop/register').post(users.registerUser);
// app.route('/shop/login').post(users.loginUser);
// app.route('/shop/logout').post(users.loginOutUser);
// app.route('/admin/login').post(users.loginAdmin);
// app.route('/admin/logout').post(users.loginOutAdmin);

// // SHOP Products section REST APIs
// app.route('/shop/products').get(products.getProducts);
// app.route('/admin/products').post(products.createProduct);
// app.route('/shop/product/:id').get(products.getproduct);
// app.route('/admin/product/:id').put(products.editProduct);
// app.route('/admin/product/:id').delete(products.deleteProduct);

// // SHOP Cart section REST APIs
// app.route('/shop/cart/items').get(cart.getItems);
// app.route('/shop/cart/items').post(cart.editItem);
// app.route('/shop/cart/items/:id').delete(cart.deleteItem);

// // SHOP Orders section REST APIs
// app.route('/admin/orders').get(orders.getOrders);
// app.route('/shop/orders').post(orders.createOrder);
// app.route('/admin/order/:id').get(orders.getOrder);
// app.route('/admin/order/:id').put(orders.editOrder);
// app.route('/admin/order/:id').delete(orders.deleteOrder);

// // ADMIN Users section REST APIs
// app.route('/admin/users').get(users.getUsers);
// app.route('/admin/users').post(users.createUser);
// app.route('/admin/user/:id').get(users.getUser);
// app.route('/admin/user/:id').put(users.editUser);
// app.route('/admin/user/:id').delete(users.deleteUser);

app.route('*').get(middlewares.error);

module.exports = app;