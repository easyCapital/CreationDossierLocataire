"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadProfile = void 0;

var _HttpService = _interopRequireDefault(require("./HttpService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var LoadProfile = function LoadProfile() {
  var http = new _HttpService["default"]();
  var profileUrl = "profile";
  var tokenId = "user-token";
  return http.getData(profileUrl).then(function (data) {
    // console.log(data);
    return data;
  })["catch"](function (error) {
    // console.log(error);
    return error;
  });
};

exports.LoadProfile = LoadProfile;