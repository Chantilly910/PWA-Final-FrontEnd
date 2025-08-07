import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">FoodExpress</h1>
      <ul className="nav-links">
        <li><Link to="/category/hamburguesas">Hamburguesas</Link></li>
        <li><Link to="/category/papas">Papas</Link></li>
        <li><Link to="/category/postres">Postres</Link></li>
        <li><Link to="/category/bebidas">Bebidas</Link></li>
        <li><Link to="/cart">Carrito</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;