var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/contactlistDB", {
    useMongoClient: true }
  );

var Schema = mongoose.Schema;


var contactListSchema = new Schema({
    UserName:{ type: String, unique: true}  ,
    Password: String,
    FirstName: String,
    LastName: String,
    Gender: String,
    Mobile: Number,
    Address: String,
    Email: String,
    Role: { type: String, default: 'User'}
   });
   
 exports.ContactList = mongoose.model('ContactList', contactListSchema);
  
