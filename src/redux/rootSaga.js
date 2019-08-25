import { all, takeLatest } from 'redux-saga/effects';
import { AppTypes } from './AppRedux';
import { startup } from './AppSaga';
import { AuthTypes } from './AuthRedux';
import { storeToken, clearToken } from './AuthSaga';
import { ArticleTypes } from './ArticleRedux';
import { loadArticles } from './ArticleSaga';

/**
 * rootSaga
 */
export default function* root() {
  yield all([
    takeLatest(AppTypes.STARTUP, startup),
    takeLatest(AuthTypes.SET_LOGGED_IN, storeToken),
    takeLatest(AuthTypes.SET_LOGGED_OUT, clearToken),
    takeLatest(ArticleTypes.REQUEST_ARTICLES_LIST, loadArticles)
  ]);
}
