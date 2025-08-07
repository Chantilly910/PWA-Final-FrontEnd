import React from 'react';
import { Food } from '../types/Food';
import '../styles/FoodCard.css';

interface Props {
  food: Food;
  addToCart: (food: Food) => void;
}

const FoodCard: React.FC<Props> = ({ food, addToCart }) => {
  return (
    <div className="food-card">
      <h3>{food.name}</h3>
      <p>Precio: ${food.price.toFixed(2)}</p>
      <button onClick={() => addToCart(food)}>Agregar al carrito</button>
    </div>
  );
};

export default FoodCard;