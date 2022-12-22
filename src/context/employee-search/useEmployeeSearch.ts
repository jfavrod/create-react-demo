import { useContext } from 'react';
import { EmployeeSearchContext } from './EmployeeSearchContext';

export const useEmployeeSearch = () => {
  return useContext(EmployeeSearchContext);
};
