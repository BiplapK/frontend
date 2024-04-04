export type TestimonialDataType = {
  result: Array<TestimonialType>;
};

export type TestimonialType = {
  testimonial_id: string;
  email: string;
  content: string;
  customer_name: string;
  rating: string;
};
