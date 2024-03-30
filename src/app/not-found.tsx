'use client';
import { Suspense } from 'react';

import NotFoundComp from '@/modules/core/components/NotFoundComp';

export default function NotFound() {
  return (
    <Suspense fallback={'test'}>
      <NotFoundComp />
    </Suspense>
  );
}
