import React from 'react';

import { getProfileData } from '@/modules/Admin/services/profile';
import { getProductData } from '@/modules/core/services/getProduct';
import Aim from '@/modules/core/components/Aim';
import Counter from '@/modules/core/components/Counter';
import Banner from '@/modules/core/components/Banner';
import Footer from '@/modules/core/components/Footer';
import Slider from '@/modules/core/components/Slider';
import { sliderImageOne } from '@/staticData/homepage';
import BackgroundBanner from '@/modules/core/components/BackgroundBanner';
import Button from '@/modules/core/components/Button';

const Home = async () => {
  return (
    <div className="bg-red-100 ">
      <h2 className="text-4xl text-orange bg-light">Lorem, ipsum dolor.</h2>
      {/* <ProfileComp />
      <h2>Hello Nabraj</h2> */}

      <Aim />
      <Counter />
      <Slider data={sliderImageOne} />
      <Banner />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;

// const data = async () => {
//   const res = await fetch("http:localhost:8000/product", { cache: "no-store" });

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// };
