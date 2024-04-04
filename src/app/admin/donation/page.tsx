import React from 'react';

import Donation from '@/modules/Admin/pages/donation';
import { getALlDonations } from '@/modules/Admin/services/donations';

type Props = {};

const DonationPage = async (props: Props) => {
  const data = await getALlDonations();
  const { data: donationData } = data;
  return <Donation data={donationData.result} />;
};

export default DonationPage;
