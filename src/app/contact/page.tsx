import React from 'react';

import { Metadata } from 'next';

import ContactUs from '@/modules/Contact';

type Props = {};

export const metadata: Metadata = {
  title: 'Contact Page |Charity Application',
  description:
    'This is the Description of Charity App Built by 6th Sem students of LBEF',
};

const ContactPage = (props: Props) => {
  return <ContactUs />;
};

export default ContactPage;
