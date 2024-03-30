'use client';
import React from 'react';

import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

import Button from '@/modules/core/components/Button';
import Input from '@/modules/core/components/Input';
import { addCharity, updateCharity } from '@/modules/Admin/services/charity';
import charityRevalidate from '@/modules/Admin/components/charity/CharityCard/action';
import { CharityType } from '@/modules/Admin/types/charity.types';
import { publicAxios } from '@/modules/core/utils/axios';

type Props = {
  data?: CharityType;
  edit?: boolean;
  id?: string;
};

const AddCharity = ({ data, edit = false, id }: Props) => {
  const router = useRouter();
  const handleFileUpload = async (data: any) => {
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
      title: edit ? data && data.title : '',
      description: edit ? data && data.description : '',
      image_url: edit ? data && data.image_url : null,
      charity_amount: edit ? data && data.charity_amount : '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      Boolean(edit)
        ? publicAxios
            .put(`/charity/update/${id}`, values)
            .then((res) => {
              toast.success(res.data.message);
              charityRevalidate();
              router.push('/admin/charity');
              resetForm();
            })
            .catch((error) => {
              toast.error(error.response.data.message);
            })
        : addCharity(values)
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
        <Button variant="danger" className="text-white-100">
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
            {!edit && (
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
            )}
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
            <Button variant="success" type="submit" className="text-white-100">
              {edit ? 'Update Charity' : 'Create Charity'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCharity;
