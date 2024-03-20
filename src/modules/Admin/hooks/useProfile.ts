'use client';
import React from 'react';

import { AuthContext } from '@/providers/AuthProvider';

const useProfile = () => React.useContext(AuthContext);

export default useProfile;
