import { INITIALIZE_DATA } from '../actions/shared';

const pollsReducer = (state = {}, action) => {
  switch (action.type) {
    case INITIALIZE_DATA:
      return {
        ...state,
        ...action.polls,
      };
    default:
      return state;
  }
}

export default pollsReducer;
