import 'server-only';
import { executeFetch } from '@/lib/execute-fetch';
import { coreAPiRevalidation } from '@/constants/revalidationa';

//fetches the data for home
export const getProductData = async () => {
  const response = await executeFetch('/product', {
    // next: {
    //   revalidate: coreAPiRevalidation,
    //   tags: ["product"],
    // },
    cache: 'no-store',
  });

  return (await response.json()) as { data: any };
};
