import React from 'react';

import Link from 'next/link';

import Button from '../Button';

type Props = {};

const Banner = (props: Props) => {
  return (
    <section className=" bg-maron-200 h-[70vh] py-4 flex justify-center items-center">
      <div className="container  mx-auto py-5 ">
        <h4 className="text-center uppercase font-bold text-xl py-6 text-white-100">
          give us a hand
        </h4>
        <h2 className="text-6xl text-center font-extrabold py-6 text-white-100 leading-[70px]">
          Support us and change the course of a child’s life today!
        </h2>
        <div className="text-center py-6">
          <Button variant="normal-outline" size="md">
            <Link href={'/'}>Donate</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
