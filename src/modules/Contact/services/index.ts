import { publicAxios } from '@/modules/core/utils/axios';

export const postContactData = async (payload: any) => {
  return await publicAxios.post('/contact', payload);
};
