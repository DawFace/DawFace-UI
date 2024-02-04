import { useRoutes } from 'react-router-dom';
import Login from '../pages/Home';

const Router = () => {
  return useRoutes([
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/home',
      element: <AppLayout />
    }
  ]);
};

export default Router;
