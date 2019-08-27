import { put } from 'redux-saga/effects';
import GameActions from './GameRedux';
import logger from '@utils/logger';
import API from '@utils/api';

export function* loadGames() {
  yield put(GameActions.setGamesLoading(true));
  try {
    const articles = yield API.getGames();
    yield put(GameActions.setGames(articles));
  } catch (err) {
    logger.log('loadGames', err);
  }
  yield put(GameActions.setGamesLoading(false));
}
