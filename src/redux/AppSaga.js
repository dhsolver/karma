import { put, all, takeLatest } from 'redux-saga/effects';
// import history from '@utils/history';
import AppActions from './AppRedux';
// import logger from '@utils/logger';
import { AppTypes } from './AppRedux';
import AuthActions from './AuthRedux';

export function* startup() {
  const token = localStorage.getItem('token');
  if (token) {
    yield put(AuthActions.setLoggedIn(token));
  }

  // do initial loading
  const data = {
    pr: true
  };

  yield put(AppActions.setAppData(data));
  yield put(AppActions.setLoaded(true));
}

export default function* root() {
  yield all([takeLatest(AppTypes.STARTUP, startup)]);
}
