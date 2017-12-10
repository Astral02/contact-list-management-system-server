var contactList = require('../../models/models').ContactList;
var response = require('../responses/response').structure;
var auth = require('../middlewares/middlewares');

// get all the users
exports.getContactLists = function (req, res, next) {
    var result = response;
    contactList.find({}, function (err, data) {
        if (err) return res.status(400).json(result.error);
        result.success.result = data;
        return res.status(200).json(result.success);
    });

}

exports.getContactList = function (req, res, next) {
    var result = response;
    contactList.findOne({ UserName: req.params.id }, function (err, data) {
        if (err) return res.status(400).json(result.error);
        result.success.result = data;
        return res.status(200).json(result.success);
    });
}


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
exports.deleteContactDetails = function (req, res, next) {
    var result = response;
    // var recordToBeUpdated;
    // contactList.findOne({ UserName: req.params.id }, function (err, data) {
    //     if (err) return res.status(400).json(result.error);
    //     recordToBeUpdated = data;
    // });
    // // return res.status(200).json(recordToBeUpdated);

    var editData = {};
    // editData.UserName = req.body.UserName;
    // editData.Password = req.body.Password;
    // editData.FirstName = req.body.FirstName;
    // editData.LastName = req.body.LastName;
    editData.Gender = '';
    editData.Mobile = '';
    editData.Address = '';
    editData.Email = '';
    //editData.Role = req.body.Role;

    //req.params.id { $set: editData }
    contactList.update({ UserName: req.params.id },
        { $set: editData }
        , function (err, data) {
            if (err) return res.status(400).json(result.error);
            result.success.result = data;
            return res.status(200).json(result.success);
        });
}

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
    //req.params.id
    contactList.update({ UserName: req.body.UserName }, { $set: editData }, function (err, data) {
        if (err) return res.status(400).json(result.error);
        result.success.result = data;
        return res.status(200).json(result.success);
    });
}

exports.loginUser = function (req, res, next) {
    var result = response;
    contactList.findOne({ UserName: req.body.UserName, Password: req.body.Password }, { UserName: 1, Password: 1, Role: 1 },
        function (err, data) {

            // var resData = {
            //     UserName: data[0].UserName,
            //     Password: data[0].Password,
            //     UserType: data[0].Role
            // }
            if (err) return res.status(400).json(result.error);
            result.success.result = data;
            return res.status(200).json(result.success);
        });
}

exports.deleteContactList = function (req, res, next) {
    var result = response;
    contactList.remove({ UserName: req.params.id }, function (err, data) {
        if (err) return res.status(400).json(result.error);
        result.success.result = data;
        return res.status(200).json(result.success);
    });
}