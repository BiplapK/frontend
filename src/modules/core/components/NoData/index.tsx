import React from 'react';

type Props = {
  customMessage?: React.ReactNode;
  className?: string;
};

const NoData = ({ customMessage, className }: Props) => {
  return (
    <section className="container m-auto p-3 flex justify-center items-center h-[30vh]">
      <div className="">
        <h2 className="text-5xl font-bold text-center text-maron-300">
          No Data !!
        </h2>
        {customMessage}
      </div>
    </section>
  );
};

export default NoData;
