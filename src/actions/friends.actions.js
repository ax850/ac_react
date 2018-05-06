import {friendConstants} from "../constants/friends.constants";
import {friendService} from "../services/friend.services";
import {memoryActions} from "./memory.actions";

export const friendActions = {
  getFriends,
  removeFriend
};

function getFriends() {
  return dispatch => {
    dispatch(request());
    friendService.getFriends()
        .then(
            friends => {
              dispatch(success(friends))
            },
            error => {
              dispatch(failure(error))
            }
        )
  };

  function request() {
    return {type: friendConstants.GET_FRIENDS_REQUEST}
  }

  function success(friends) {
    return {type: friendConstants.GET_FRIENDS_SUCCESS, friends}
  }

  function failure(error) {
    return {type: friendConstants.GET_FRIENDS_ERROR, error}
  }
}

function removeFriend(username) {
  return dispatch => {
    dispatch(request());
    friendService.removeFriend(username)
        .then(
            friends => {
              dispatch(success(friends));
              dispatch(getFriends());
              dispatch(memoryActions.getMemory());

            },
            error => {
              dispatch(failure(error))
            }
        )
  };

  function request() {
    return {type: friendConstants.REMOVE_FRIENDS_REQUEST}
  }

  function success(friends) {
    return {type: friendConstants.REMOVE_FRIENDS_SUCCESS, friends}
  }

  function failure(error) {
    return {type: friendConstants.REMOVE_FRIENDS_ERROR, error}
  }

}