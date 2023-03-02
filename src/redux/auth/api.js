import axios from 'axios';

const API = axios.create({
  baseURL: 'https://kapusta-deployment.onrender.com/api',
});

const authToken = {
  set(accessToken) {
    API.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  },

  unset() {
    API.defaults.headers.common.Authorization = ``;
  },
};
export { API, authToken };
