import { FunctionComponent, PropsWithChildren, useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { Employee } from '../../models';
import { EmployeesService } from '../../services';
import { EmployeeSearchContext } from './EmployeeSearchContext';

export const EmployeeSearchProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const queryClient = new QueryClient();

  const Provider: FunctionComponent<PropsWithChildren> = ({ children: chx }) => {
    const [ employees, setEmployees ] = useState<Employee[]>([]);

    const { isLoading: getAllLoading, error: getAllErr } = useQuery('allEmployees', () => EmployeesService.getAllEmployees(), {
      enabled: false,
      onSuccess: (emps) => setEmployees(emps),
    });

    const { isLoading: getByDeptLoading , error: byDeptErr } = useQuery('getByDepartment', {
      enabled: false,
      onSuccess: (emps) => setEmployees(emps as Employee[]),
    });

    useEffect(() => {
      const addListener = EmployeesService.registerListener('employeeAdded', (emp) => {
        console.log('add!')
      });

      return () => {
        EmployeesService.unregisterListener(addListener);
      }
    });

    return (
      <EmployeeSearchContext.Provider value={{
        employees,
        error: (getAllErr || byDeptErr) as string,
        isLoading: getAllLoading || getByDeptLoading,
        clearEmployees: () => setEmployees([]),
        getAllEmployees: () => queryClient.fetchQuery<Employee[]>('allEmployees'),
        setDepartment: (dept) => {

          queryClient.fetchQuery<Employee[]>({
            queryKey: 'getByDepartment',
            queryFn: () => EmployeesService.getByDepartment(dept),
          })
        },
      }}>
        { chx }
      </EmployeeSearchContext.Provider>
    );
  };
  
  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        {children}
      </Provider>
    </QueryClientProvider>
  )
};