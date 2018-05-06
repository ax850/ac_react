import {inviteConstants} from "../constants/invite.constants";

const initalState = {
  status: {
    sendInvite: false,
    receiveInvite: false,
    cancelInvite: false,
    acceptInvite: false,
    declineinvite: false
  },

  result: {
    invite: null
  },

  error: {}
}

export function invite(state = initalState, action) {
  switch (action.type) {
    case inviteConstants.CREATE_REQUEST:
      return {
        status: {
          sendInvite: true,
          receiveInvite: false,
          cancelInvite: false,
          acceptInvite: false,
          declineInvite: false
        },

        result: state.result,

        error: {}
      };
    case inviteConstants.CREATE_SUCCESS:
      return {
        status: {
          sendInvite: false,
          receiveInvite: false,
          cancelInvite: false,
          acceptInvite: false,
          declineInvite: false
        },

        result: action.invite,

        error: {}
      };
    case inviteConstants.CREATE_ERROR:
      return {
        status: {
          sendInvite: false,
          receiveInvite: false,
          cancelInvite: false,
          acceptInvite: false,
          declineInvite: false
        },

        result: {
          sentInvite: false,
        },

        error: {
          error: action.error
        }
      };
    case inviteConstants.GET_REQUEST:
      return {
        status: {
          sendInvite: false,
          getInvite: true,
          cancelInvite: false,
          acceptInvite: false,
          declineInvite: false
        },

        result: {},

        error: {}
      };
    case inviteConstants.GET_SUCCESS:
      return {
        status: {
          sendInvite: false,
          receiveInvite: true,
          cancelInvite: false,
          acceptInvite: false,
          declineInvite: false
        },

        result: action.invite,

        error: {}
      };
    case inviteConstants.GET_ERROR:
      return {
        status: {
          sendInvite: false,
          receiveInvite: false,
          cancelInvite: false,
          acceptInvite: false,
          declineInvite: false
        },

        result: {},
        error: {
          error: action.error
        }
      };

    case inviteConstants.CANCEL_REQUEST:
      return {
        status: {
          sendInvite: false,
          getInvite: false,
          cancelInvite: true,
          acceptInvite: false,
          declineInvite: false
        },

        result: state.result,

        error: {}
      };
    case inviteConstants.CANCEL_SUCCESS:
      return {
        status: {
          sendInvite: false,
          receiveInvite: false,
          canceledInvite: true,
          acceptInvite: false,
          declineInvite: false
        },

        result: action.invite,

        error: {}
      };
    case inviteConstants.CANCEL_ERROR:
      return {
        status: {
          sendInvite: false,
          receiveInvite: false,
          cancelInvite: false,
          acceptInvite: false,
          declineInvite: false
        },

        result: state.result,
        error: {
          error: action.error
        }
      };

    case inviteConstants.ACCEPT_REQUEST:
      return {
        status: {
          sendInvite: false,
          getInvite: false,
          cancelInvite: false,
          acceptInvite: true,
          declineInvite: false
        },

        result: state.result,

        error: {}
      };
    case inviteConstants.ACCEPT_SUCCESS:
      return {
        status: {
          sendInvite: false,
          receiveInvite: false,
          canceledInvite: false,
          acceptInvite: false,
          declineInvite: false
        },

        result: action.invite,

        error: {}
      };
    case inviteConstants.ACCEPT_ERROR:
      return {
        status: {
          sendInvite: false,
          receiveInvite: false,
          cancelInvite: false,
          acceptInvite: false,
          declineInvite: false
        },

        result: state.result,
        error: {
          error: action.error
        }
      };

    case inviteConstants.DECLINE_REQUEST:
      return {
        status: {
          sendInvite: false,
          getInvite: false,
          cancelInvite: false,
          acceptInvite: false,
          declineInvite: true
        },

        result: state.result,

        error: {}
      };
    case inviteConstants.DECLINE_SUCCESS:
      return {
        status: {
          sendInvite: false,
          receiveInvite: false,
          canceledInvite: false,
          acceptInvite: false,
          declineInvite: false
        },

        result: action.invite,

        error: {}
      };
    case inviteConstants.DECLINE_ERROR:
      return {
        status: {
          sendInvite: false,
          receiveInvite: false,
          cancelInvite: false,
          acceptInvite: false,
          declineInvite: false
        },

        result: state.result,
        error: {
          error: action.error
        }
      };


    default:
      return state
  }
}