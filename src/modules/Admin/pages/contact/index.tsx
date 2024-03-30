'use client';
import React from 'react';

import { toast } from 'react-toastify';

import { publicAxios } from '@/modules/core/utils/axios';
import profileRevalidate from '@/modules/Auth/Login/components/action';

import ContactCard from '../../components/Contact/ContactCard';
import { ContactDataType } from '../../types/profile.types';

type Props = {
  data: ContactDataType;
};

const Contact = ({ data }: Props) => {
  const deleteContact = (id: string) => {
    publicAxios
      .delete(`/contact/delete/${id}`)
      .then((res) => {
        toast.success(res.data.message);
        profileRevalidate();
      })
      .catch((error) => toast.error(error.response.data.message));
  };
  return (
    <div className="grid grid-cols-3 gap-2">
      {data.result.map((item) => (
        <ContactCard
          key={item.inquiry_id}
          email={item.email}
          full_name={item.full_name}
          inquiry_id={item.inquiry_id}
          message={item.message}
          subject={item.subject}
          handleDeleteContact={deleteContact}
        />
      ))}
    </div>
  );
};

export default Contact;
