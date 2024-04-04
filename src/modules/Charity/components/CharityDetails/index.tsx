'use client';

import React from 'react';

type Props = {
  description: string;
  charity_amount: string;
  donation_count: string | null;
  collected_amount: string | null;
};

const CharityDetails = ({
  description,
  charity_amount,
  donation_count,
  collected_amount,
}: Props) => {
  return (
    <div className="mt-4 col-span-2">
      <h5 className="text-2xl font-raleway font-semiLight py-3">
        {description}
      </h5>
      <h5 className="text-4xl font-poppins font-medium py-4">
        Amount to be collected :{' '}
        <span className="font-bold  text-blue-300">${charity_amount}</span>
      </h5>
      <h5 className="text-4xl font-poppins font-medium py-5">
        Total collected amount:
        <span className="font-bold  text-blue-300 ml-2">
          ${collected_amount || 0}
        </span>
      </h5>
      <h5 className="text-4xl font-poppins font-medium py-4">
        Number of donations :
        <span className="font-bold  text-green-300 ml-2">
          {donation_count || 0}
        </span>
      </h5>
    </div>
  );
};

export default CharityDetails;
