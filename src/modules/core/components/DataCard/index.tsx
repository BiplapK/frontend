'use client';
import useAuth from '@/modules/core/hooks/useAuth';
import useData from '@/modules/core/hooks/useData';

import React from 'react';
import { getProfileData } from '@/modules/Admin/services/profile';

const DataCard = () => {
  const data = useData();

  const { data: authData } = useAuth();

  const { active, check, updateActive, updateCheck } = data;

  return (
    <div className="bg-green-400">
      <h2 className="text-red-200">Text Card</h2>
      {active ? <h2>Active</h2> : <h2>Inactive</h2>}
      <button className="bg-red-500 px-2 py-2" onClick={updateActive}>
        Active
      </button>
    </div>
  );
};

export default DataCard;
