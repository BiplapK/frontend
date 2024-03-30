'use client';
import React from 'react';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import { getCookie, setCookie } from '@/modules/core/utils/cookies';
import Button from '@/modules/core/components/Button';
import Input from '@/modules/core/components/Input';
import profileRevalidate from '@/modules/core/components/Header/action';

import { login } from './services/auth';

type Props = {};

const Login = (props: Props) => {
  const router = useRouter();
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Please enter a valid email')
      .required('Required'),
    password: Yup.string()
      .required('No password provided.')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      login(values)
        .then((res) => {
          setCookie('admin-key', res && res.data.token, 30);
          setCookie('role', res && res.data.role, 30);
          toast.success(res.data.message);
          profileRevalidate();
          router.push('/');
          resetForm();
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        });
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 h-[75vh]"
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
      <div className="flex items-center justify-between">
        <Button
          size="md"
          rounded="md"
          variant="warning"
          className="font-medium text-white-200"
        >
          Sign In
        </Button>
        <Button
          variant="danger"
          rounded="full"
          size="sm"
          className="text-white-100"
        >
          Hello Manish
        </Button>
        <Link
          className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          href="/forget-password"
        >
          Forgot Password?
        </Link>
      </div>
    </form>
  );
};

export default Login;
