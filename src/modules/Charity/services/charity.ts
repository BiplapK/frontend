import { publicAxios } from '@/modules/core/utils/axios';
import { getCookie } from '@/modules/core/utils/cookies';

export const getAllCharitySelect = async () => {
  return await publicAxios.get('/charity/all');
};

export const addDonation = async ({ payload }: any) => {
  return await publicAxios.post('/donation/add', payload);
};
