import 'server-only';
import { cookies } from 'next/headers';

import { executeFetch } from '@/lib/execute-fetch';

import { TestimonialDataType } from '../types/testimonial.types';

export const getALlTestimonial = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get('admin-key');
  const headers = {
    Authorization: `Bearer ${token?.value}`,
    cache: 'no-store',
  };
  const response = await executeFetch('/testimonial/view', {
    headers,
    next: {
      tags: ['testimonial'],
    },
  });

  return (await response.json()) as { data: TestimonialDataType };
};

// export const deleteDonationAdmin = async (donationID: string) => {
//   return await publicAxios.delete(`/donation/delete/${donationID}`, {
//     headers,
//   });
// };
