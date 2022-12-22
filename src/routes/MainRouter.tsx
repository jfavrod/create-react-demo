import { createBrowserRouter } from 'react-router-dom';
import { Employees, Home } from '../pages';

export const MainRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/employees',
    element: <Employees />
  }
]);
