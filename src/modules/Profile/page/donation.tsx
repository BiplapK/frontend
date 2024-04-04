import React from 'react';

import Link from 'next/link';

import NoData from '@/modules/core/components/NoData';

import { DonationType } from '../types/donations';

type Props = {
  data: Array<DonationType>;
};

const Donation = ({ data }: Props) => {
  if (Boolean(data.length === 0))
    return (
      <NoData
        customMessage={
          <div className="flex justify-center flex-col items-center mt-4">
            <p>
              There is not data in this page{' '}
              <Link className="text-red-200" href={'/charity'}>
                Add Donation
              </Link>
            </p>
          </div>
        }
      />
    );
  return <div>Donation</div>;
};

export default Donation;
