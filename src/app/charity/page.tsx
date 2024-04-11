import React from 'react';

import Charity from '@/modules/Charity';
import { getAllCharityData } from '@/modules/Admin/services/charity';

type Props = {};

const CharityPage = async (props: Props) => {
  const data = await getAllCharityData();
  console.log('🚀 ~ CharityPage ~ data:', data);
  const { data: charityData } = data;
  return <Charity data={charityData.result} />;
};

export default CharityPage;
