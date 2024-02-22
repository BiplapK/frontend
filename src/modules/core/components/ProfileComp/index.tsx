'use client';
import useProfile from '@/modules/Admin/hooks/useProfile';
import React from 'react';

type Props = {};

const ProfileComp = (props: Props) => {
  const { data } = useProfile();

  return (
    <div>
      <h2>{data && data.full_name}</h2>
      <p>{data && data.email}</p>
    </div>
  );
};

export default ProfileComp;
