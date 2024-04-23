import React from 'react';

import { Metadata } from 'next';

import Charity from '@/modules/Charity';
import { getAllCharityData } from '@/modules/Admin/services/charity';

type Props = {};

export const metadata: Metadata = {
  title: 'Charity |Charity Application',
  description:
    'This is the Description of Charity App Built by 6th Sem students of LBEF',
};

const CharityPage = async (props: Props) => {
  const data = await getAllCharityData();

  const { data: charityData } = data;
  return <Charity data={charityData.result} />;
};

export default CharityPage;
