import React from 'react';

import { counterData } from '@/staticData/homepage';

type Props = {};

const Counter = (props: Props) => {
  return (
    <section className="container mx-auto bg-white-100 py-10 ">
      <div className="grid grid-cols-2 py-5">
        <div className="flex flex-col px-4 w-5/6">
          <h2 className="text-6xl  font-bold">Our numbers that speak</h2>
          <p className="py-3 text-[17px]">
            We have numbers that push us to give in our best and make sure that
            we break our own records. We are happy to be growing and helping
            more day by day.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-6 ">
          {counterData.map((item) => (
            <div
              className=" border-b-2 border-b-orange-100 mb-4 pt-4 mr-4"
              key={item.id}
            >
              <h2 className="text-5xl font-black text-maron-100">
                {item.count}K+
              </h2>
              <h3 className="text-2xl font-semibold py-5 text-black-300">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
