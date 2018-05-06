import {userConstants} from "../constants/user.constants";

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ?
    /* If User already logged in */
    {
      status: {loggedIn: true, loggingIn: false},
      result: {user}
    } :
    /* If No User is logged in */
    {
      status: {
        loggedIn: false,
        loggingIn: false,
      },
      result: {
        user: null // toDO: fixme
      },
      error: {}
    };

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        status: {
          loggingIn: true,
          loggedIn: false,
        },
        result: {
          user: action.user
        },
        error: {}
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        status: {
          loggedIn: true,
          loggingIn: false,
        },
        result: {
          user: action.user
        },
        error: {}
      };
    case userConstants.LOGIN_FAILURE:
      return {
        status: {
          loggedIn: false,
          loggingIn: false,
          error: true
        },
        result: {
          user: action.error // toDO: fixme
        },
        error: {}
      };
    case userConstants.LOGOUT:
      return {
        status: {
          loggedIn: false,
          loggingIn: false,
        },
        result: {
          user: action.error // toDO: fixme
        },
        error: {}
      };
    default:
      return state
  }
}