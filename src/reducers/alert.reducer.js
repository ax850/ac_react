import {alertConstants} from "../constants/alert.constants";

const initialState = {
  status: {
    success: false,
    failure: false
  },
  type: null,
  result: {
    msg: null
  },
  error: {}

};

export function alert(state = initialState, action) {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        status: {
          success: true,
          failure: false
        },
        result: {
          msg: action.message
        },
        error: {}
      };
    case  alertConstants.ERROR:
      return {
        status: {
          success: false,
          failure: true
        },
        result: {
          msg: action.message
        },
        error: {}
      };

    case alertConstants.MEMORY_SUCCESS:
      return {
        status: {
          success: true,
          failure: false
        },
        type: 'MEMORY',
        result: {
          msg: action.message
        },
        error: {}
      };
    case  alertConstants.MEMORY_ERROR:
      return {
        status: {
          success: false,
          failure: true
        },
        type: 'MEMORY',
        result: {
          msg: action.message
        },
        error: {}
      };

    case alertConstants.USER_SUCCESS:
      return {
        status: {
          success: true,
          failure: false
        },
        type: 'USER',
        result: {
          msg: action.message
        },
        error: {}
      };
    case  alertConstants.USER_ERROR:
      return {
        status: {
          success: false,
          failure: true
        },
        type: 'USER',
        result: {
          msg: action.message
        },
        error: {}
      };
    case alertConstants.LOGIN_SUCCESS:
      return {
        status: {
          success: true,
          failure: false
        },
        type: 'LOGIN',
        result: {
          msg: action.message
        },
        error: {}
      };
    case  alertConstants.LOGIN_ERROR:
      return {
        status: {
          success: false,
          failure: true
        },
        type: 'LOGIN',
        result: {
          msg: action.message
        },
        error: {}
      };
    case alertConstants.REGISTER_SUCCESS:
      return {
        status: {
          success: true,
          failure: false
        },
        type: 'REGISTER',
        result: {
          msg: action.message
        },
        error: {}
      };
    case  alertConstants.REGISTER_ERROR:
      return {
        status: {
          success: false,
          failure: true
        },
        type: 'REGISTER',
        result: {
          msg: action.message
        },
        error: {}
      };
    case alertConstants.INVITE_SUCCESS:
      return {
        status: {
          success: true,
          failure: false
        },
        type: 'INVITE',
        result: {
          msg: action.message
        },
        error: {}
      };
    case  alertConstants.INVITE_ERROR:
      return {
        status: {
          success: false,
          failure: true
        },
        type: 'INVITE',
        result: {
          msg: action.message
        },
        error: {}
      };
    case  alertConstants.CLEAR:
      return initialState;  // Back to initial State
    default:
      return state
  }

}