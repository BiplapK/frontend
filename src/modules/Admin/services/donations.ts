import 'server-only';
import { cookies } from 'next/headers';

import { executeFetch } from '@/lib/execute-fetch';

import { DonationDataType } from '../types/donation.types';

export const getALlDonations = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get('admin-key');
  const headers = {
    Authorization: `Bearer ${token?.value}`,
    cache: 'no-store',
  };
  const response = await executeFetch('/donation/all', {
    headers,
    next: {
      tags: ['donation'],
    },
  });

  return (await response.json()) as { data: DonationDataType };
};

// export const deleteDonationAdmin = async (donationID: string) => {
//   return await publicAxios.delete(`/donation/delete/${donationID}`, {
//     headers,
//   });
// };
