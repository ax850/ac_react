import {combineReducers} from 'redux';

import {authentication} from "./authentication.reducer";
import {registration} from "./registration.reducer";
import {users} from "./users.reducer";
import {profile} from "./profile.reducer";
import {memory} from "./memory.reducer";
import {alert} from "./alert.reducer";
import {invite} from "./invite.reducer";
import {friends} from "./friend.reducer";

const rootReducer = combineReducers({
  authentication,
  registration,
  alert,
  profile,
  memory,
  users,
  invite,
  friends
});

export default rootReducer;