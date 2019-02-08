import { INITIALIZE_DATA } from '../actions/shared';

const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case INITIALIZE_DATA:
      return {
        ...state,
        ...action.users,
      };
    default:
      return state;
  }
}

export default usersReducer;
