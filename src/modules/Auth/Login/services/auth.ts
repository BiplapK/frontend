import { publicAxios } from '@/modules/core/utils/axios';

export const login = async (payload: { email: string; password: string }) => {
  return await publicAxios.post('/auth/login', payload);
};
