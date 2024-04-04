import React from 'react';

import Contact from '@/modules/Admin/pages/contact';
import { getContactData } from '@/modules/Admin/services/contact';

type Props = {};

const ContactUsPage = async (props: Props) => {
  const data = await getContactData();
  const { data: contactData } = data;

  return <Contact data={contactData} />;
};

export default ContactUsPage;
