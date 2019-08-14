import { all, takeLatest } from 'redux-saga/effects';
import { AuthTypes } from './AuthRedux';

export function* storeToken(token) {
  localStorage.setItem('token', token);
  yield true;
}

export function* clearToken() {
  localStorage.removeItem('token');
  yield true;
}

export default function* root() {
  yield all([
    takeLatest(AuthTypes.SET_LOGGED_IN, storeToken),
    takeLatest(AuthTypes.SET_LOGGED_OUT, clearToken)
  ]);
}
