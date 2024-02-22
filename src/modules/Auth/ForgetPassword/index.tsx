import Link from 'next/link';
import React from 'react';

type Props = {};

const ForgetPassword = (props: Props) => {
  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4 py-4">
        <label
          className="block  text-gray-700 text-sm font-medium mb-2"
          htmlFor="username"
        >
          Username
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
        />
      </div>

      <div className="flex py-2 items-center flex-col justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Get Reset Link
        </button>
        <Link
          className="mt-4 inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          href="/login"
        >
          Go back to Login?
        </Link>
      </div>
    </form>
  );
};

export default ForgetPassword;
