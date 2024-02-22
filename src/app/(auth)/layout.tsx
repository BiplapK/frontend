import React from 'react';

type Props = {};

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-screen flex p-2">
      <div className="w-full max-w-xl m-auto">
        <div className=" rounded-t-md  p-4 bg-blue-500">
          <h2 className="text-4xl font-bold font-raleway">W Company Name</h2>
        </div>
        {children}
        <p className="text-center text-gray-500 text-xs">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
