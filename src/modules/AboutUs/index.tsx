'use client';
import React from 'react';

import Image from 'next/image';

import BackgroundBanner from '../core/components/BackgroundBanner';
import useQuote from '../core/hooks/useQuote';

type Props = {};

const AboutUs = (props: Props) => {
  const { quote } = useQuote();
  const data = [1, 2, 3, 4, 5];
  return (
    <>
      <BackgroundBanner
        bannerTitle={(quote && quote.content) || ''}
        contentColor="text-white-100"
        background={{
          background: 'url("/bg-03-free-img.jpg")',
          backgroundSize: 'cover',
          repeat: 'no-repeat',
        }}
      />
      <section className="container mx-auto">
        <div className="py-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {data.map((item, i) => (
            <div className="max-w-sm rounded overflow-hidden shadow-lg" key={i}>
              <Image
                className="w-full"
                src="/card-left.jpg"
                alt="Sunset in the mountains"
                width={80}
                height={150}
                quality={100}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  The Coldest Sunset
                  <span className="text-gray-700 text-base text-center overflow-hidden text-ellipsis line-clamp-3">
                    Lorem ipsum
                  </span>
                </div>

                <p className="text-gray-700 text-base overflow-hidden text-ellipsis line-clamp-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #winter
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutUs;
