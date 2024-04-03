import React from 'react';

import Link from 'next/link';

type Props = {};

const profileNavData = [
  { url: '/profile', title: 'Profile' },
  { url: '/profile/donation', title: 'Donations' },
];
const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container  mx-auto w-full h-screen  p-2">
      <nav className="flex justify-center p-2">
        <ul className="flex justify-start items-center gap-10">
          {profileNavData.map((item) => (
            <li key={item.url}>
              <Link href={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default ProfileLayout;
