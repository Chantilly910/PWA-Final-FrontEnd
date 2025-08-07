import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles/Home.css';

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
  const [cart, setCart] = useState<Food[]>([]);

  const addToCart = (food: Food) => {
    setCart([...cart, food]);
    console.log('Agregado al carrito:', food);
  };

  return (
    <div>
      <Navbar />
      <h2 className="section-title">Menú del día</h2>
      <div className="food-grid">
        {sampleFoods.map((food, index) => (
          <div key={index} className="food-card">
            <img src={food.image} alt={food.name} className="food-image" />
            <h3>{food.name}</h3>
            <p>${food.price.toFixed(2)}</p>
            <button onClick={() => addToCart(food)}>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
