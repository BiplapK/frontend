'use client';
import React from 'react';

import Link from 'next/link';

import { CharityType } from '../Admin/types/charity.types';
import BackgroundBanner from '../core/components/BackgroundBanner';

import CharityCard from './components/CharityCard';

import useQuote from '../core/hooks/useQuote';

type Props = {
  data: Array<CharityType>;
};

const Charity = ({ data }: Props) => {
  const { quote } = useQuote();
  return (
    <>
      <section className=" bg-maron-200 h-[50vh] py-4 flex justify-center items-center">
        <div className="container  mx-auto py-5 ">
          <h2 className="text-5xl text-center font-bold py-6 text-white-100 leading-[70px]">
            {quote?.content}
            <br />
            <span className="font-black">- {quote?.author} </span>
          </h2>
        </div>
      </section>
      <section className="container mx-auto py-4 my-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {data &&
            data.map((item) => (
              <Link href={`charity/${item.charity_id}`} key={item.charity_id}>
                <CharityCard
                  title={item.title}
                  description={item.description}
                />
              </Link>
            ))}
        </div>
      </section>
      <BackgroundBanner
        bannerTitle={''}
        contentColor="text-maron-300"
        background={{
          background: 'url("/bg-03-free-img.jpg")',
          backgroundSize: 'cover',
          repeat: 'no-repeat',
        }}
      />
    </>
  );
};

export default Charity;
