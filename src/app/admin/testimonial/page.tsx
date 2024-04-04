import React from 'react';

import Testimonial from '@/modules/Admin/pages/testimonial';
import { getALlTestimonial } from '@/modules/Admin/services/testimonial';

type Props = {};

const TestimonialPage = async (props: Props) => {
  const data = await getALlTestimonial();
  const { data: testimonialData } = data;

  return <Testimonial data={testimonialData.result} />;
};

export default TestimonialPage;
