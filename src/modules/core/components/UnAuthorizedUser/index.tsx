import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

type Props = {};

const UnAuthorizedUser = (props: Props) => {
  return (
    <div className="relative bg-white-100 px-6 pb-8 pt-10 shadow-xl ring-1 ring-black-400/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
      <div className="divide-y divide-white-300">
        <div className="text-center flex justify-center flex-col items-center text-base font-semibold leading-7">
          <Image
            alt="unauthorized"
            src={'/unauthorized.png'}
            quality={100}
            width={100}
            height={100}
          />
          <p className="text-orange-400">Unauthorized User Detected !!</p>
          <p className="text-orange-400">Want to Donate?</p>
          <p>
            <Link href="/login" className="text-blue-400 hover:text-blue-300">
              Login First &rarr;
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnAuthorizedUser;
