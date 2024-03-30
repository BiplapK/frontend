import React from 'react';

import { DataContext } from '@/providers/DataProvider';

const useData = () => React.useContext(DataContext);

export default useData;
