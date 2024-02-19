import Cookies from 'js-cookie';
import React, { useState } from 'react';

export const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
  const userCookie = Cookies.get('loggedUser');
  const loggedUser = JSON.parse(userCookie ? userCookie : '{}');

  const [user, setUser] = useState(loggedUser);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
