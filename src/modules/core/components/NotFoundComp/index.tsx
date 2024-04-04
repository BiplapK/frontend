import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import useQuote from '../../hooks/useQuote';

type Props = {};

const NotFoundComp = (props: Props) => {
  const router = useRouter();
  const { quote } = useQuote();
  console.log('🚀 ~ NotFoundComp ~ quote:', quote);
  const handleRoute = () => {
    router.push('/');
  };
  return (
    <div className="h-[84vh] flex m-auto">
      <div className="m-auto">
        <div className="text-center">
          <h1 className="mb-4 text-8xl  font-bold text-red-300">404</h1>
          <h3 className="mb-4 text-2xl font-semibold text-red-200">
            Oops! Looks like you&apos;re lost.
          </h3>
          <div className="animate-bounce">
            <svg
              className="mx-auto h-16 w-16 text-red-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              ></path>
            </svg>
          </div>
          <div className="flex justify-center items-center">
            <h4 className=" text-center w-5/6 py-3 text-2xl font-thin font-raleway text-orange-100">
              {quote && quote?.content} <br />
              <span className="font-medium">-{quote && quote.author}</span>
            </h4>
          </div>
          <p className="mt-4 ">
            Let&apos;s get you back{' '}
            <div
              onClick={handleRoute}
              className="font-bold text-blue-300 cursor-pointer hover:underline"
            >
              Home
            </div>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundComp;
