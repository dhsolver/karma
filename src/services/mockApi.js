export const fixtures = {
  user: {
    email: 'dev@betkarma.com',
    password: '123456'
  }
};

function createError(status) {
  return {
    response: {
      status
    }
  };
}

function createResult(data) {
  return {
    result: data
  };
}

function createApi() {
  return {
    loginWithEmail: async ({ email, password }) => {
      const { user } = fixtures;
      if (user.email === email && user.password === password) {
        return createResult({
          authToken: 'test',
          refreshToken: 'test'
        });
      }
    },
    reigsterWithEmail: async () => {
      return createResult({
        authToken: 'test',
        refreshToken: 'test'
      });
    },
    checkEmailAvailability: async ({ email }) => {
      const { user } = fixtures;
      if (user.email === email) {
        throw createError(400);
      }

      return createResult({
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
    }
  };
}

export default createApi;
