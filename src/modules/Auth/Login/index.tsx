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
  const [tokenData, setTokenData] = React.useState<{
    role: string;
    token: string;
  } | null>(null);
  // console.log('🚀 ~ Login ~ tokenData:', tokenData);
  const router = useRouter();

  React.useLayoutEffect(() => {
    setCookie('admin-key', (tokenData && tokenData.token) || '', 30);
    setCookie('role', (tokenData && tokenData?.role) || '', 30);
  }, [tokenData]);
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
          setTokenData(res && res.data);
          toast.success(res.data.message);
          profileRevalidate();
          router.push('/');
          resetForm();
        })
        .catch((error) => {
          console.log(error);
          toast.error(error.response?.data?.message);
        });
    },
  });

  return (
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
      <div className="flex items-center justify-between">
        <Button
          size="md"
          rounded="md"
          variant="success"
          className="font-medium text-white-200"
        >
          Log In
        </Button>
        <Link
          className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          href="/create-account"
        >
          Create Account
        </Link>
      </div>
    </form>
  );
};

export default Login;
