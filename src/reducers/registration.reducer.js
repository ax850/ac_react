import {userConstants} from "../constants/user.constants";

const initialState = {
  status: {
    registering: false,
    registered: false,
    failure: false,
  },
  result: {}, // No need for this component
  error: {}
};

export function registration(state = initialState, action) {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return {
        status: {
          registering: true,
          registered: false,
          failure: false,
        },
        result: {}, // No need for this component
        error: {}
      };
    case userConstants.REGISTER_SUCCESS:
      return {
        status: {
          registering: false,
          registered: true,
          failure: false,
        },
        result: {}, // No need for this component
        error: {}
      };
    case userConstants.REGISTER_FAILURE:
      return {
        status: {
          registering: false,
          registered: false,
          failure: true,
        },
        result: {}, // No need for this component
        error: {
          msg: action.err
        }
      };
    default:
      return state
  }
}