import {userConstants} from "../constants/user.constants";

const initialState = {
  status: {
    getUsers: false,
    gotUsers: false,
  },
  result: {
    users: null
  },
  error: {}
};

export function users(state = initialState, action) {
  switch (action.type) {
    case userConstants.GET_ALL_REQUEST:
      return {
        status: {
          getUsers: true,
          gotUsers: false
        },
        result: {
          users: null
        },
        error: {}
      };
    case userConstants.GET_ALL_SUCCESS:
      return {
        status: {
          getUsers: false,
          gotUsers: true
        },
        result: {
          users: action.users
        },
        error: {}
      };

    case userConstants.GET_ALL_FAILURE:
      return {
        status: {
          getUsers: false,
          gotUsers: false
        },
        result: {
          users: null
        },
        error: {
          msg: action.error
        }
      };
    default:
      return state
  }
}