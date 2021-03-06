import { savePoll } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';

export const ADD_POLL = 'ADD_POLL';

const addPoll = (poll) => ({
  type: ADD_POLL,
  poll,
})

export function handleAddPoll(poll) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());
    return savePoll({
      ...poll,
      author: authedUser
    }).then((poll) => {
      dispatch(addPoll(poll));
      dispatch(hideLoading())
    });
  }
}
