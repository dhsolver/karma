import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  setArticles: ['articles'],
  setCurrentArticle: ['articleId'],
  setArticlesLoading: ['loading'],
  setArticlesError: ['error'],
  requestArticlesList: null,
  requestArticleHeadlines: null,
  setArticleHeadlinesLoading: ['loading'],
  setArticleHeadlines: ['articleHeadlines']
});

export const ArticleTypes = Types;
export default Creators;

/* ------- Initial State --------- */
export const INITIAL_STATE = {
  list: [],
  loading: false,
  error: null,
  current: null,
  articleHeadlines: []
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
  selectArticle: state => state.articles.current,
  selectArticleHeadlines: state => state.articles.articleHeadlines
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

export const setArticle = (state, { articleId }) => {
  console.log('inside setArticle :', state, articleId);
  const articleList = state.list;
  const currentArticle = articleList.find(article => article.id === articleId);
  if (Object.keys(currentArticle).length) {
    return {
      ...state,
      current: currentArticle
    };
  } else {
    return {
      ...state,
      current: {}
    };
  }
};

export const setArticleHeadlines = (state, { articleHeadlines }) => ({
  ...state,
  articleHeadlines: articleHeadlines
});

/* -------- Hookup Reducers to Types -------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_ARTICLES_LOADING]: setLoading,
  [Types.SET_ARTICLES_ERROR]: setError,
  [Types.SET_CURRENT_ARTICLE]: setArticle,
  [Types.SET_ARTICLES]: setArticles,
  [Types.SET_ARTICLE_HEADLINES_LOADING]: setLoading,
  [Types.SET_ARTICLE_HEADLINES]: setArticleHeadlines
});
