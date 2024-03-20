import React from 'react';

import Link from 'next/link';
import { aimdData } from '@/staticData/homepage';
import clsx from 'clsx';
import Button from '../Button';

type Props = {};

const Aim = (props: Props) => {
  const data = [1, 2, 3, 4];
  return (
    <section className="container mx-auto">
      <h2 className="text-left text-black-100 text-6xl font-poppins font-semibold ">
        What we do
      </h2>
      <div className="flex justify-end w-full pb-10">
        <div className="w-5/12">
          <h4 className="text-xl font-bold pb-5 text-left">
            We plan and support amazing projects that help change the lives of
            disadvantaged children and young people from across different
            regions of the world.
          </h4>
          <Link
            href={'/'}
            className="pt-6 uppercase text-orange-100 hover:text-orange-300"
          >
            Read more
          </Link>
        </div>
      </div>
      <div className="py-4">
        <div className="grid grid-cols-4">
          {aimdData.map((item) => (
            <div
              key={item.id}
              className={clsx('bg-maron-100 py-5')}
              style={{ opacity: `${1 - 0.1 * item.id}` }}
            >
              <h2 className="text-4xl font-bold p-6 text-white-100">
                {item.title}
              </h2>
              <p className="px-6 py-3 text-[16px] text-left text-white-100">
                {item.description}
              </p>
              <div className="p-6">
                <div className=" bg-white-100 border-b-8 border-x-white-100 w-2/6 text-center"></div>
              </div>
              <Button variant="warning" className="mx-6 text-white-100">
                <Link href={'/'}>View Now</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Aim;
