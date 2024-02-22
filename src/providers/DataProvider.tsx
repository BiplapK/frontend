'use client';

import React, { createContext } from 'react';

const initialState = {
  check: false,
  active: false,
  updateCheck: () => {},
  updateActive: () => {},
};

export const DataContext = createContext<{
  check: boolean;
  active: boolean;
  updateCheck: () => void;
  updateActive: () => void;
}>(initialState);

const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [check, setCheck] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const updateCheck = () => {
    setCheck((prev) => !prev);
  };

  const updateActive = () => {
    setActive((prev) => !prev);
  };
  return (
    <DataContext.Provider value={{ check, active, updateCheck, updateActive }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
