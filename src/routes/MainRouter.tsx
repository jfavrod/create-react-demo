import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages';

export const MainRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
]);
