import { combineReducers } from 'redux';

const isLoading = (state = false, action) => {
  switch (action.type) {
    case 'FETCH_RATE_REQUEST': {
      return true;
    }
    case 'FETCH_RATE_FAILURE':
    case 'FETCH_RATE_RECEIVE': {
      return false;
    }
    default: {
      return state;
    }
  }
};

export default combineReducers({ isLoading });
