import { combineReducers } from 'redux';

import polls from './polls';
import users from './users';
import loading from './loading';
import authedUser from './authedUser';

export default combineReducers({
  authedUser,
  loading,
  polls,
  users,
});
