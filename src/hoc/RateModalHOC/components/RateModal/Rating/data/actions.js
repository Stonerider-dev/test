import * as api from './api';

const requestRateEdit = ({ id, rate }) => ({
  type: 'FETCH_RATE_REQUEST',
  meta: { id, rate }
});

const receiveRateEdit = () => ({
  type: 'FETCH_RATE_RECEIVE'
});

const failureRateEdit = response => ({
  type: 'FETCH_RATE_FAILURE',
  message: response
});

export const fetchRateEdit = ({ id, rate }) => dispatch => {
  dispatch(requestRateEdit({ id, rate }));
  return api.patchRate({ id, rate }).then(
    () => {
      dispatch(receiveRateEdit());
    },
    res => {
      dispatch(failureRateEdit(res));
      throw res;
    }
  );
};
