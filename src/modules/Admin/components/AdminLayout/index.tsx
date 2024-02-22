'use client';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import { ProfileDataType } from '../../types/profile.types';
import useProfile from '../../hooks/useProfile';
import { deleteCookie } from '@/modules/core/utils/cookies';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

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
  const [showProfile, setShowProfile] = React.useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();
  // console.log("🚀 ~ pathname:", pathname);

  const handleLogout = () => {
    deleteCookie('admin-key');
    router.refresh();
    router.push('/');
  };
  return (
    <div className="flex h-screen bg-gray-100">
      <div
        className={clsx(
          'hidden flex-col w-64 bg-gray-800',
          showSidebar ? 'md:flex' : 'md:hidden'
        )}
      >
        <div className="flex items-center justify-center h-16 bg-gray-900">
          <span className="text-white font-bold uppercase">Sidebar</span>
        </div>
        <div className="flex flex-col flex-1 overflow-y-auto">
          <nav className="flex-1 px-2 py-4 bg-gray-800">
            {navData.map((item) => (
              <Link
                key={item.path}
                href={`${item.path}`}
                className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {item.title}
              </Link>
            ))}
            {/* <Link
              href="/"
              className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              Dashboard
            </Link>
            <Link
              href="/notice"
              className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              Notices
            </Link>
            <Link
              href="/"
              className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Settings
            </Link> */}
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center pr-12">
            {/* <button className="flex items-center text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"> */}
            <div className="flex items-center pr-10">
              <div className="flex items-center ms-3">
                <div>
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    //   aria-expanded="false"
                    //   data-dropdown-toggle="dropdown-user"
                    onClick={() => setShowProfile((prev) => !prev)}
                  >
                    <span className="sr-only">Open user menu</span>
                    {/* <img
                        className="w-8 h-8 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                        alt="user-photo"
                      /> */}
                    <Image
                      src={''}
                      alt="no-image"
                      className="w-8 h-8 rounded-full"
                    />
                  </button>
                </div>
                <div
                  className={clsx(
                    ' absolute top-12 right-2 bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600',
                    showProfile ? 'block' : 'hidden'
                  )}
                  // id="dropdown-user"
                >
                  <div className="px-4 py-3" role="none">
                    {}
                    <p
                      className="text-sm text-gray-900 dark:text-white"
                      role="none"
                    >
                      {data && data?.full_name}
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <div
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
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
          <h1 className="text-2xl font-bold">Welcome to my dashboard!</h1>
          <p className="mt-2 text-gray-600">
            This is an example dashboard using Tailwind CSS.
          </p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminTemplate;
