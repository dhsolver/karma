import { all, takeLatest } from 'redux-saga/effects';
import { AppTypes } from './AppRedux';
import { startup, addBets } from './AppSaga';
import { AuthTypes } from './AuthRedux';
import { storeToken, clearToken } from './AuthSaga';
import { ArticleTypes } from './ArticleRedux';
import { loadArticles } from './ArticleSaga';
import { GameTypes } from './GameRedux';
import { loadGames } from './GameSaga';

/**
 * rootSaga
 */
export default function* root() {
  yield all([
    takeLatest(AppTypes.STARTUP, startup),
    takeLatest(AuthTypes.SET_LOGGED_IN, storeToken),
    takeLatest(AuthTypes.SET_LOGGED_OUT, clearToken),
    takeLatest(AppTypes.ADD_SINGLE_BET, addBets),
    takeLatest(AppTypes.ADD_PROP_BET, addBets),
    takeLatest(AppTypes.ADD_PARLAY_BET, addBets),
    takeLatest(ArticleTypes.REQUEST_ARTICLES_LIST, loadArticles),
    takeLatest(GameTypes.REQUEST_GAMES_LIST, loadGames)
  ]);
}
