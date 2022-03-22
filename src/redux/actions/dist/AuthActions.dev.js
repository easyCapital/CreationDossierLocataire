"use strict";

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === "function" &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? "symbol"
        : typeof obj;
    };
  }
  return _typeof(obj);
}

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.LogoutAction = exports.LoginAction = exports.RegisterAction = void 0;

var ActionTypes = _interopRequireWildcard(require("../ActionTypes"));

var _AuthServices = require("../../services/AuthServices");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };
  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (
    obj === null ||
    (_typeof(obj) !== "object" && typeof obj !== "function")
  ) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj["default"] = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

var RegisterAction = function RegisterAction(credentials, router) {
  return function (dispatch) {
    dispatch({
      type: ActionTypes.RESTART_AUTH_RESPONSE,
    });
    dispatch({
      type: ActionTypes.LOADING,
    });
    (0, _AuthServices.RegisterUserService)(credentials).then(
      function (res) {
        if (res.hasOwnProperty("success") && res.success === true) {
          dispatch({
            type: ActionTypes.SIGNUP_SUCCESS,
            res: res,
          });
          router.push("/signin");
        } else if (res.hasOwnProperty("success") && res.success === false) {
          dispatch({
            type: ActionTypes.SIGNUP_ERROR,
            res: res,
          });
        }
      },
      function (error) {
        dispatch({
          type: ActionTypes.CODE_ERROR,
          error: error,
        });
      }
    );
  };
};

exports.RegisterAction = RegisterAction;

var LoginAction = function LoginAction(credentials, router) {
  return function (dispatch) {
    dispatch({
      type: ActionTypes.RESTART_AUTH_RESPONSE,
    });
    dispatch({
      type: ActionTypes.LOADING,
    });
    (0, _AuthServices.LoginUserService)(credentials).then(
      function (res) {
        if (res.hasOwnProperty("success") && res.success === true) {
          localStorage.setItem("user-token", res.data.token);
          dispatch({
            type: ActionTypes.LOGIN_SUCCESS,
          });
          router.push("/");
        } else if (res.hasOwnProperty("success") && res.success === false) {
          dispatch({
            type: ActionTypes.LOGIN_ERROR,
            res: res,
          });
        }
      },
      function (error) {
        dispatch({
          type: ActionTypes.CODE_ERROR,
          error: error,
        });
      }
    );
  };
};

exports.LoginAction = LoginAction;

var LogoutAction = function LogoutAction() {
  console.log("LOGOUT");
  return function (dispatch) {
    dispatch({
      type: ActionTypes.RESTART_AUTH_RESPONSE,
    });
    (0, _AuthServices.LogOutUserService)().then(
      function (res) {
        if (res.hasOwnProperty("success") && res.success === true) {
          dispatch({
            type: ActionTypes.LOGOUT_SUCCESS,
            res: res,
          });
        } else if (res.hasOwnProperty("success") && res.success === false) {
          dispatch({
            type: ActionTypes.LOGOUT_SUCCESS,
            res: res,
          });
        }
      },
      function (error) {
        dispatch({
          type: ActionTypes.CODE_ERROR,
          error: error,
        });
      }
    );
  };
};

exports.LogoutAction = LogoutAction;
