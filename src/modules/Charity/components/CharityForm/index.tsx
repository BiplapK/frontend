'use client';
import React from 'react';

import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Input from '@/modules/core/components/Input';
import TextArea from '@/modules/core/components/TextArea';
import Button from '@/modules/core/components/Button';
import Select from '@/modules/core/components/Select';
import useAuth from '@/modules/core/hooks/useAuth';
import useQuote from '@/modules/core/hooks/useQuote';
import UnAuthorizedUser from '@/modules/core/components/UnAuthorizedUser';
import { addCharity } from '../../services/charity';
import { toast } from 'react-toastify';

type Props = {
  data: any;
  option: Array<{ label: string; value: string }> | [];
};

const CharityForm = ({ data, option }: Props) => {
  const { data: profileData } = useAuth();
  const { quote } = useQuote();
  console.log('🚀 ~ CharityForm ~ quote:', quote);
  console.log('🚀 ~ CharityForm ~ profileData:', profileData);

  const validationSchema = Yup.object().shape({
    user_id: Yup.string(),
    charity_id: Yup.string().required('Chairty must be selected '),
    donor_name: Yup.string().required('Subject is Required'),
    donor_message: Yup.string().required('Message is Required'),
    donation_amount: Yup.string().required('Donation Amount is Required'),
  });

  const formik = useFormik({
    initialValues: {
      user_id: !!profileData ? profileData.id : '',
      charity_id: '',
      donor_name: '',
      donor_message: '',
      donation_amount: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log('🚀 ~ CharityForm ~ values:', values);
      addCharity(values)
        .then((res) => {
          console.log(res);
          toast.success('Added');
        })
        .catch((error) => {
          toast.error('error');
        });
      resetForm();
    },
  });

  console.log(formik);
  return (
    <div className=" shadow-md p-5 mt-10">
      <h3 className="text-2xl text-maron-100 p-2 text-center  font-semibold">
        Help Us
      </h3>
      {!!profileData ? (
        <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-1 gap-1">
            <Input
              name="user_id"
              type="text"
              customLabel="User ID"
              value={formik.values.user_id || ''}
              onChange={formik.handleChange}
              error={formik.errors.user_id}
              onBlur={formik.handleBlur}
              disabled
            />

            <Select
              customLabel="Select Charity"
              name="charity_id"
              options={option}
              value={formik.values.charity_id || null}
              error={formik.errors.charity_id}
              onChange={(e) => formik.setFieldValue('charity_id', e.value)}
              defaultValue=""
            />

            <Input
              name="donor_name"
              customLabel="Donor Name"
              type="text"
              value={formik.values.donor_name}
              onChange={formik.handleChange}
              error={formik.errors.donor_name}
              onBlur={formik.handleBlur}
            />
            <Input
              name="donation_amount"
              customLabel="Donation Amount"
              type="text"
              value={formik.values.donation_amount}
              onChange={formik.handleChange}
              error={formik.errors.donation_amount}
              onBlur={formik.handleBlur}
            />
            <TextArea
              name="donor_message"
              customLabel="Donor Message"
              value={formik.values.donor_message}
              onChange={formik.handleChange}
              error={formik.errors.donor_message}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="flex justify-start">
            <Button
              variant="warning"
              type="submit"
              className=" uppercase text-white-100"
              rounded="md"
            >
              Donate
            </Button>
          </div>
        </form>
      ) : (
        <UnAuthorizedUser />
      )}
    </div>
  );
};

export default CharityForm;
