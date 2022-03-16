"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userHasAccount = exports.getUserFromMail = exports.registerFromEmail = exports.LogOutUserService = exports.LoginUserService = exports.RegisterUserService = void 0;

var _HttpService = _interopRequireDefault(require("./HttpService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RegisterUserService = function RegisterUserService(credentials) {
  var http = new _HttpService["default"]();
  var signupUrl = "/register";
  return http.postData(credentials, signupUrl).then(function (data) {
    return data;
  })["catch"](function (error) {
    return error;
  });
};

exports.RegisterUserService = RegisterUserService;

var LoginUserService = function LoginUserService(credentials) {
  var http = new _HttpService["default"]();
  var loginUrl = "login";
  return http.postData(credentials, loginUrl).then(function (data) {
    return data;
  })["catch"](function (error) {
    return error;
  });
};

exports.LoginUserService = LoginUserService;

var LogOutUserService = function LogOutUserService() {
  var http = new _HttpService["default"]();
  var loginUrl = "logout";
  var tokenId = "user-token";
  return http.getData(loginUrl, tokenId).then(function (data) {
    return data;
  })["catch"](function (error) {
    return error;
  });
};

exports.LogOutUserService = LogOutUserService;

var registerFromEmail = function registerFromEmail(credentials) {
  var http = new _HttpService["default"]();
  var signupUrl = "/registerFromEmail";
  return http.postData(credentials, signupUrl).then(function (data) {
    return data;
  })["catch"](function (error) {
    return error;
  });
};

exports.registerFromEmail = registerFromEmail;

var createFolder = function createFolder(credentials) {
  var http = new _HttpService["default"]();
  var signupUrl = "/folders";
  return http.postData(credentials, signupUrl).then(function (data) {
    return data;
  })["catch"](function (error) {
    return error;
  });
};

var getProfile = function getProfile(credentials) {
  var http = new _HttpService["default"]();
  var url = "profile";
  return http.getData(credentials, url).then(function (data) {
    return data;
  })["catch"](function (error) {
    return error;
  });
};

var getUserFromMail = function getUserFromMail(mail) {
  var http = new _HttpService["default"]();
  var signupUrl = "/users/getUserFromEmail";
  return http.getData(mail, signupUrl).then(function (data) {
    console.log("AS --- ");
    console.log(data);
    console.log("---");
    return data;
  })["catch"](function (error) {
    return error;
  });
};

exports.getUserFromMail = getUserFromMail;

var userHasAccount = function userHasAccount(credentials) {
  var http = new _HttpService["default"]();
  var signupUrl = "users/userHasAccount";
  return http.postData(credentials, signupUrl).then(function (data) {
    console.log(data);
    return data;
  })["catch"](function (error) {
    if (error == "SyntaxError: JSON.parse: unexpected character at line 1 column 1 of the JSON data") {
      alert("Erreur d'accès à la base de données");
    }

    return error;
  });
};

exports.userHasAccount = userHasAccount;

var updateFolder = function updateFolder(credentials, id) {
  var http = new _HttpService["default"]();
  var signupUrl = "/profile/" + id;
  return http.getData(credentials, signupUrl).then(function (data) {
    return data;
  })["catch"](function (error) {
    return error;
  });
};