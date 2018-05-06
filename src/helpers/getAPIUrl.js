import {friendConstants} from "../constants/friends.constants";
import {inviteConstants} from "../constants/invite.constants";
import {memoryConstants} from "../constants/memory.constants";
import {userConstants} from "../constants/user.constants";

export function getAPIUrl(env, type) {
  switch (type){
    case 'Friend':
      return (env === 'development' ? friendConstants.API_LOCAL_URL : friendConstants.API_URL);
    case 'Memory':
      return (env === 'development' ? memoryConstants.API_LOCAL_URL : memoryConstants.API_URL);
    case 'Invite':
      return (env === 'development' ? inviteConstants.API_LOCAL_URL : inviteConstants.API_URL);
    case 'User':
      return (env === 'development' ? userConstants.API_LOCAL_URL : userConstants.API_URL);
    case 'Auth':
      return (env === 'development' ? userConstants.AUTH_LOCAL_URL : userConstants.AUTH_URL);
    default:
      return null
  }
}