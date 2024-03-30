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
        className="block  text-black-100 text-sm font-bold mb-2 capitalize"
        htmlFor={name}
      >
        {name}
      </label>
      <input
        className={clsx(
          'shadow appearance-none border rounded w-full py-2 px-3 text-black-100 leading-tight focus:outline-none focus:shadow-outline',
          error ? 'border-red-500' : null
        )}
        id={name}
        type={type}
        placeholder={name}
        ref={ref}
        {...rest}
      />
      {error && (
        <p className="text-danger-100 text-xs p-1 italic capitalize">{error}</p>
      )}
    </div>
  );
};

export default Input;
