import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  setArticles: ['articles'],
  setCurrentArticle: ['articleId'],
  setArticlesLoading: ['loading'],
  setArticlesError: ['error'],
  requestArticlesList: null
});

export const ArticleTypes = Types;
export default Creators;

/* ------- Initial State --------- */
export const INITIAL_STATE = {
  list: [],
  loading: false,
  error: null,
  current: null
};

/* ------- Selectors --------- */
export const ArticleSelectors = {
  selectLoading: state => state.articles.loading,
  selectArticles: (state, ownProps) => {
    const { type } = ownProps || {};
    if (type === 'latest') {
      //TODO: filter latest only
      return state.articles.list;
    }

    return state.articles.list;
  },
  selectArticle: state => state.articles.current
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

export const setArticles = (state, { articles }) => ({
  ...state,
  list: articles
});

export const setArticle = (state, { article }) => ({
  ...state,
  current: article
});

/* -------- Hookup Reducers to Types -------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_ARTICLES_LOADING]: setLoading,
  [Types.SET_ARTICLES_ERROR]: setError,
  [Types.SET_CURRENT_ARTICLE]: setArticle,
  [Types.SET_ARTICLES]: setArticles
});
