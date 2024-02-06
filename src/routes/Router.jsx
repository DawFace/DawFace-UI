import AppLayout from '../layout/AppLayout';
import Login from '../pages/Login';
import { useRoutes } from 'react-router-dom';

const Router = () => {
  return useRoutes([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/home',
      element: <AppLayout />,
    },
  ]);
};

export default Router;
