import { Employee } from '../models';

export type EmployeeEventType = 'employeeAdded' | 'employeeUpdated';

export interface EmployeeEvent<T> {
  data: T;
  type: EmployeeEventType;
}

export type EmployeeEventObserver = (event: EmployeeEvent<unknown>) => unknown;

export class EmployeesService {
  private static baseUrl = 'http://localhost:3001/employees'
  private static observers = new Map<EmployeeEventType, EmployeeEventObserver[]>();

  public static addEmployee(emp: Employee): Promise<Employee> {
    EmployeesService.notify('employeeAdded', { data: emp, type: 'employeeAdded' });
    return Promise.resolve(emp);
  }

  public static getAllEmployees = async () => {
    const res = await fetch(EmployeesService.baseUrl);
    return (await res.json()) as Employee[];
  };

  public static getByDepartment = async (dept: string) => {
    const res = await fetch(`${EmployeesService.baseUrl}?department=${dept}`);
    return (await res.json()) as Employee[];
  }

  public static registerListener(eventType: EmployeeEventType, observer: EmployeeEventObserver) {
    let obs = EmployeesService.observers.get(eventType);

    if (!obs) {
      obs = [] as EmployeeEventObserver[];
      EmployeesService.observers.set(eventType, obs);
    }

    if (!obs.includes(observer)) {
      console.log('listener registered', observer);
      obs.push(observer);
    }

    return observer;
  }

  public static unregisterListener(observer: EmployeeEventObserver) {
    for (const [ , obsArray ] of EmployeesService.observers.entries()) {
      const foundIndex = obsArray.findIndex((obs) => obs === observer);

      if (foundIndex > -1) {
        console.log('listener unregistered', observer);
        obsArray.splice(foundIndex, 1);
      }
    }
  }

  private static notify<T>(eventType: EmployeeEventType, data: EmployeeEvent<T>) {
    const obs = EmployeesService.observers.get(eventType) || [];

    obs.forEach((observer) => {
      observer(data);
    });
  }
}
