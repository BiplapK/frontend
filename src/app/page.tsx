import React from 'react';
import { getProfileData } from '@/modules/Admin/services/profile';
import ProfileComp from '@/modules/core/components/ProfileComp';
import { getProductData } from '@/modules/core/services/getProduct';

const Home = async () => {
  // const data = await getProductData();
  // console.log(data, "@@data");
  // // const getData = await data();
  // const profileData = await getProfileData();
  // console.log("🚀 ~ Home ~ profileData:", profileData);

  return (
    <div className="bg-red-100 h-screen">
      <h2 className="text-4xl text-orange bg-light">Lorem, ipsum dolor.</h2>
      <ProfileComp />
      <h2>Hello Nabraj</h2>
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
