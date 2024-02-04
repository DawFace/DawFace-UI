import { useRoutes } from 'react-router-dom';
import Login from '../components/Login';
import AppLayout from '../layout/AppLayout';

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
