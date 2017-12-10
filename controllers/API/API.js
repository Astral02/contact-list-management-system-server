var contactList = require('../../models/models').ContactList;
var response = require('../responses/response').structure;
var auth = require('../middlewares/middlewares');

// find all the contacts
exports.getContactLists = function (req, res, next) {
    var result = response;
    contactList.find({}, function (err, data) {
        if (err) return res.status(400).json(result.error);
        result.success.result = data;
        return res.status(200).json(result.success);
    });

}
//find One contact
exports.getContactList = function (req, res, next) {
    var result = response;
    contactList.findOne({ UserName: req.params.id }, function (err, data) {
        if (err) return res.status(400).json(result.error);
        result.success.result = data;
        return res.status(200).json(result.success);
    });
}

//create new contact
exports.createContact = function (req, res, next) {
    var result = response;
    var createData = {
        UserName: req.body.UserName,
        Password: req.body.Password,
        FirstName: req.body.Password,
        LastName: req.body.LastName,
        Gender: req.body.Gender,
        Mobile: req.body.Mobile,
        Address: req.body.Address,
        Email: req.body.Email,
        Role: req.body.Role
    }
    contactList.create(createData, function (err, data) {
        if (err) return res.status(400).json(result.error);
        result.success.result = data;
        return res.status(200).json(result.success);
    });
}

//delete contact details via User
exports.deleteContactDetails = function (req, res, next) {
    var result = response;
    var editData = {};
    editData.Gender = '';
    editData.Mobile = '';
    editData.Address = '';
    editData.Email = '';
    contactList.update({ UserName: req.params.id },
        { $set: editData }
        , function (err, data) {
            if (err) return res.status(400).json(result.error);
            result.success.result = data;
            return res.status(200).json(result.success);
        });
}

//edit contact
exports.editContact = function (req, res, next) {
    var result = response;
    var editData = {};
    if (req.body.UserName) { editData.UserName = req.body.UserName };
    if (req.body.Password) { editData.Password = req.body.Password };
    if (req.body.FirstName) { editData.FirstName = req.body.FirstName };
    if (req.body.LastName) { editData.LastName = req.body.LastName };
    if (req.body.Gender) { editData.Gender = req.body.Gender };
    if (req.body.Mobile) { editData.Mobile = req.body.Mobile };
    if (req.body.Address) { editData.Address = req.body.Address };
    if (req.body.Email) { editData.Email = req.body.Email };
    if (req.body.Role) { editData.Role = req.body.Role };
    contactList.update({ UserName: req.body.UserName }, { $set: editData }, function (err, data) {
        if (err) return res.status(400).json(result.error);
        result.success.result = data;
        return res.status(200).json(result.success);
    });
}

//login
exports.loginUser = function (req, res, next) {
    var result = response;
    contactList.findOne({ UserName: req.body.UserName, Password: req.body.Password }, { UserName: 1, Password: 1, Role: 1 },
        function (err, data) {
            if (err) return res.status(400).json(result.error);
            result.success.result = data;
            return res.status(200).json(result.success);
        });
}

//delete contact via admin
exports.deleteContactList = function (req, res, next) {
    var result = response;
    contactList.remove({ UserName: req.params.id }, function (err, data) {
        if (err) return res.status(400).json(result.error);
        result.success.result = data;
        return res.status(200).json(result.success);
    });
}