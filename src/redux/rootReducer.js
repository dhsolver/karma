import { combineReducers } from 'redux';
import { reducer as app } from './AppRedux';
import { reducer as auth } from './AuthRedux';
import { reducer as articles } from './ArticleRedux';

const reducers = combineReducers({
  app,
  auth,
  articles
});

export default reducers;
