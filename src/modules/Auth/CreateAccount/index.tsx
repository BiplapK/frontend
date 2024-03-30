'use client';
import React from 'react';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

// import ReactSelect from '@/modules/core/components/ReactSelect';
import Input from '@/modules/core/components/Input';
import Button from '@/modules/core/components/Button';

import { signup } from '../Login/services/auth';

type Props = {};

const CreateAccount = (props: Props) => {
  const router = useRouter();
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Please enter a valid email')
      .required('Required'),
    password: Yup.string()
      .required('No password provided.')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    username: Yup.string().required('No username provided.'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      username: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      signup(values)
        .then((res) => {
          toast.success(res.data.message);
          router.push('/');
          resetForm();
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        });
    },
  });
  return (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <Input
          name="email"
          type="text"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.errors.email}
          onBlur={formik.handleBlur}
        />
        <Input
          name="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors.password}
          onBlur={formik.handleBlur}
        />
        <Input
          name="username"
          type="text"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.errors.username}
          onBlur={formik.handleBlur}
        />

        <div className="flex items-center justify-between">
          <Button
            size="md"
            rounded="md"
            variant="success"
            className="font-medium text-white-200"
          >
            Create Account
          </Button>
          <Link
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="/login"
          >
            Go back to Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default CreateAccount;
