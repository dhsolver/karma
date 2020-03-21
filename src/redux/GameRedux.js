import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  setGames: ['games'],
  setCurrentGame: ['gameId'],
  setGamesLoading: ['loading'],
  setGamesError: ['error'],
  requestGamesList: null
});

export const GameTypes = Types;
export default Creators;

/* ------- Initial State --------- */
export const INITIAL_STATE = {
  list: [],
  loading: false,
  error: null,
  current: null
};

/* ------- Selectors --------- */
export const GameSelectors = {
  selectLoading: state => state.games.loading,
  selectGames: (state, ownProps) => {
    const { type } = ownProps || {};
    if (type === 'latest') {
      //TODO: filter latest only
      return state.games.list;
    }

    return state.games.list;
  },
  selectGame: state => state.games.current
};

/* -------- Reducers ---------- */
export const setLoading = (state, { loading }) => {
  return {
    ...state,
    loading
  };
};

export const setError = (state, { error }) => {
  return {
    ...state,
    error
  };
};

export const setGames = (state, { games }) => ({
  ...state,
  list: games
});

export const setGame = (state, { game }) => ({
  ...state,
  current: game
});

/* -------- Hookup Reducers to Types -------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_GAMES_LOADING]: setLoading,
  [Types.SET_GAMES_ERROR]: setError,
  [Types.SET_CURRENT_GAME]: setGame,
  [Types.SET_GAMES]: setGames
});
