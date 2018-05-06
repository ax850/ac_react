import {userConstants} from "../constants/user.constants";

const initialState = {
  status: {
    getProfile: false,
    gotProfile: false,
  },
  result: {
    info: null,
  },
  error: {}
};


export function profile(state = initialState, action) {
  switch (action.type) {
    case userConstants.GETPROFILE_REQUEST:
      return {
        status: {
          getProfile: true,
          gotProfile: false,
        },
        result: {
          info: null,
        },
        error: {}
      };
    case userConstants.GETPROFILE_SUCCESS:
      return {
        status: {
          getProfile: false,
          gotProfile: false,
        },
        result: action.info,
        error: {}
      };
    case userConstants.GETPROFILE_FAILURE:
      return {
        status: {
          getProfile: false,
          gotProfile: false,
          error: true,
        },
        result: {
          info: null,
        },
        error: {
          msg: action.error //Todo: fixme
        }
      };
    default:
      return state
  }
}