import { getInitialData } from '../utils/api';
import { setAuthedUser } from './authedUser';
import { showLoading, hideLoading } from 'react-redux-loading';

export const INITIALIZE_DATA = 'INITIALIZE_DATA';

const initalizeDataAction = (polls, users) => ({
  type: INITIALIZE_DATA,
  polls,
  users,
})

const AUTHED_ID = 'tylermcginnis';

export const handleInitialData = () => {
  return (dispatch) => {
    dispatch(showLoading());
    getInitialData().then(({ users, polls }) => {
      dispatch(setAuthedUser(AUTHED_ID));
      dispatch(initalizeDataAction(
        polls,
        users,
      ));
      dispatch(hideLoading());
    });
  }
};
