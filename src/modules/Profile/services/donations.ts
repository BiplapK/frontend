import { notFound } from 'next/navigation';
import { cookies } from 'next/headers';

import { executeFetch } from '@/lib/execute-fetch';

import { DonationResponseType } from '../types/donations';

export const getDonationByUser = async (userID: string) => {
  const cookieStore = cookies();
  const token = cookieStore.get('admin-key');

  const headers = {
    Authorization: `Bearer ${token?.value}`,
    cache: 'no-store',
  };

  const response = await executeFetch(`/donation/user/${userID}`, {
    headers,
    next: {
      tags: ['donation/user'],
    },
  });
  if (!response.ok) {
    return notFound();
  }

  return (await response.json()) as { data: DonationResponseType };
};

export const getAllDonation = async (userID: string) => {
  const response = await executeFetch(`/donation/all`, {
    cache: 'no-store',
    next: {
      tags: ['donation/user'],
    },
  });
  if (!response.ok) {
    return notFound();
  }

  return (await response.json()) as { data: DonationResponseType };
};
