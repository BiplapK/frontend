import React from 'react';

import Aim from '@/modules/core/components/Aim';
import Counter from '@/modules/core/components/Counter';
import Banner from '@/modules/core/components/Banner';
import Slider from '@/modules/core/components/Slider';
import { sliderImageOne } from '@/staticData/homepage';
import BackgroundBanner from '@/modules/core/components/BackgroundBanner';

const Home = async () => {
  return (
    <div className="">
      <BackgroundBanner
        bannerTitle={''}
        contentColor="text-white-100"
        height="h-[85vh]"
        background={{
          background: 'url("/student-learning.jpeg")',
          backgroundSize: 'cover',
          repeat: 'no-repeat',
        }}
      />
      <Aim />
      <Counter />
      <Slider data={sliderImageOne} />
      <Banner />
    </div>
  );
};

export default Home;
