import React from 'react';

import clsx from 'clsx';

import Button from '../Button';
import BackgroundBanner from '../BackgroundBanner';

const Footer = () => {
  return (
    <>
      <BackgroundBanner
        bannerTitle="Donate Now"
        title="Support Us and Change the Course of a Child’s Life Today!"
        description="Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Hic sapiente aspernatur nobis omnis non consequuntur"
        buttonComponent={
          <Button variant="normal" rounded="full" size="md">
            Donate
          </Button>
        }
        background={{
          background: `url('/banner-03.jpg')`,
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        contentColor="text-white-100"
        hasButton
      />

      <footer className="p-[30px] bg-white-100 container mx-auto">
        <div className="grid grid-cols-2">
          <div className="text-left">
            <p className="text-[16px] font-poppins font-normal">
              Copyright © 2024 Charity
            </p>
          </div>
          <div className="text-right">
            <p className="text-[16px] font-poppins font-normal">
              Powered by Charity
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
