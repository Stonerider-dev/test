import * as api from './api';

const requestCards = () => ({
  type: 'FETCH_CARDS_REQUEST'
});

const receiveCards = response => ({
  type: 'FETCH_CARDS_RECEIVE',
  cards: response
});

const failureCards = response => ({
  type: 'FETCH_CARDS_FAILURE',
  message: response
});

export const fetchCards = () => dispatch => {
  dispatch(requestCards());
  api.getCards().then(
    res => {
      dispatch(receiveCards(res));
    },
    res => {
      dispatch(failureCards(res));
    }
  );
};
