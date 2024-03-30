import React from 'react';

import clsx from 'clsx';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  rounded?: 'full' | 'md' | 'sm' | 'none';
  size?: 'xl' | 'md' | 'sm';
  variant:
    | 'danger'
    | 'danger-outline'
    | 'normal'
    | 'normal-outline'
    | 'warning'
    | 'warning-outline'
    | 'black'
    | 'black-outline'
    | 'success'
    | 'success-outline'
    | 'primary'
    | 'primary-outline';
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button';
};

const Button = ({
  children,
  className,
  rounded = 'sm',
  variant = 'normal',
  size = 'md',
  type = 'submit',
  onClick,
  ...rest
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(
        'py-2 px-4 cursor-pointer',
        size === 'xl' ? 'px-10 py-3 text-[18px]' : null,
        size === 'md' ? 'px-8 py-2 text-[16px]' : null,
        size === 'sm' ? 'px-4 py-1 text-sm' : null,
        rounded === 'full' ? 'rounded-full' : null,
        rounded === 'md' ? 'rounded-md' : null,
        rounded === 'sm' ? 'rounded-sm' : null,
        rounded === 'none' ? 'rounded-none' : null,
        variant === 'danger' ? 'bg-red-100 hover:bg-red-200 text-white' : null,
        variant === 'danger-outline'
          ? ' border-2 border-red-200 hover:bg-red-200 text-red-200 hover:text-white-100'
          : null,
        variant === 'success'
          ? 'bg-green-200 hover:bg-green-300 text-white'
          : null,
        variant === 'success-outline'
          ? ' border-2 border-green-200 hover:bg-green-300 text-green-300 hover:text-white-100'
          : null,
        variant === 'primary'
          ? 'bg-blue-200 hover:bg-blue-300 text-white'
          : null,
        variant === 'primary-outline'
          ? ' border-2 border-blue-200 hover:bg-blue-300 text-blue-300 hover:text-white-100'
          : null,
        variant === 'normal'
          ? 'bg-white-300 hover:bg-blue-200 text-white'
          : null,
        variant === 'normal-outline'
          ? ' border-2 border-white-300 hover:bg-orange-100 text-orange-100 hover:text-white-300'
          : null,
        variant === 'warning'
          ? 'bg-orange-100 hover:bg-orange-200 text-white'
          : null,
        variant === 'warning-outline'
          ? ' border-2 border-orange-100 hover:bg-orange-100 text-orange-100 hover:text-white-100'
          : null,
        variant === 'black'
          ? 'bg-black-100 hover:bg-black-100 text-white-100'
          : null,
        variant === 'black-outline'
          ? ' border-2 border-black-100 hover:bg-black-200 text-black-100 hover:text-white-100'
          : null,
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
