import { combineReducers } from 'redux';
import Cards from './components/ListContainer/reducers';
import Rating from './hoc/RateModalHOC/components/RateModal/Rating/reducers';

const reducers = combineReducers({ Cards, Rating });

export default reducers;
