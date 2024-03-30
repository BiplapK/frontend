import React from 'react';

import { getAllCharityData } from '@/modules/Admin/services/charity';
import Charity from '@/modules/Admin/pages/charity';

type Props = {};

const CharityPage = async (props: Props) => {
  const data = await getAllCharityData();
  const { data: charityData } = data;

  return <Charity data={charityData.result} />;
};

export default CharityPage;
