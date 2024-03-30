import 'server-only';
import { cookies } from 'next/headers';
import axios from 'axios';

import { executeFetch } from '@/lib/execute-fetch';
import { publicAxios } from '@/modules/core/utils/axios';

import { ContactDataType } from '../types/profile.types';

//fetch contact

export const getContactData = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get('admin-key');

  const headers = {
    Authorization: `Bearer ${token?.value}`,
    cache: 'no-store',
  };

  const response = await executeFetch('/contact/all', {
    headers,
    next: {
      tags: ['contact'],
    },
  });

  return (await response.json()) as { data: ContactDataType };
};

// export const deleteContactData = (id: string) =>
//   publicAxios.delete(`/contact/delete/${id}`);
