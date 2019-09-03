import { put } from 'redux-saga/effects';
import ArticleActions from './ArticleRedux';
import logger from '@utils/logger';
import API from '@utils/api';

export function* loadArticles() {
  yield put(ArticleActions.setArticlesLoading(true));
  try {
    const articles = yield API.getArticles();
    yield put(ArticleActions.setArticles(articles));
  } catch (err) {
    logger.log('loadArticles', err);
  }
  yield put(ArticleActions.setArticlesLoading(false));
}

export function* loadArticleHeadlines() {
  yield put(ArticleActions.setArticleHeadlinesLoading(true));
  try {
    const articleHeadlines = yield API.getArticleHeadlines();
    yield put(ArticleActions.setArticleHeadlines(articleHeadlines));
  } catch (err) {
    logger.log('loadArticleHeadlines', err);
  }
  yield put(ArticleActions.setArticleHeadlinesLoading(false));
}
