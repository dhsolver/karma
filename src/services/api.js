import axios from 'axios';

function createApi() {
  const apiClient = axios.create({
    baseURL: process.env.BACKEND_URL,
    responseType: 'json'
  });
  

  return {
    loginWithEmail: async ({ email, password }) => {
      const response = await apiClient.post('/auth/login', {
        email,
        password
      });
      return response;
    },
    reigsterWithEmail: async ({
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
      ...rest
    }) => {
      const response = await apiClient.post('/auth/signup', {
        firstName,
        lastName,
        phone: phoneNumber,
        email,
        password,
        ...rest
      });
      return response;
    },
    checkEmailAvailability: async ({ email }) => {
      const response = await apiClient.post('/auth/check', {
        email
      });
      return response;
    }
  };
}

export default createApi;
