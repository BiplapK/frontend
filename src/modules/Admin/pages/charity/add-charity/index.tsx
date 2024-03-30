'use client';
import React from 'react';

import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

import Button from '@/modules/core/components/Button';
import Input from '@/modules/core/components/Input';
import { addCharity } from '@/modules/Admin/services/charity';
import charityRevalidate from '@/modules/Admin/components/charity/CharityCard/action';

type Props = {};

const AddCharity = (props: Props) => {
  const router = useRouter();
  const handleFileUpload = async (data: any) => {
    console.log(data, 'dd');
    formik.setFieldValue('image_url', data);
  };

  const fileRef = React.useRef(null);

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    image_url: Yup.mixed(),
    charity_amount: Yup.string().required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      image_url: null,
      charity_amount: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      addCharity(values)
        .then((res) => {
          toast.success(res.data.message);
          charityRevalidate();
          router.push('/admin/charity');
          resetForm();
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        });
    },
  });
  return (
    <div className="p-2">
      <div className="w-full flex justify-end">
        <Button variant="normal">
          <Link href={'/admin/charity'}>Go Back to Charity page</Link>
        </Button>
      </div>
      <div className="py-5 w-5/6">
        <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <Input
              name="title"
              type="text"
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.errors.title}
              onBlur={formik.handleBlur}
            />
            <Input
              name="description"
              type="text"
              value={formik.values.description}
              onChange={formik.handleChange}
              error={formik.errors.description}
              onBlur={formik.handleBlur}
            />
            <Input
              name="image_url"
              type="file"
              accept=".png,.jpg,.jpeg"
              //   value={formik.values.image_url}
              ref={fileRef}
              onChange={(e) => handleFileUpload(e.target.files?.[0])}
              error={formik.errors.image_url}
              //   onBlur={formik.handleBlur}
            />
            <Input
              name="charity_amount"
              type="text"
              value={formik.values.charity_amount}
              onChange={formik.handleChange}
              error={formik.errors.charity_amount}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="flex justify-start">
            <Button variant="warning" type="submit">
              Create Chariyt
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCharity;
