import { INITIALIZE_DATA } from '../actions/shared';
import { ADD_POLL } from '../actions/polls';

const pollsReducer = (state = {}, action) => {
  switch (action.type) {
    case INITIALIZE_DATA:
      return {
        ...state,
        ...action.polls,
      };
    case ADD_POLL:
      return {
        ...state,
        [action.poll.id]: action.poll,
      }
    default:
      return state;
  }
}

export default pollsReducer;
