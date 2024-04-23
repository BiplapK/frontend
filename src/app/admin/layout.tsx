import React, { PropsWithChildren } from 'react';

import { Metadata } from 'next';

import AdminTemplate from '@/modules/Admin/components/AdminLayout';

const adminNavgation = [
  // {
  //   title: 'Dashboard',
  //   path: '/admin',
  //   parent: 'admin',
  // },
  {
    title: 'Charity',
    path: '/admin/charity',
    parent: 'admin',
  },
  {
    title: 'Contact',
    path: '/admin/contact',
    parent: 'admin',
  },
  {
    title: 'Donation',
    path: '/admin/donation',
    parent: 'admin',
  },
  {
    title: 'Testimonial',
    path: '/admin/testimonial',
    parent: 'admin',
  },
];
export const metadata: Metadata = {
  title: 'Admin |Charity Application',
  description:
    'This is the Description of Charity App Built by 6th Sem students of LBEF',
};
const AdminLayout = ({ children }: PropsWithChildren) => {
  return <AdminTemplate navData={adminNavgation}>{children}</AdminTemplate>;
};

export default AdminLayout;
