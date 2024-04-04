'use client';
import React from 'react';

import { toast } from 'react-toastify';

import { publicAxios } from '@/modules/core/utils/axios';

import { DonationType } from '../../types/donation.types';
import DonationCard from '../../components/Donation/DonationCard';
import donationRevalidate from '../../components/Donation/DonationCard/action';

type Props = {
  data: Array<DonationType>;
};

const Donation = ({ data }: Props) => {
  const deleteDonation = (id: string) => {
    publicAxios
      .delete(`/donation/delete/${id}`)
      .then((res) => {
        toast.success(res.data.message);
        donationRevalidate();
      })
      .catch((error) => toast.error(error.response.data.message));
  };
  return (
    <div className="grid grid-cols-3 gap-2">
      {data.map((item) => (
        <DonationCard
          key={item.donation_id}
          donation_amount={item.donation_amount}
          donation_date={item.donation_date}
          donation_id={item.donation_id}
          donor_message={item.donor_message}
          donor_name={item.donor_name}
          handleDeleteContact={deleteDonation}
        />
      ))}
    </div>
  );
};

export default Donation;
