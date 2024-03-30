import React from 'react';

import { getCharityById } from '@/modules/Admin/services/charity';
import AddCharity from '@/modules/Admin/pages/charity/add-charity';

type Props = {};

const Edit = async ({ params }: { params: { slug: string } }) => {
  //   console.log('🚀 ~ Edit ~ params:', params);
  const data = await getCharityById(params.slug);
  //   console.log('🚀 ~ Edit ~ data:', data.data);
  return <AddCharity data={data.data} edit id={params.slug} />;
};

export default Edit;
