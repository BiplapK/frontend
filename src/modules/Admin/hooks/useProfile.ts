'use client';
import { AuthContext } from '@/providers/AuthProvider';
import React from 'react';

const useProfile = () => React.useContext(AuthContext);

export default useProfile;
