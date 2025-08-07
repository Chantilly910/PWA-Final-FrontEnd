import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import FoodCard from '../components/FoodCard';
import { Food } from '../types/Food';
import '../styles/Home.css';

const sampleFoods: Food[] = [
  { name: 'Hamburguesa Clásica', price: 4.99, category: 'hamburguesas' },
  { name: 'Papas Grandes', price: 2.49, category: 'papas' },
  { name: 'Sundae de Chocolate', price: 3.00, category: 'postres' },
  { name: 'Coca-Cola 500ml', price: 1.99, category: 'bebidas' },
];

const Home: React.FC = () => {
  const [cart, setCart] = useState<Food[]>([]);

  const addToCart = (food: Food) => {
    setCart([...cart, food]);
  };

  return (
    <div>
      <Navbar />
      <h2 className="section-title">Menú del día</h2>
      <div className="food-grid">
        {sampleFoods.map((food, index) => (
          <FoodCard key={index} food={food} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Home;