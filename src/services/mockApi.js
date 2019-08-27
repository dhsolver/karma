import auth from './fixtures/auth';
import articles from './fixtures/articles';
import schedules from './fixtures/schedules';
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
    getArticles: async () => {
      return articles.map(convertArticle);
    },
    getGames: async () => {
      return schedules.map(convertGame);
    }
  };
}

export default createApi;
