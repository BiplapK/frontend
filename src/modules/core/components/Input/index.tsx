import React from 'react';

import clsx from 'clsx';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: 'text' | 'email' | 'password' | 'file';
  error?: string;
  ref?: any;
}

const Input = ({ name, type = 'text', error, ref, ...rest }: InputProps) => {
  return (
    <div className="mb-4">
      <label
        className="block  text-black-200 text-md font-medium mb-2 capitalize"
        htmlFor={name}
      >
        {name}
      </label>
      <input
        className={clsx(
          '  border border-black-400 bg-white-400 rounded w-full py-3 px-3 text-black-100 leading-tight focus:ring-white-400 focus:border-white-400 focus:outline-black-400',
          error ? 'border-red-200' : null
        )}
        id={name}
        type={type}
        placeholder={name}
        ref={ref}
        {...rest}
      />
      {error && <p className="text-red-200 text-md p-1 italic">{error}</p>}

      {/* <input
        type="text"
        id="first_name"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="John"
        required
      /> */}
    </div>
  );
};

export default Input;
