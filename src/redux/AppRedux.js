import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  startup: null,
  setLoading: ['loading'],
  setLoaded: ['loaded'],
  setAppData: ['data'],
  addSingleBet: ['data'],
  addPropBet: ['data'],
  addSingleInParlay: ['data'],
  addParlayBet: ['data']
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
  selectLoaded: state => state.app.loaded,
  selectData: state => state.app.data
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

export const setAppData = (state, action) => {
  console.log("inside setAppData :", state, action);
  switch (action.type) {
    case "ADD_SINGLE_BET":
      return ({
        ...state,
        data: {
          ...state.data,
          singleBet: action.data
        }
      });
      break;
    case "ADD_PROP_BET":
        return ({
          ...state,
          data: {
            ...state.data,
            propBet: action.data
          }
        });
        break;
    case "ADD_SINGLE_IN_PARLAY":
        let parlayBetArr = [];
        if ('parlayBet' in state.data) {
          parlayBetArr = [...state.data.parlayBet];
        }
        parlayBetArr.push(action.data);
        return ({
          ...state,
          data: {
            ...state.data,
            parlayBet: parlayBetArr
          }
        });
        break;
    case "ADD_PARLAY_BET":
        return ({
          ...state,
          data: {
            ...state.data,
            parlayBet: action.data
          }
        });
        break;
    default:
      return ({
        ...state,
        data: {
          ...state.data,
          ...action.data
        }
      });
  }
};


/* -------- Hookup Reducers to Types -------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_LOADING]: setLoading,
  [Types.SET_LOADED]: setLoaded,
  [Types.SET_APP_DATA]: setAppData,
  [Types.ADD_SINGLE_BET]: setAppData,
  [Types.ADD_PROP_BET]: setAppData,
  [Types.ADD_SINGLE_IN_PARLAY]: setAppData,
  [Types.ADD_PARLAY_BET]: setAppData
});
