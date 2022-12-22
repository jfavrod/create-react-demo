import { createContext } from 'react';
import { Employee } from '../../models';

export const EmployeeSearchContext = createContext({
  employees: [] as Employee[] | undefined,
  error: '',
  isLoading: false,

  // addEmployee: (emp: Employee) => {},
  clearEmployees: () => { return; },
  getAllEmployees: () => Promise.resolve([] as Employee[]),
  setDepartment: (dept: string) => { },
});
