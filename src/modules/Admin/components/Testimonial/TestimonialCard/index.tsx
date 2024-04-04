'use client';
import React from 'react';

import Button from '@/modules/core/components/Button';
import { ContactType } from '@/modules/Admin/types/profile.types';

type IProps = {
  testimonial_id: string;
  customer_name: string;
  email: string;
  rating: string;
  content: string;
  handleDeleteContact: (id: string) => void;
};
const TestimonialCard = ({
  testimonial_id,
  customer_name,
  email,
  rating,
  content,
  handleDeleteContact,
}: IProps) => {
  return (
    <div className="border-[1px] border-white-300 px-4 py-2 rounded-md">
      <div className="flex justify-between items-center border-b-orange-100  border-b-[1px]">
        <p className="font-semibold">
          name:
          <span className="font-normal"> {customer_name}</span>
        </p>
        <Button
          onClick={() => handleDeleteContact(testimonial_id)}
          size="sm"
          className="text-white-100"
          variant="danger"
        >
          Delete
        </Button>
      </div>
      <p className="font-semibold py-2 border-b-orange-100  border-b-[1px]">
        email:
        <span className="font-normal"> {email}</span>
      </p>
      <p className="font-semibold py-2">
        Rating:
        <span className="font-normal"> {rating}</span>
      </p>
      <p className="font-semibold py-2">
        Message:
        <span className="font-normal line-clamp-2 overflow-hidden text-ellipsis">
          {' '}
          {content}
        </span>
      </p>
    </div>
  );
};

export default TestimonialCard;
