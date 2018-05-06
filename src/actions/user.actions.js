import {userConstants} from "../constants/user.constants";
import {userService} from "../services/user.services";
import {history} from "../helpers/history";
import {alertActions} from "./alert.actions";

export const userActions = {
  login,
  logout,
  register,
  getProfile,
  getAllUsers
};

function login(username, password) {
  return dispatch => {
    dispatch(request(username));

    userService.login(username, password)
        .then(
            user => {
              dispatch(success(user));
              history.push('/');
            },
            error => {
              dispatch(failure(error));
              dispatch(alertActions.error(error.msg, 'LOGIN'))
            }
        )
  };

  function request(user) {
    return {type: userConstants.LOGIN_REQUEST, user}
  }

  function success(user) {
    return {type: userConstants.LOGIN_SUCCESS, user}
  }

  function failure(error) {
    return {type: userConstants.LOGIN_FAILURE, error}
  }

}

function logout() {
  userService.logout();
  return {type: userConstants.LOGOUT};
}

function register(user) {
  return dispatch => {
    dispatch(request(user));
    userService.register(user)
        .then(
            user => {
              dispatch(success(user));
              history.push('/login');
              dispatch(alertActions.success(user.msg, 'REGISTER'));
            },
            error => {
              dispatch(failure(error));
            }
        )
  };

  function request(user) {
    return {type: userConstants.REGISTER_REQUEST, user}
  }

  function success(user) {
    return {type: userConstants.REGISTER_SUCCESS, user}
  }

  function failure(error) {
    return {type: userConstants.REGISTER_FAILURE, error}
  }

}

function getProfile() {
  return dispatch => {
    dispatch(request());
    userService.getInfo()
        .then(
            profile => {
              dispatch(success(profile.profile));
            },
            error => {
              dispatch(failure(error));
            }
        )
  };

  function request() {
    return {type: userConstants.GETPROFILE_REQUEST}
  }

  function success(info) {
    return {type: userConstants.GETPROFILE_SUCCESS, info}
  }

  function failure(error) {
    return {type: userConstants.GETPROFILE_FAILURE, error}
  }

}

function getAllUsers() {
  return dispatch => {
    dispatch(request());
    userService.getAll()
        .then(
            users => {
              dispatch(success(users.users))
            },
            error => {
              dispatch(failure(error));
            }
        )
  }

  function request() {
    return {type: userConstants.GET_ALL_REQUEST}
  }

  function success(users) {
    return {type: userConstants.GET_ALL_SUCCESS, users}
  }

  function failure(error) {
    return {type: userConstants.GET_ALL_FAILURE, error}
  }

}