import { combineReducers } from 'redux';
import { reducer as app } from './AppRedux';
import { reducer as auth } from './AuthRedux';

const reducers = combineReducers({
  app,
  auth
});

export default reducers;
