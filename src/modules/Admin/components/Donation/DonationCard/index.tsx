'use client';
import React from 'react';

import Button from '@/modules/core/components/Button';
import { ContactType } from '@/modules/Admin/types/profile.types';

type IProps = {
  donation_id: string;
  donor_name: string;
  donor_message: string;
  donation_amount: string;
  donation_date: string;
  handleDeleteContact: (id: string) => void;
};
const DonationCard = ({
  donation_id,
  donor_name,
  donor_message,
  donation_amount,
  donation_date,
  handleDeleteContact,
}: IProps) => {
  return (
    <div className="border-[1px] border-white-300 px-4 py-2 rounded-md">
      <div className="flex justify-between items-center border-b-orange-100  border-b-[1px]">
        <p className="font-semibold">
          name:
          <span className="font-normal"> {donor_name}</span>
        </p>
        <Button
          onClick={() => handleDeleteContact(donation_id)}
          size="sm"
          className="text-white-100"
          variant="danger"
        >
          Delete
        </Button>
      </div>
      <p className="font-semibold py-2 border-b-orange-100  border-b-[1px]">
        Donation Amount:
        <span className="font-normal"> {donation_amount}</span>
      </p>
      <p className="font-semibold py-2">
        donation_date:
        <span className="font-normal"> {donation_date}</span>
      </p>
      <p className="font-semibold py-2">
        Message:
        <span className="font-normal"> {donor_message}</span>
      </p>
    </div>
  );
};

export default DonationCard;
