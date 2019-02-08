import { INITIALIZE_DATA } from '../actions/shared';

const loadingReducer = (state = true, action) => {
  switch (action.type) {
    case INITIALIZE_DATA:
      return false;
    default:
      return state;
  }
}

export default loadingReducer;
