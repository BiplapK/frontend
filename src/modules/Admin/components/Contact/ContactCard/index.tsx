'use client';
import React from 'react';

import Button from '@/modules/core/components/Button';
import { ContactType } from '@/modules/Admin/types/profile.types';

type IProps = {
  inquiry_id: string;
  email: string;
  full_name: string;
  message: string;
  subject: string;
  handleDeleteContact: (id: string) => void;
};
const ContactCard = ({
  inquiry_id,
  email,
  full_name,
  message,
  subject,
  handleDeleteContact,
}: IProps) => {
  return (
    <div className="border-[1px] border-white-300 px-4 py-2 rounded-md">
      <div className="flex justify-between items-center border-b-orange-100  border-b-[1px]">
        <p className="font-semibold">
          Email:
          <span className="font-normal"> {email}</span>
        </p>
        <Button
          onClick={() => handleDeleteContact(inquiry_id)}
          size="sm"
          className="text-white-100"
          variant="danger"
        >
          Delete
        </Button>
      </div>
      <p className="font-semibold py-2 border-b-orange-100  border-b-[1px]">
        Full Name:
        <span className="font-normal"> {full_name}</span>
      </p>
      <p className="font-semibold py-2">
        Subject:
        <span className="font-normal"> {subject}</span>
      </p>
      <p className="font-semibold py-2">
        Message:
        <span className="font-normal"> {message}</span>
      </p>
    </div>
  );
};

export default ContactCard;
