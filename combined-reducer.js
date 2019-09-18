/* eslint-disable */
import { combineReducers } from 'redux';
import layoutCombinedReducer from './redux/indexReducer.js';

const reducers = [layoutCombinedReducer];
const commonReducer = {};

for (let i = 0; i < reducers.length; ++i) {
  const properties = Object.keys(reducers[i]);
  for (let j = 0; j < properties.length; ++j) {
    commonReducer[properties[j]] = reducers[i][properties[j]];
  }
}

const combineReducer = combineReducers(commonReducer);

export default combineReducer;
