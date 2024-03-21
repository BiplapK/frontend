'use client';

import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image';
import clsx from 'clsx';
import { Virtual, Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { sliderImageOne } from '@/staticData/homepage';
type Props = {
  data: typeof sliderImageOne;
  hasTitle?: boolean;
  title?: string;
  titleColor?: string;
  bgColor?: string;
};

const Slider = ({ data, hasTitle, title, titleColor, bgColor }: Props) => {
  const [swiperRef, setSwiperRef] = React.useState<any>(null);
  return (
    <section className={clsx(hasTitle ? `${bgColor} bg-maron-200 py-2` : null)}>
      {hasTitle ? (
        <h3 className={clsx('text-4xl text-center font-bold', titleColor)}>
          {title}
        </h3>
      ) : null}
      <Swiper
        modules={[Virtual, Navigation, Autoplay]}
        onSwiper={setSwiperRef}
        slidesPerView={4}
        centeredSlides={true}
        autoplay={{
          delay: 200,
          disableOnInteraction: false,
        }}
        spaceBetween={0}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        virtual
        className="h-[40vh]"
      >
        {data.map((el) => (
          <SwiperSlide key={el.id} className="h-[50vh] bg-maron-200">
            <Image
              alt="image"
              src={el.imageUrl}
              quality={100}
              fill
              className="object-fill"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
