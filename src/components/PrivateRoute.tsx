import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/auth/authContext';


interface PrivateRouteProps {
  children: React.ReactElement;
}


const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const auth = useAuth();
  if (!auth || auth.loading) {
    // Puedes mostrar un loader si lo deseas
    return <div style={{textAlign:'center',marginTop:'2rem'}}>Cargando...</div>;
  }
  return auth.currentUser ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
