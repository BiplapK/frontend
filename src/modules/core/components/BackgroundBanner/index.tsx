import React from 'react';

import clsx from 'clsx';

import Button from '../Button';

type IProps = {
  bannerTitle: string;
  title?: string;
  description?: string;
  contentColor?: string;
  hasButton?: boolean;
  buttonComponent?: React.ReactNode;
  background?: {
    [name: string]: string;
  };
  children?: React.ReactNode;
};

const BackgroundBanner = (props: IProps) => {
  const {
    bannerTitle = '',
    title = '',
    description = '',
    contentColor = 'text-black-100',
    hasButton = false,
    buttonComponent,
    background,
    children,
  } = props;

  const backgroundStyles: React.CSSProperties = {
    ...background, // Apply all background styles
  };
  return (
    <section
      className={clsx(' h-[60vh] flex justify-center items-center')}
      style={backgroundStyles}
    >
      <div className="flex flex-col w-6/12">
        <h3
          className={clsx(
            'text-4xl font-bold uppercase text-center',
            contentColor
          )}
        >
          {bannerTitle}
        </h3>
        <div className=" py-4 px-8">
          <h4
            className={clsx('text-2xl font-bold text-center p-4', contentColor)}
          >
            {title}
          </h4>

          <p
            className={clsx(
              'text-md font-light px-4 pb-4 text-center',
              contentColor
            )}
          >
            {description}
          </p>
        </div>
        {hasButton ? (
          <div className="text-center">{buttonComponent}</div>
        ) : null}
      </div>
      {children}
    </section>
  );
};

export default BackgroundBanner;
