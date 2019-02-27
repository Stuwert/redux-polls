import { INITIALIZE_DATA } from '../actions/shared';
import { ADD_POLL } from '../actions/polls';

const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case INITIALIZE_DATA:
      return {
        ...state,
        ...action.users,
      };
    case ADD_POLL:
      const poll = action.poll;
      const { author, id } = poll;

      return {
        ...state,
        [author]: {
          ...state[author],
          polls: state[author].polls.concat([id])
        }
      }
    default:
      return state;
  }
}

export default usersReducer;
