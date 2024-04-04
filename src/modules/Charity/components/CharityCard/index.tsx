import React from 'react';

import Button from '@/modules/core/components/Button';

type Props = {
  title: string;
  description: string;
};

const CharityCard = ({ title, description }: Props) => {
  return (
    <div className="relative flex flex-col mt-6  bg-white-100 shadow-md bg-clip-border rounded-xl h-56">
      <div className="p-6">
        <h5 className=" mb-2 font-poppins text-xl antialiased font-semibold leading-snug tracking-normal line-clamp-1 overflow-hidden text-ellipsis text-maron-200">
          {title}
        </h5>
        <p className=" font-sans line-clamp-2 overflow-hidden text-ellipsis">
          {description}
        </p>
      </div>
      <div className="absolute bottom-0 p-6 pt-0">
        <Button variant="primary-outline" className="" type="button">
          Read More
        </Button>
      </div>
    </div>
  );
};

export default CharityCard;
