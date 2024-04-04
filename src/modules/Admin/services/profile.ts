import { cookies } from 'next/headers';

import { executeFetch } from '@/lib/execute-fetch';

import { ProfileDataType } from '../types/profile.types';

//fetch profile
export const getProfileData = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get('admin-key');

  const headers = {
    Authorization: `Bearer ${token?.value}`,
    cache: 'no-store',
  };

  const response = await executeFetch('/auth/profile', {
    headers,
    next: {
      tags: ['profile'],
    },
  });

  return (await response.json()) as { data: ProfileDataType };
};
