import clsx from 'clsx';
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: 'text' | 'email' | 'password';
  error?: string;
}

const Input = ({ name, type = 'text', error, ...rest }: InputProps) => {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2 capitalize"
        htmlFor={name}
      >
        {name}
      </label>
      <input
        className={clsx(
          'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
          error ? 'border-red-500' : null
        )}
        id={name}
        type={type}
        placeholder={name}
        {...rest}
      />
      {error && (
        <p className="text-red-500 text-xs p-1 italic capitalize">{error}</p>
      )}
    </div>
  );
};

export default Input;
