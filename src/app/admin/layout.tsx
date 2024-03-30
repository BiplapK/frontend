import React, { PropsWithChildren } from 'react';

import AdminTemplate from '@/modules/Admin/components/AdminLayout';

const adminNavgation = [
  {
    title: 'Dashboard',
    path: '/admin',
    parent: 'admin',
  },
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
    title: 'Notice',
    path: '/admin/notice',
    parent: 'admin',
  },
  {
    title: 'Message',
    path: '/admin/message',
    parent: 'admin',
  },
];
const AdminLayout = ({ children }: PropsWithChildren) => {
  return <AdminTemplate navData={adminNavgation}>{children}</AdminTemplate>;
};

export default AdminLayout;
