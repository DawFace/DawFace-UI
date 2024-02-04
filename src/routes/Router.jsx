import { useRoutes } from 'react-router-dom';
import Login from '../pages/Home';
import AppLayout from '../layout/AppLayout';

const Router = () => {
  return useRoutes([
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/home',
      element: <AppLayout />,
    },
  ]);
};

export default Router;
