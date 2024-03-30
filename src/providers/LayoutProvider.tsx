'use client';
import React from 'react';

import { usePathname } from 'next/navigation';

import Header from '@/modules/core/components/Header';
import Footer from '@/modules/core/components/Footer';

type Props = {
  children: React.ReactNode;
};

const LayoutProvider = ({ children }: Props) => {
  const pathName = usePathname();
  const routes = [
    '/admin',
    '/admin/:path*',
    '/login',
    '/signup',
    '/forget-password',
  ];

  const commonLayout = routes.some((route) => pathName.startsWith(route));

  return commonLayout ? (
    children
  ) : (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default LayoutProvider;
