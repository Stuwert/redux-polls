import { combineReducers } from 'redux';

import polls from './polls';
import users from './users';
import { loadingBarReducer } from 'react-redux-loading';
import authedUser from './authedUser';

export default combineReducers({
  authedUser,
  loadingBar: loadingBarReducer,
  polls,
  users,
});
