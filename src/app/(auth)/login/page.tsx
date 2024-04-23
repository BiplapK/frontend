import React from 'react';

import { Metadata } from 'next';

import Login from '@/modules/Auth/Login';

export const metadata: Metadata = {
  title: 'Login Page |Charity Application',
  description:
    'This is the Description of Charity App Built by 6th Sem students of LBEF',
};

const Loginpage = () => {
  return <Login />;
};

export default Loginpage;
