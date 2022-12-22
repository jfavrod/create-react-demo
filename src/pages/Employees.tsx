import { FunctionComponent } from 'react';
import { useEmployeeSearch } from '../context/employee-search';
import { EmployeeSearchProvider } from '../context/employee-search/EmployeeSearchProvider';
import { EmployeesService } from '../services';

export const Employees: FunctionComponent = () => {
  const MyEmps = () => {
    const context = useEmployeeSearch();

    return (
      <>
        <button onClick={context.clearEmployees}>Clear</button>
        <button onClick={context.getAllEmployees}>Get All</button>
        <button onClick={() => context.setDepartment('Sales')}>By Department</button>
        <button onClick={() => EmployeesService.addEmployee({ department: 'Magic', email: 'bbaggins@shire.net', id: 12345, quote: '', lastName: 'Baggins', firstName: 'Bilbo' })}>Add Employee</button>

        {
          context.employees?.map((emp) => (
            <p key={`emp-${emp.id}`}>{emp.firstName}</p>
          ))
        }
      </>
    );
  };

  return (
    <EmployeeSearchProvider>
      <MyEmps />
    </EmployeeSearchProvider>
  )
};
