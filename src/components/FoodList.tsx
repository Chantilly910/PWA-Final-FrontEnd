import React from "react";
import { useCart } from "../context/cartContext";
import { useParams } from "react-router-dom";

const foodItems = [
  // Hamburguesas
  {
    name: "Doble Freír BBQ",
    price: 13.0,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80",
    category: "hamburguesas",
  },
  {
    name: "Clásica FoodExpress",
    price: 10.0,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80",
    category: "hamburguesas",
  },
  {
    name: "Smash Picante",
    price: 11.0,
    image: "https://images.unsplash.com/photo-1601050690597-3f5f3f3f3f3f?auto=format&fit=crop&w=400&q=80",
    category: "hamburguesas",
  },
  {
    name: "Veggie Deluxe",
    price: 9.5,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    category: "hamburguesas",
  },
  {
    name: "Bacon Supreme",
    price: 11.5,
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
    category: "hamburguesas",
  },
  // Papas
  {
    name: "Papas Grandes",
    price: 2.49,
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=400&q=80",
    category: "papas",
  },
  {
    name: "Papas con Cheddar y Bacon",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&w=400&q=80",
    category: "papas",
  },
  {
    name: "Papas Rústicas",
    price: 3.49,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    category: "papas",
  },
  {
    name: "Papas Fritas Clásicas",
    price: 2.99,
    image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80",
    category: "papas",
  },
  // Postres
  {
    name: "Sundae de Chocolate",
    price: 3.0,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    category: "postres",
  },
  {
    name: "Helado de Vainilla",
    price: 2.5,
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
    category: "postres",
  },
  {
    name: "Brownie con Helado",
    price: 4.0,
    image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
    category: "postres",
  },
  {
    name: "Tarta de Queso",
    price: 3.5,
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80",
    category: "postres",
  },
  // Bebidas
  {
    name: "Coca-Cola 500ml",
    price: 1.99,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    category: "bebidas",
  },
  {
    name: "Sprite 500ml",
    price: 1.99,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    category: "bebidas",
  },
  {
    name: "Agua Mineral",
    price: 1.5,
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
    category: "bebidas",
  },
  {
    name: "Jugo de Naranja",
    price: 2.0,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    category: "bebidas",
  },
];

type FoodItem = {
  name: string;
  price: number;
  image: string;
  category: string;
};



const FoodList: React.FC = () => {
  const { addToCart } = useCart();
  const { category } = useParams();
  const handleAddToCart = (item: FoodItem) => {
    addToCart(item);
  };

  const filteredItems = category
    ? foodItems.filter((item) => {
        // Permitir coincidencia flexible: singular/plural y minúsculas
        const cat = category.toLowerCase();
        return (
          item.category.toLowerCase() === cat ||
          item.category.toLowerCase() === cat + 's' ||
          item.category.toLowerCase() + 's' === cat
        );
      })
    : foodItems;

  return (
    <div className="food-list">
      {filteredItems.length === 0 ? (
        <p>No hay productos en esta categoría.</p>
      ) : (
        filteredItems.map((item, index) => (
          <div key={index} className="food-card">
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <h3>{item.name}</h3>
            <p>${item.price.toFixed(2)}</p>
            <button onClick={() => handleAddToCart(item)}>Agregar al carrito</button>
          </div>
        ))
      )}
    </div>
  );
};

export default FoodList;
