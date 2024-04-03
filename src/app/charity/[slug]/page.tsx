import React from 'react';

import Charity from '@/modules/Charity';

type Props = {
  slug: string;
};

const GetCharityPage = ({ params }: { params: { slug: string } }) => {
  console.log('🚀 ~ GetCharityPage ~ slug:', params.slug);
  return <Charity />;
};

export default GetCharityPage;
