import React from 'react';

import { getDonationByUser } from '@/modules/Profile/services/donations';
import { getProfileData } from '@/modules/Admin/services/profile';
import Donation from '@/modules/Profile/page/donation';

type Props = {};

const DonationPage = async (props: Props) => {
  const profileData = await getProfileData();
  const userID = profileData && profileData.data?.id;
  console.log('🚀 ~ DonationPage ~ userID:', userID);

  const userDonation = await getDonationByUser(userID || '');
  console.log(
    '🚀 ~ DonationPage ~ userDonation:',
    Boolean(userDonation.data.length === 0)
  );
  console.log(
    '🚀 ~ DonationPage ~ userDonation:',
    userDonation && userDonation
  );

  return <Donation data={userDonation.data} />;
};

export default DonationPage;
