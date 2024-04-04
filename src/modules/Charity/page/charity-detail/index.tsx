'use client';

import React from 'react';

import { CharityType } from '@/modules/Admin/types/charity.types';
import BackgroundBanner from '@/modules/core/components/BackgroundBanner';
import Aim from '@/modules/core/components/Aim';

import CharityDetails from '../../components/CharityDetails';
import CharityForm from '../../components/CharityForm';
import { getAllCharitySelect } from '../../services/charity';

type Props = {
  data: CharityType;
};

const CharityDetail = ({ data }: Props) => {
  const [charityOption, setCharityOption] = React.useState([]);

  React.useEffect(() => {
    getAllCharitySelect()
      .then((res) => setCharityOption(res.data.data))
      .catch((error) => error);
  }, []);

  return (
    <>
      <BackgroundBanner
        bannerTitle={data.title}
        contentColor="text-maron-100"
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
          <CharityForm data={data} option={charityOption} />
        </div>
      </section>
      <Aim />
    </>
  );
};

export default CharityDetail;
