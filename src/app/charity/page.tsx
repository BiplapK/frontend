import React from 'react';

import Charity from '@/modules/Charity';
import { getAllCharityData } from '@/modules/Admin/services/charity';

type Props = {};

const CharityPage = async (props: Props) => {
  const data = await getAllCharityData();
  const { data: charityData } = data;
  return <Charity data={charityData.result} />;
};

export default CharityPage;
