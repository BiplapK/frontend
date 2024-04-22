import React from 'react';

import Charity from '@/modules/Charity';
import { getCharityById } from '@/modules/Admin/services/charity';
import CharityDetail from '@/modules/Charity/page/charity-detail';

type Props = {
  slug: string;
};

const CharityDetailPage = async ({ params }: { params: { slug: string } }) => {
  const data = await getCharityById(params.slug);
  const { data: charityData } = data;
  // console.log('🚀 ~ CharityDetailPage ~ charityData:', charityData);
  // console.log('🚀 ~ CharityDetailPage ~ slug:', params.slug);
  return <CharityDetail data={charityData} />;
};

export default CharityDetailPage;
