import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/auth/authContext';


interface PrivateRouteProps {
  children: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const auth = useAuth();

  return auth && auth.currentUser ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
