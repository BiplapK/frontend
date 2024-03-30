import axios from 'axios';

import { NEXT_PUBLIC_API_URL } from '@/constants/env.constant';

import { getCookie } from './cookies';

const createAxiosInstance = (baseURL: string | undefined) =>
  axios.create({ baseURL });

const publicAxios = createAxiosInstance(NEXT_PUBLIC_API_URL);

publicAxios.interceptors.request.use(
  (config) => {
    if (getCookie('admin-key')) {
      config.headers['Authorization'] = `Bearer ${getCookie('admin-key')}`;
      // const auth = token ? `Bearer ${token}` : '';
      // config.headers.common['Authorization'] = auth;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

publicAxios.interceptors.response.use(
  async (response) => {
    return response;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export { publicAxios };
