import clsx from 'clsx';
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  rounded?: 'full' | 'md' | 'sm' | 'none';
  size?: 'xl' | 'md' | 'sm';
  variant:
    | 'danger'
    | 'danger-outline'
    | 'success'
    | 'success-outline'
    | 'warning'
    | 'warning-outline'
    | 'black'
    | 'black-outline'
    | 'primary'
    | 'primary-outline';
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button';
};

const Button = ({
  children,
  className,
  rounded = 'sm',
  variant = 'success',
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
        variant === 'danger' ? 'bg-red-600 hover:bg-red-500 text-white' : null,
        variant === 'danger-outline'
          ? ' border-2 border-red-600 hover:bg-red-600 text-red-600 hover:text-white'
          : null,
        variant === 'success'
          ? 'bg-green-600 hover:bg-green-500 text-white'
          : null,
        variant === 'success-outline'
          ? ' border-2 border-green-600 hover:bg-green-600 text-green-600 hover:text-white'
          : null,
        variant === 'warning'
          ? 'bg-yellow-600 hover:bg-yellow-500 text-white'
          : null,
        variant === 'warning-outline'
          ? ' border-2 border-yellow-600 hover:bg-yellow-600 text-yellow-600 hover:text-white'
          : null,
        variant === 'black' ? 'bg-black hover:bg-black text-white' : null,
        variant === 'black-outline'
          ? ' border-2 border-black hover:bg-black text-black hover:text-white'
          : null,
        variant === 'primary'
          ? 'bg-blue-600 hover:bg-blue-500 text-white'
          : null,
        variant === 'primary-outline'
          ? ' border-2 border-blue-500 hover:bg-blue-500 text-blue-600 hover:text-white'
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
