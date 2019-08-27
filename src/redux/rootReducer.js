import { combineReducers } from 'redux';
import { reducer as app } from './AppRedux';
import { reducer as auth } from './AuthRedux';
import { reducer as articles } from './ArticleRedux';
import { reducer as games } from './GameRedux';

const reducers = combineReducers({
  app,
  auth,
  articles,
  games
});

export default reducers;
