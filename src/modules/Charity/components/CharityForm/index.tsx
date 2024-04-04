'use client';
import React from 'react';

import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Input from '@/modules/core/components/Input';
import TextArea from '@/modules/core/components/TextArea';
import Button from '@/modules/core/components/Button';

type Props = {
  data: any;
};

const CharityForm = ({ data }: Props) => {
  //   const [charityOption, setCharityOption] = React.useState([]);
  //   const [userId, setUserId] = React.useState<null | string>(null);
  //   const { data: profileData } = useAuth();

  //   React.useEffect(() => {
  //     const fetchCharityData = () => {
  //       getAllCharitySelect()
  //         .then((res) => setCharityOption(res.data.data))
  //         .catch((error) => error);
  //     };
  //     fetchCharityData();
  //     setUserId(profileData && profileData?.id);
  //   }, [profileData]);
  //   console.log('🚀 ~ CharityForm ~ userId:', userId);
  //   console.log('🚀 ~ CharityForm ~ profileData:', profileData);
  //   console.log('🚀 ~ CharityForm ~ charityOption:', charityOption);
  //   console.log('🚀 ~ CharityForm ~ charityID:', data);
  const validationSchema = Yup.object().shape({
    user_id: Yup.string().required('Fullname is Required'),
    charity_id: Yup.string().email().required('Email is Required'),
    donor_name: Yup.string().required('Subject is Required'),
    donor_message: Yup.string().required('Message is Required'),
    donation_amount: Yup.string().required('Message is Required'),
  });

  const formik = useFormik({
    initialValues: {
      user_id: '',
      charity_id: '',
      donor_name: '',
      donor_message: '',
      donation_amount: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log('🚀 ~ CharityForm ~ values:', values);
    },
  });
  return (
    <div className="">
      <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-1 gap-1">
          <Input
            name="user_id"
            type="text"
            customLabel="User ID"
            value={formik.values.user_id}
            onChange={formik.handleChange}
            error={formik.errors.user_id}
            onBlur={formik.handleBlur}
          />

          <Input
            name="charity_id"
            customLabel="Charity ID"
            type="text"
            value={formik.values.charity_id}
            onChange={formik.handleChange}
            error={formik.errors.charity_id}
            onBlur={formik.handleBlur}
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
    </div>
  );
};

export default CharityForm;
