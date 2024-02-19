import { AuthContext } from '../AuthContext.jsx';
import Cookies from 'js-cookie';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const user = Cookies.get('loggedUser');

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  });

  return user ? children : null;
};

export default ProtectedRoute;
