import { AuthContext } from '../AuthContext.jsx';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  });

  console.log(user);

  return user ? children : null;
};

export default ProtectedRoute;
