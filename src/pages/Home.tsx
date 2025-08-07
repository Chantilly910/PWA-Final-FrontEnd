import React from 'react';
import '../styles/Home.css';
import { useAuth } from '../context/auth/authContext';
import { Link } from 'react-router-dom';

interface Food {
  name: string;
  price: number;
  category: string;
  image: string;
}

const sampleFoods: Food[] = [
  {
    name: 'Hamburguesa Clásica',
    price: 4.99,
    category: 'hamburguesas',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349',
  },
  {
    name: 'Papas Grandes',
    price: 2.49,
    category: 'papas',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90',
  },
  {
    name: 'Sundae de Chocolate',
    price: 3.0,
    category: 'postres',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092',
  },
  {
    name: 'Coca-Cola 500ml',
    price: 1.99,
    category: 'bebidas',
    image: 'https://images.unsplash.com/photo-1580910051074-7c1c1b1e1b1e',
  },
];

const Home: React.FC = () => {
  const auth = useAuth();

  return (
    <div className="home-bg">
      {!auth?.userLoggedIn ? (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <h2>Bienvenido a FoodExpress</h2>
          <p>Por favor, inicia sesión o regístrate para ver el menú y hacer pedidos.</p>
          <Link to="/login" style={{ marginRight: '1rem' }}>Iniciar sesión</Link>
          <Link to="/register">Registrarse</Link>
        </div>
      ) : (
        <>
          <h2 className="section-title">Menú del día</h2>
          <p style={{ textAlign: 'center' }}>Selecciona una categoría en la barra de navegación para ver los productos.</p>
        </>
      )}
    </div>
  );
};

export default Home;
