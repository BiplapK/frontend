'use client';
import { Suspense } from 'react';

import { Metadata } from 'next';

import NotFoundComp from '@/modules/core/components/NotFoundComp';

export const metadata: Metadata = {
  title: 'Page not found ! |Charity Application',
  description:
    'This is the Description of Charity App Built by 6th Sem students of LBEF',
};

export default function NotFound() {
  return (
    <Suspense fallback={'test'}>
      <NotFoundComp />
    </Suspense>
  );
}
