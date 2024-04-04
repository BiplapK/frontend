import { publicAxios } from '@/modules/core/utils/axios';

export const getAllCharitySelect = async () => {
  return await publicAxios.get('/charity/all');
};
