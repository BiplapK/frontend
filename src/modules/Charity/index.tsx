'use client';
import React from 'react';

import Link from 'next/link';

import { CharityType } from '../Admin/types/charity.types';

type Props = {
  data: Array<CharityType>;
};

const Charity = ({ data }: Props) => {
  console.log('🚀 ~ Charity ~ data:', data);
  return (
    <section className="container mx-auto py-4">
      <h2 className="text-3xl">lorem charity</h2>

      <div className="grid grid-cols-5 gap-2">
        {data &&
          data.map((item) => (
            <Link href={`charity/${item.charity_id}`} key={item.charity_id}>
              <p>{item.title}</p>
            </Link>
          ))}
      </div>
    </section>
  );
};

export default Charity;
