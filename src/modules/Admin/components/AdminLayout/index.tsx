'use client';
import React from 'react';

import Link from 'next/link';
import clsx from 'clsx';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';

import { deleteCookie } from '@/modules/core/utils/cookies';

import useProfile from '../../hooks/useProfile';

type NavDatatype = {
  title: string;
  path: string;
  parent: string;
};
const AdminTemplate = ({
  children,
  navData,
}: {
  children: React.ReactNode;
  navData: Array<NavDatatype>;
}) => {
  const { data } = useProfile();

  const [showSidebar, setShowSidebar] = React.useState<boolean>(true);
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    deleteCookie('admin-key');
    deleteCookie('role');
    router.refresh();
    router.push('/');
  };
  return (
    <div className="flex h-screen bg-white-100">
      <div
        className={clsx(
          'hidden flex-col w-64  border-r-[1px] border-black-200',
          showSidebar ? 'md:flex' : 'md:hidden'
        )}
      >
        <div className="flex items-center justify-center h-18 p-2">
          {/* <span className="text-white font-bold uppercase">Sidebar</span> */}
          <div className="p-1 h-[60px] w-[160px] overflow-hidden">
            <Image
              alt="logo-img"
              src="/logo-regular-free-img.png"
              height={80}
              width={180}
              quality={100}
            />
          </div>
        </div>
        <div className="flex flex-col flex-1 overflow-y-auto">
          <nav className="flex-1 px-2 py-4 bg-gray-800">
            {navData.map((item) => (
              <Link
                key={item.path}
                href={`${item.path}`}
                className={clsx(
                  'flex items-center px-4 py-2 text-black-100 font-semibold hover:text-black-300 border-b-[1px]  border-orange-200',
                  pathname.includes(item.path)
                    ? 'text-orange-100 hover:text-orange-200'
                    : null
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
          <div className="flex items-center px-4">
            <button
              className="text-gray-500 focus:outline-none focus:text-gray-700"
              onClick={() => setShowSidebar((prev) => !prev)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center pr-12">
            {/* <button className="flex items-center text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"> */}
            <div className="flex items-center pr-5">
              <div className="flex items-center ms-3">
                <div className="flex items-center justify-between">
                  <ul className="flex">
                    <li>
                      <div className="block px-4 py-2 cursor-pointer text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">
                        {data?.username}
                      </div>
                    </li>
                    <li>
                      <div
                        className="block px-4 py-2 cursor-pointer text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={handleLogout}
                      >
                        Sign out
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* </button> */}
          </div>
        </div>
        <div className="p-4">
          {/* <h1 className="text-2xl font-bold">Welcome to my dashboard!</h1>
          <p className="mt-2 text-gray-600">
            This is an example dashboard using Tailwind CSS.
          </p> */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminTemplate;
