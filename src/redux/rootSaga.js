import { all, fork } from 'redux-saga/effects';
import app from './AppSaga';
import auth from './AuthSaga';

/**
 * rootSaga
 */
export default function* root() {
  yield all([fork(app), fork(auth)]);
}
