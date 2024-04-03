import React from 'react';

import clsx from 'clsx';

interface InputProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  error?: string;
  rows?: number;
}

const TextArea = ({ name, error, rows = 4, ...rest }: InputProps) => {
  return (
    <div className="mb-4">
      <label
        className="block  text-black-200 text-md font-medium mb-2 capitalize"
        htmlFor={name}
      >
        {name}
      </label>
      <textarea
        name=""
        rows={rows}
        className={clsx(
          '  border border-black-400 bg-white-400 rounded w-full py-3 px-3 text-black-100 leading-tight focus:ring-white-400 focus:border-white-400 focus:outline-black-400',
          error ? 'border-red-200' : null
        )}
        id={name}
        placeholder={name}
        {...rest}
      />
      {error && <p className="text-red-200 text-md p-1 italic">{error}</p>}
    </div>
  );
};

export default TextArea;
