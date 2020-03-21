import { put } from 'redux-saga/effects';
import history from '@utils/history';
import AppActions from './AppRedux';
// import logger from '@utils/logger';
import AuthActions from './AuthRedux';

export function* startup() {
  const token = localStorage.getItem('token');
  const data = {
    betTypeMenu: [
      {
        id: 1,
        name: 'Money Line',
        key: 'ml'
      },
      {
        id: 2,
        name: 'Spread',
        key: 'sd'
      },
      {
        id: 3,
        name: 'Over / Under',
        key: 'ou'
      }
    ],
    sportMenu: [
      {
        id: 1,
        name: 'NFL'
      }
    ],
    teamMenu: [
      {
        id: 1,
        name: 'SEA'
      },
      {
        id: 2,
        name: 'ARI'
      }
    ],
    matchupMenu: [
      {
        id: 1,
        name: 'HOU at SEA'
      }
    ],
    overUnderMenu: [
      {
        id: 1,
        name: 'Over'
      },
      {
        id: 2,
        name: 'Under'
      }
    ],
    playerMenu: [
      {
        id: 1,
        name: 'Alex Bregman'
      }
    ],
    statMenu: [
      {
        id: 1,
        name: 'Hits'
      }
    ]
  };
  if (token) {
    yield put(AuthActions.setLoggedIn(token));
  }

  // do initial loading

  yield put(AppActions.setAppData(data));
  yield put(AppActions.setLoaded(true));
}

export function* addBets() {
  const { location } = history;
  // TODO: no hard code for route name
  if (
    location.pathname === '/single-game' ||
    location.pathname === '/prop-bet' ||
    location.pathname === '/parlay'
  ) {
    history.push('/');
  }
  yield true;
}
