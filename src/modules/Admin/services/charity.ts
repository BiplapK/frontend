import { notFound } from 'next/navigation';

import { executeFetch } from '@/lib/execute-fetch';
import { publicAxios } from '@/modules/core/utils/axios';

import { CharityDataType, CharityType } from '../types/charity.types';

export const getAllCharityData = async () => {
  const response = await executeFetch('/charity/getAll', {
    cache: 'no-store',
    next: {
      tags: ['charity'],
    },
  });
  if (!response.ok) {
    return notFound();
  }

  return (await response.json()) as { data: CharityDataType };
};

export const addCharity = (payload: any) =>
  publicAxios.post('/charity/add', payload, {
    headers: {
      'content-type': 'multipart/form-data',
    },
  });

export const deleteCharity = (charity_id: string) => {
  publicAxios.delete(`/charity/delete/${charity_id}`);
};

export const updateCharity = (payload: any, id: string) => {
  publicAxios.put(`/charity/update/${id}`, payload),
    {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
};

export const getCharityById = async (charity_id: string) => {
  const response = await executeFetch(`/charity/data/${charity_id}`, {
    cache: 'no-store',
    next: {
      tags: ['charity'],
    },
  });
  if (!response.ok) {
    return notFound();
  }
  return (await response.json()) as { data: CharityType };
};
