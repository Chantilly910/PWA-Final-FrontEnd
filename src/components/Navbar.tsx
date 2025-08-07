import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';
import { useAuth } from '../context/auth/authContext';
import { logOut } from '../firebase/auth';

const Navbar: React.FC = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logOut();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <h1 className="logo"><Link to="/">FoodExpress</Link></h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/category/hamburguesas">Hamburguesas</Link></li>
        <li><Link to="/category/papas">Papas</Link></li>
        <li><Link to="/category/postres">Postres</Link></li>
        <li><Link to="/category/bebidas">Bebidas</Link></li>
        <li><Link to="/cart">Carrito</Link></li>
        {auth?.userLoggedIn && (
          <>
            <li><Link to="/profile">Perfil</Link></li>
            <li><button className="logout-btn" onClick={handleLogout}>Cerrar sesión</button></li>
          </>
        )}
        {!auth?.userLoggedIn && (
          <>
            <li><Link to="/login">Iniciar sesión</Link></li>
            <li><Link to="/register">Registrarse</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
