import { getInitialData } from '../utils/api';

export const INITIALIZE_DATA = 'INITIALIZE_DATA';

const initalizeDataAction = (polls, users) => ({
  type: INITIALIZE_DATA,
  polls,
  users,
})

export const handleInitialData = () => {
  return (dispatch) => {
    getInitialData().then(([polls, users]) => {
      dispatch(initalizeDataAction(
        polls,
        users,
      ));
    });
  }
};
