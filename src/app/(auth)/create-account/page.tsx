import React from 'react';

import { Metadata } from 'next';

import CreateAccount from '@/modules/Auth/CreateAccount';

type Props = {};

export const metadata: Metadata = {
  title: 'Create Account |Charity Application',
  description:
    'This is the Description of Charity App Built by 6th Sem students of LBEF',
};

const CreateAccountPage = (props: Props) => {
  return <CreateAccount />;
};

export default CreateAccountPage;
