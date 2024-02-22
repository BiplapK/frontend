'use client';

import React, { createContext, ReactNode } from 'react';
import { ProfileDataType } from '@/modules/Admin/types/profile.types';

type AuthProviderProps = {
  children: ReactNode;
  data: { data: ProfileDataType | null };
};

export const AuthContext = createContext<{ data: ProfileDataType | null }>({
  data: null,
});

const AuthProvider: React.FC<AuthProviderProps> = ({ children, data }) => {
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
