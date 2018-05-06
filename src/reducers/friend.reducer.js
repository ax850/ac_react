import {friendConstants} from "../constants/friends.constants";

const initialState = {
  status: {
    getFriends: false,
    gotFriends: false,
  },
  result: {
    friends: []
  },
  error: {}
};

export function friends(state = initialState, action) {
  switch (action.type) {
    case friendConstants.GET_FRIENDS_REQUEST:
      return {
        status: {
          getFriends: true,
          gotFriends: false,
        },
        result: state.result,
        error: {}
      }
    case friendConstants.GET_FRIENDS_SUCCESS:
      return {
        status: {
          getFriends: false,
          gotFriends: true,
        },
        result: action.friends,
        error: {}
      }
    case friendConstants.GET_FRIENDS_ERROR:
      return {
        status: {
          getFriends: false,
          gotFriends: false,
        },
        result: {
          friends: null
        },
        error: {
          msg: action.error
        }
      }
    case friendConstants.REMOVE_FRIENDS_REQUEST:
      return {
        status: {
          removingFriends: true,
        },
        result: state.result,
        error: {}
      }
    case friendConstants.REMOVE_FRIENDS_SUCCESS:
      return {
        status: {
          removedFriends: false,
        },
        result: state.result,
        error: {}
      }
    case friendConstants.REMOVE_FRIENDS_ERROR:
      return {
        status: {
          getFriends: false,
          gotFriends: false,
        },
        result: {
          friends: null
        },
        error: {
          msg: action.error
        }
      }
    default:
      return state
  }
}