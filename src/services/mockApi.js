import auth from './fixtures/auth';
import articles from './fixtures/articles';
import { transformFromAPI } from '@models/Article';

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
      return createResult({
        success: true
      });
    },
    addPropBet: async () => {
      return createResult({
        success: true
      });
    },
    addParlayBet: async () => {
      return createResult({
        success: true
      });
    },
    getArticles: async () => {
      return articles.map(transformFromAPI);
    }
  };
}

export default createApi;
