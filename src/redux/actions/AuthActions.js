import * as ActionTypes from "../ActionTypes";
import {
  RegisterUserService,
  LoginUserService,
  LogOutUserService,
} from "../../services/AuthServices";

export const RegisterAction = (credentials, router) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.RESTART_AUTH_RESPONSE });
    dispatch({ type: ActionTypes.LOADING });
    RegisterUserService(credentials).then(
      (res) => {
        if (res.hasOwnProperty("success") && res.success === true) {
          dispatch({ type: ActionTypes.SIGNUP_SUCCESS, res });
          router.push("/signin");
        } else if (res.hasOwnProperty("success") && res.success === false) {
          dispatch({ type: ActionTypes.SIGNUP_ERROR, res });
        }
      },
      (error) => {
        dispatch({ type: ActionTypes.CODE_ERROR, error });
      }
    );
  };
};

export const LoginAction = (credentials, router) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.RESTART_AUTH_RESPONSE });
    dispatch({ type: ActionTypes.LOADING });
    LoginUserService(credentials).then(
      (res) => {
        if (res.hasOwnProperty("success") && res.success === true) {
          console.log("token " + res.data.token)
          localStorage.setItem("user-token", res.data.token);
          console.log("token " + localStorage.getItem("user-token"))
          dispatch({ type: ActionTypes.LOGIN_SUCCESS });
          router.push("/");
        } else if (res.hasOwnProperty("success") && res.success === false) {
          dispatch({ type: ActionTypes.LOGIN_ERROR, res });
        }
      },
      (error) => {
        dispatch({ type: ActionTypes.CODE_ERROR, error });
      }
    );
  };
};

export const LogoutAction = () => {
  console.log("LOGOUT")
  return (dispatch) => {
    dispatch({ type: ActionTypes.RESTART_AUTH_RESPONSE });
    LogOutUserService().then(
      (res) => {
        if (res.hasOwnProperty("success") && res.success === true) {
          dispatch({ type: ActionTypes.LOGOUT_SUCCESS, res });
        } else if (res.hasOwnProperty("success") && res.success === false) {
          dispatch({ type: ActionTypes.LOGOUT_SUCCESS, res });
        }
      },
      (error) => {
        dispatch({ type: ActionTypes.CODE_ERROR, error });
      }
    );
  };
};
