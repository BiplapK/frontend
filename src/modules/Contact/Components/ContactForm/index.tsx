'use client';

import React from 'react';

import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

import Input from '@/modules/core/components/Input';
import TextArea from '@/modules/core/components/TextArea';
import Button from '@/modules/core/components/Button';

import { postContactData } from '../../services';

type Props = {};

const ContactForm = (props: Props) => {
  const validationSchema = Yup.object().shape({
    full_name: Yup.string().required('Fullname is Required'),
    email: Yup.string().email().required('Email is Required'),
    subject: Yup.string().required('Subject is Required'),
    message: Yup.string().required('Message is Required'),
  });

  const formik = useFormik({
    initialValues: {
      full_name: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      postContactData(values)
        .then((res) => {
          toast.success(res.data.message);
          resetForm();
        })
        .catch(() => {});
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-1 gap-1">
          <Input
            name="full_name"
            type="text"
            customLabel="Full Name"
            value={formik.values.full_name}
            onChange={formik.handleChange}
            error={formik.errors.full_name}
            onBlur={formik.handleBlur}
          />

          <Input
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.errors.email}
            onBlur={formik.handleBlur}
          />

          <Input
            name="subject"
            type="text"
            value={formik.values.subject}
            onChange={formik.handleChange}
            error={formik.errors.subject}
            onBlur={formik.handleBlur}
          />
          <TextArea
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            error={formik.errors.message}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="flex justify-end">
          <Button
            variant="success-outline"
            type="submit"
            className=" uppercase"
            rounded="md"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
