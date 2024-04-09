import React from 'react';

import clsx from 'clsx';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: 'text' | 'email' | 'password' | 'file';
  error?: any;
  ref?: any;
  customLabel?: string;
}

const Input = ({
  name,
  type = 'text',
  error,
  customLabel,
  ref,
  ...rest
}: InputProps) => {
  return (
    <div className="mb-2">
      <label
        className="block  text-black-200 text-base font-medium mb-2 capitalize"
        htmlFor={name}
      >
        {Boolean(customLabel) ? customLabel : name}
      </label>
      <input
        className={clsx(
          '  border border-black-400 bg-white-400 rounded w-full py-[10px] px-3 text-black-100 leading-tight focus:ring-white-400 focus:border-white-400 focus:outline-black-400',
          error ? 'border-red-200' : null
        )}
        id={name}
        type={type}
        placeholder={name}
        ref={ref}
        {...rest}
      />
      {error && <p className="text-red-200 text-md pt-1 italic">{error}</p>}
    </div>
  );
};

export default Input;
