import { Employee } from '../models';

export class EmployeesService {
  private static baseUrl = 'http://localhost:3001/employees'

  public getAllEmployees = async () => {
    const res = await fetch(EmployeesService.baseUrl);
    return (await res.json()) as Employee[];
  };


  public getByDepartment = async (dept: string) => {
    const res = await fetch(`${EmployeesService.baseUrl}?department=${dept}`);
    return (await res.json()) as Employee[];
  }
}
