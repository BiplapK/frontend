import type { Metadata } from 'next';
import { Raleway, Poppins } from 'next/font/google';

import '../styles/style.scss';
import DataProvider from '@/providers/DataProvider';
import AuthProvider from '@/providers/AuthProvider';
import ToastProvider from '@/providers/ToastProvider';
import { getProfileData } from '@/modules/Admin/services/profile';
import LayoutProvider from '@/providers/LayoutProvider';

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  weight: ['200', '400', '600', '800'],
  style: ['normal', 'italic'],
  variable: '--font-raleway',
});

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['200', '400', '600', '800'],
  style: ['normal', 'italic'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Charity Application | LBEF Sixth Sem',
  description:
    'This is the Description of Charity App Built by 6th Sem students of LBEF',
  icons: {
    icon: '/logo-regular-free-img.png',
  },
};
const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const profileData = await getProfileData();

  return (
    <html lang="en" className={`${raleway.variable} ${poppins.variable} dark`}>
      <body>
        <AuthProvider data={profileData || {}}>
          <LayoutProvider>
            <ToastProvider />
            <DataProvider>{children}</DataProvider>
          </LayoutProvider>
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
