import auth from './fixtures/auth';
import articles from './fixtures/articles';
import schedules from './fixtures/schedules';
import articleHeadlines from './fixtures/articleHeadlines';
import { transformFromAPI as convertArticle } from '@models/Article';
import { transformFromAPI as convertGame } from '@models/Game';

function createError(status) {
  return {
    response: {
      status
    }
  };
}

function createResponse(data) {
  return data;
}

function createApi() {
  return {
    loginWithEmail: async ({ email, password }) => {
      const { user } = auth;
      if (user.email === email && user.password === password) {
        return createResponse({
          authToken: 'test',
          refreshToken: 'test'
        });
      }
    },
    reigsterWithEmail: async () => {
      return createResponse({
        authToken: 'test',
        refreshToken: 'test'
      });
    },
    checkEmailAvailability: async ({ email }) => {
      const { user } = auth;
      if (user.email === email) {
        throw createError(400);
      }

      return createResponse({
        available: true
      });
    },
    addSingleBet: async () => {
      return createResponse({
        success: true
      });
    },
    addPropBet: async () => {
      return createResponse({
        success: true
      });
    },
    addParlayBet: async data => {
      return createResponse({
        success: true
      });
    },
    getArticles: async () => {
      return articles.map(convertArticle);
    },
    getGames: async () => {
      return schedules.map(convertGame);
    },
    getArticleHeadlines: async () => {
      return articleHeadlines;
    }
  };
}

export default createApi;
