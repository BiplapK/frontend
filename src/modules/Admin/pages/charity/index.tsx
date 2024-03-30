'use client';
import React from 'react';

import Link from 'next/link';
import { toast } from 'react-toastify';

import Button from '@/modules/core/components/Button';
import { publicAxios } from '@/modules/core/utils/axios';

import CharityCard from '../../components/charity/CharityCard';
import { CharityType } from '../../types/charity.types';
import charityRevalidate from '../../components/charity/CharityCard/action';

type Props = {
  data: Array<CharityType>;
};

const Charity = ({ data }: Props) => {
  const deleteCharity = (charity_id: string) => {
    publicAxios
      .delete(`/charity/delete/${charity_id}`)
      .then((res) => {
        toast.success(res.data.message);
        charityRevalidate();
      })
      .catch((error) => toast.error(error.response.data.message));
  };

  return (
    <div className="p-2">
      <div className="w-full flex justify-end">
        <Button variant="primary" className="text-white-100">
          <Link href={'/admin/charity/add-charity'}>Add New Charity</Link>
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {data.map((item) => (
          <CharityCard
            key={item.charity_id}
            charity_amount={item.charity_amount || ''}
            charity_id={item.charity_id}
            collected_amount={item.collected_amount || ''}
            description={item.description}
            donation_count={item.donation_count || ''}
            image_url={item.image_url}
            title={item.title}
            handleDeleteCharity={deleteCharity}
          />
        ))}
      </div>
    </div>
  );
};

export default Charity;
