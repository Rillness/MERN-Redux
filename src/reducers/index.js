import { combineReducers } from 'redux';
import testReducer from './test-reducer';
import ClickReducer from './click-reducer';

module.exports = combineReducers({
  testReducer : testReducer,
  clickReducer : ClickReducer
});
