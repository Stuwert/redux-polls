import { getInitialData } from '../utils/api';
import { setAuthedUser } from './authedUser';

export const INITIALIZE_DATA = 'INITIALIZE_DATA';

const initalizeDataAction = (polls, users) => ({
  type: INITIALIZE_DATA,
  polls,
  users,
})

const AUTHED_ID = 'tylermcginnis';

export const handleInitialData = () => {
  return (dispatch) => {
    getInitialData().then(({ users, polls }) => {
      dispatch(initalizeDataAction(
        polls,
        users,
      ));
      dispatch(setAuthedUser(AUTHED_ID));
    });
  }
};
