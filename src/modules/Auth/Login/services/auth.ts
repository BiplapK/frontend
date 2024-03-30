import { publicAxios } from '@/modules/core/utils/axios';

export const login = async (payload: { email: string; password: string }) => {
  return await publicAxios.post('/auth/login', payload);
};

export const signup = async (payload: {
  email: string;
  password: string;
  username: String;
}) => {
  return await publicAxios.post('/auth/signup', payload);
};
