import history from '@utils/history';

export function* storeToken(token) {
  localStorage.setItem('token', token);
  const { location } = history;
  // TODO: no hard code for route name
  if (location.pathname === '/login') {
    history.push('/');
  }
  yield true;
}

export function* clearToken() {
  localStorage.removeItem('token');
  yield true;
}
