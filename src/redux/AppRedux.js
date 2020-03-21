import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  startup: null,
  setLoading: ['loading'],
  setLoaded: ['loaded'],
  setAppData: ['data'],
  addSingleBet: ['data'],
  addPropBet: ['data'],
  addSingleInParlay: ['data'],
  editSingleInParlay: ['data'],
  addParlayBet: null,
  updateSingleInParlay: ['data'],
  removeSingleInParlay: ['betId'],
  addABetClicked: null
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
  switch (action.type) {
    case 'ADD_SINGLE_BET':
      return {
        ...state,
        data: {
          ...state.data,
          singleBet: action.data
        }
      };
    case 'ADD_PROP_BET':
      return {
        ...state,
        data: {
          ...state.data,
          propBet: action.data
        }
      };
    case 'ADD_SINGLE_IN_PARLAY':
      // eslint-disable-next-line no-case-declarations
      let parlayBetArr = [];
      if ('parlayBet' in state.data) {
        parlayBetArr = [...state.data.parlayBet];
      }
      parlayBetArr.push(action.data);
      return {
        ...state,
        data: {
          ...state.data,
          parlayBet: parlayBetArr
        }
      };
    default:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.data
        }
      };
  }
};

export const editSingleBetInParlay = (state, action) => {
  return {
    ...state,
    data: {
      ...state.data,
      editSingleBet: action.data
    }
  };
};

export const updateSingleInParlay = (state, action) => {
  const parlayBetList = state.data.parlayBet;
  const parlayBetListUpdated = [];
  parlayBetList.forEach(parlayBet => {
    if (parlayBet.id === action.data.betId) {
      parlayBetListUpdated.push(action.data.values);
    } else {
      parlayBetListUpdated.push(parlayBet);
    }
  });
  return {
    ...state,
    data: {
      ...state.data,
      parlayBet: parlayBetListUpdated,
      editSingleBet: {}
    }
  };
};

export const removeSingleInParlay = (state, action) => {
  const parlayBetList = state.data.parlayBet;
  const parlayBetListUpdated = [];
  let count = 1;
  parlayBetList.forEach(parlayBet => {
    if (parlayBet.id !== action.betId) {
      parlayBet.betNumber = count;
      parlayBetListUpdated.push(parlayBet);
      count++;
    }
  });
  return {
    ...state,
    data: {
      ...state.data,
      parlayBet: parlayBetListUpdated
    }
  };
};

export const addABetClicked = state => {
  return {
    ...state,
    data: {
      ...state.data,
      editSingleBet: {}
    }
  };
};

/* -------- Hookup Reducers to Types -------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_LOADING]: setLoading,
  [Types.SET_LOADED]: setLoaded,
  [Types.SET_APP_DATA]: setAppData,
  [Types.ADD_SINGLE_BET]: setAppData,
  [Types.ADD_PROP_BET]: setAppData,
  [Types.ADD_SINGLE_IN_PARLAY]: setAppData,
  [Types.EDIT_SINGLE_IN_PARLAY]: editSingleBetInParlay,
  [Types.UPDATE_SINGLE_IN_PARLAY]: updateSingleInParlay,
  [Types.REMOVE_SINGLE_IN_PARLAY]: removeSingleInParlay,
  [Types.ADD_A_BET_CLICKED]: addABetClicked
});
