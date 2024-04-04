'use client';

import React from 'react';

import { CharityType } from '@/modules/Admin/types/charity.types';
import BackgroundBanner from '@/modules/core/components/BackgroundBanner';

import CharityDetails from '../../components/CharityDetails';
import CharityForm from '../../components/CharityForm';

type Props = {
  data: CharityType;
};

const CharityDetail = ({ data }: Props) => {
  return (
    <>
      <BackgroundBanner
        bannerTitle={data.title}
        contentColor="text-black-100"
        background={{
          background: `url(${data.image_url})`,
          backgroundSize: 'cover',
          repeat: 'no-repeat',
        }}
      />
      <section className=" container mx-auto py-5">
        <div className="grid grid-cols-3">
          <CharityDetails
            description={data.description}
            charity_amount={data.charity_amount}
            collected_amount={data.collected_amount}
            donation_count={data.donation_count}
          />
          <CharityForm data={data} />
        </div>
      </section>
    </>
  );
};

export default CharityDetail;
