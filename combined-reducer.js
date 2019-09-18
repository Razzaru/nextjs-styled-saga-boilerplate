import layoutCombinedReducer from './redux/indexReducer.js'
import { combineReducers } from 'redux'

let reducers = [layoutCombinedReducer];
let commonReducer = {};

for(let i = 0; i < reducers.length; ++i) {
    let properties = Object.keys(reducers[i]);
    for(let j = 0; j < properties.length; ++j) {
        commonReducer[properties[j]] = reducers[i][properties[j]];
    }
}

const combineReducer = combineReducers(commonReducer);

export default combineReducer;