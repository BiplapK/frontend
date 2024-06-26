'use client';
import React from 'react';

import { useRouter } from 'next/navigation';
import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';

import useAuth from '@/modules/core/hooks/useAuth';
import { navigationLinks } from '@/staticData/navbar';
import { publicAxios } from '@/modules/core/utils/axios';

import Button from '../../Button';
import { toast } from 'react-toastify';

type Props = {};

const Navbar = (props: Props) => {
  const [scroll, setScroll] = React.useState(false);
  const [showDropDown, setShowDropdown] = React.useState(false);
  const [authData, setAuthData] = React.useState(false);

  const router = useRouter();
  const { data } = useAuth();
  // console.log('🚀 ~ Header ~ data:', data);
  // console.log('🚀 ~ Header ~ data:', Boolean(data));

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 100);
    });
  });

  React.useEffect(() => {
    setAuthData;
  }, []);

  const handleSms = () => {
    publicAxios
      .get('/send-email')
      .then((res) => {
        toast.success(res?.data);
      })
      .catch((error) => {
        toast.error('something went wrong');
      });
  };
  return (
    <header
      className={clsx(
        'py-[15px] bg-white-100 w-full transition ease-in-out delay-1000',
        scroll ? 'sticky top-0 z-10' : null
      )}
    >
      <nav className="container mx-auto grid grid-cols-1 lg:grid-cols-4 items-center">
        <div className="flex justify-between items-center">
          <Image
            src={'/logo-regular-free-img.png'}
            width={150}
            alt="logo-image"
            height={65}
            quality={100}
          />

          <div
            className="block lg:hidden cursor-pointer"
            onClick={() => setShowDropdown((prev) => !prev)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>

        <div
          className={clsx(
            'col-span-3 lg:block',
            showDropDown ? 'block' : 'hidden'
          )}
        >
          <div
            className={clsx(
              'lg:grid col-span-3 grid-cols-1 justify-items-center lg:grid-cols-3 gap-3 items-center',
              showDropDown ? 'block' : 'hidden'
            )}
          >
            <ul className=" md:col-span-3 lg:col-span-3 xl:col-span-2 inline-block lg:flex gap-3 font-poppins font-normal text-[14px] items-center">
              {navigationLinks.map((item) => (
                <li key={item.path} className="cursor-pointer py-2 px-2 md:p-0">
                  <Link href={item.path} className="px-2">
                    {item.title}
                  </Link>
                </li>
              ))}
              <li>
                <Button
                  variant="success-outline"
                  rounded="full"
                  size="sm"
                  onClick={handleSms}
                >
                  Send Sms
                </Button>
              </li>
            </ul>
            <div className="grid md:hidden xl:grid  grid-cols-2 gap-2">
              {!Boolean(data) ? (
                <>
                  <Button
                    variant="success-outline"
                    rounded="full"
                    size="sm"
                    className="font-bold font-raleway"
                    onClick={() => router.push('/login')}
                  >
                    Log In
                  </Button>
                  <Button
                    variant="primary-outline"
                    rounded="full"
                    size="sm"
                    className="font-bold font-raleway"
                    onClick={() => router.push('/create-account')}
                  >
                    Sign Up
                  </Button>
                </>
              ) : data?.role === 'user' ? (
                <Link href={'/profile'}>Profile</Link>
              ) : (
                <Link href={'/admin'}>Dashboard</Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
