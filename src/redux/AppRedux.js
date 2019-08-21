import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  startup: null,
  setLoading: ['loading'],
  setLoaded: ['loaded'],
  setAppData: ['data']
});

export const AppTypes = Types;
export default Creators;

/* ------- Initial State --------- */
export const INITIAL_STATE = {
  loading: false,
  loaded: false,
  data: {}
};

/* ------- Selectors --------- */
export const AppSelectors = {
  selectLoading: state => state.app.loading,
  selectLoaded: state => state.app.loaded
};

/* -------- Reducers ---------- */
export const setLoading = (state, { loading }) => ({
  ...state,
  loading
});

export const setLoaded = (state, { loaded }) => ({
  ...state,
  loaded
});

export const setAppData = (state, { data }) => ({
  ...state,
  data: {
    ...state.data,
    ...data
  }
});

/* -------- Hookup Reducers to Types -------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_LOADING]: setLoading,
  [Types.SET_LOADED]: setLoaded,
  [Types.SET_APP_DATA]: setAppData
});
