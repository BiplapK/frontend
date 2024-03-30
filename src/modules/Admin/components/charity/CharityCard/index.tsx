import React from 'react';

import Image from 'next/image';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

import Button from '@/modules/core/components/Button';
import Link from 'next/link';

type Props = {
  title: string;
  donation_count: string | null;
  charity_amount: string;
  collected_amount: string | null;
  image_url: string;
  description: string;
  charity_id: string;
  handleDeleteCharity: (charity_id: string) => void;
  handleEditCharity?: (charity_id: string) => void;
};

const CharityCard = ({
  title,
  donation_count,
  charity_amount,
  collected_amount,
  image_url,
  description,
  charity_id,
  handleDeleteCharity,
  handleEditCharity,
}: Props) => {
  const router = usePathname();
  return (
    <div className={clsx('flex justify-start items-start mb-4 mx-2 ')}>
      <div className="w-[250px] max-h-[220px]  h-full flex justify-center items-center relative">
        <Image fill quality={100} alt="charity-image" src={image_url} />
      </div>
      <div className="p-2 w-[300px]">
        <h3 className="text-md font-semibold border-b-orange-100  border-b-[1px] line-clamp-2 overflow-hidden text-ellipsis">
          {title}
        </h3>
        <p className="font-normal py-1 line-clamp-2 overflow-hidden text-ellipsis">
          {description}
        </p>
        <p className="font-normal py-1">
          Donation Amount:
          <span className="font-semibold text-mdl">${charity_amount}</span>
        </p>
        <div className="flex justify-between items-center">
          <p className="font-bookk py-1">
            Collected:
            <span className="font-bold text-md">${collected_amount}</span>
          </p>
          <p className="font-bookk py-1">
            Donation Count:
            <span className="font-bold text-md">{donation_count}</span>
          </p>
        </div>
        <div className="flex justify-end items-center gap-2">
          <Button
            // onClick={() => handleEditCharity(charity_id)}
            size="sm"
            className="text-white-100"
            variant="danger"
          >
            <Link href={`/admin/charity/${charity_id}`}> Edit</Link>
          </Button>
          <Button
            onClick={() => handleDeleteCharity(charity_id)}
            size="sm"
            className="text-white-100"
            variant="warning"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CharityCard;
