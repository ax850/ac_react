import {inviteConstants} from "../constants/invite.constants";
import {inviteServices} from "../services/invite.services";

import {friendActions} from "./friends.actions";
import {alertActions} from "./alert.actions";
import {memoryActions} from "./memory.actions";

export const inviteActions = {
  sendInvite,
  cancelInvite,
  getOwnInvites,
  acceptInvite,
  rejectInvite,
};

function sendInvite(username) {

  return dispatch => {
    dispatch(request());
    inviteServices.sendInvite(username)
        .then(
            invite => {
              dispatch(success(invite));
              dispatch(getOwnInvites())
            },
            error => {
              dispatch(failure(error));
              dispatch(alertActions.error(error.msg, 'INVITE'));
              dispatch(getOwnInvites())
            }
        )
  }

  function request() {
    return {type: inviteConstants.CREATE_REQUEST}
  }

  function success(invite) {
    return {type: inviteConstants.CREATE_SUCCESS, invite}
  }

  function failure(error) {
    return {type: inviteConstants.CREATE_ERROR, error}
  }

}

function getOwnInvites() {
  return dispatch => {
    dispatch(request());
    inviteServices.getOwnInvites()
        .then(
            invite => {
              dispatch(success(invite))
            },
            error => {
              dispatch(failure(error))
            }
        )
  };

  function request() {
    return {type: inviteConstants.GET_REQUEST}
  }

  function success(invite) {
    return {type: inviteConstants.GET_SUCCESS, invite}
  }

  function failure(error) {
    return {type: inviteConstants.GET_ERROR, error}
  }

}

function cancelInvite(username) {
  return dispatch => {
    dispatch(request());
    inviteServices.cancelInvite(username)
        .then(
            invite => {
              dispatch(success(invite));
              dispatch(getOwnInvites())
            },
            error => {
              dispatch(failure(error))
            }
        )
  };

  function request() {
    return {type: inviteConstants.CANCEL_REQUEST}
  }

  function success(invite) {
    return {type: inviteConstants.CANCEL_SUCCESS, invite}
  }

  function failure(error) {
    return {type: inviteConstants.CANCEL_ERROR, error}
  }
}

function acceptInvite(username) {
  return dispatch => {
    dispatch(request());
    inviteServices.acceptInvite(username)
        .then(
            invite => {
              dispatch(success(invite))
              dispatch(getOwnInvites())
              dispatch(friendActions.getFriends())
              dispatch(memoryActions.getMemory())
            },
            error => {
              dispatch(failure(error))
            }
        )
  };

  function request() {
    return {type: inviteConstants.ACCEPT_REQUEST}
  }

  function success(invite) {
    return {type: inviteConstants.ACCEPT_SUCCESS, invite}
  }

  function failure(error) {
    return {type: inviteConstants.ACCEPT_ERROR, error}
  }
}

function rejectInvite(username) {
  return dispatch => {
    dispatch(request());
    inviteServices.rejectInvite(username)
        .then(
            invite => {
              dispatch(success(invite))
              dispatch(getOwnInvites())

            },
            error => {
              dispatch(failure(error))
            }
        )
  };

  function request() {
    return {type: inviteConstants.DECLINE_REQUEST}
  }

  function success(invite) {
    return {type: inviteConstants.DECLINE_SUCCESS, invite}
  }

  function failure(error) {
    return {type: inviteConstants.DECLINE_ERROR, error}
  }
}

