import { combineReducers } from 'redux';

const items = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_CARDS_RECEIVE': {
      return [...action.cards];
    }
    default: {
      return state;
    }
  }
};

const isLoading = (state = false, action) => {
  switch (action.type) {
    case 'FETCH_CARDS_REQUEST': {
      return true;
    }
    case 'FETCH_CARDS_FAILURE':
    case 'FETCH_CARDS_RECEIVE': {
      return false;
    }
    default: {
      return state;
    }
  }
};

export default combineReducers({ items, isLoading });
