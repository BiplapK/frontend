import React from 'react';

import { Metadata } from 'next';

import AboutUs from '@/modules/AboutUs';

type Props = {};

export const metadata: Metadata = {
  title: 'About Us |Charity Application',
  description:
    'This is the Description of Charity App Built by 6th Sem students of LBEF',
};
const AboutUsPage = (props: Props) => {
  return <AboutUs />;
};

export default AboutUsPage;
