'use client';
import React from 'react';

import { toast } from 'react-toastify';

import { publicAxios } from '@/modules/core/utils/axios';

import { TestimonialType } from '../../types/testimonial.types';
import TestimonialCard from '../../components/Testimonial/TestimonialCard';
import testimonialRevalidate from '../../components/Testimonial/TestimonialCard/action';

type Props = {
  data: Array<TestimonialType>;
};

const Testimonial = ({ data }: Props) => {
  // console.log('🚀 ~ Testimonial ~ data:', data);
  const deleteTestimonialData = async (id: string) => {
    await publicAxios
      .delete(`/testimonial/delete/${id}`)
      .then((res) => {
        toast.success(res.data.message);
        testimonialRevalidate();
      })
      .catch((error) => toast.error(error.response.data.message));
  };
  return (
    <div className="grid grid-cols-3 gap-3">
      {data.map((item) => (
        <TestimonialCard
          key={item.testimonial_id}
          content={item.content}
          customer_name={item.customer_name}
          email={item.email}
          rating={item.rating}
          testimonial_id={item.testimonial_id}
          handleDeleteContact={deleteTestimonialData}
        />
      ))}
    </div>
  );
};

export default Testimonial;
