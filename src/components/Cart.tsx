import React, { useState } from 'react';
import './Cart.css';

interface Food {
  name: string;
  price: number;
  category: string;
  image: string;
}

interface CartProps {
  initialItems: Food[];
}

const Cart: React.FC<CartProps> = ({ initialItems }) => {
  const [cartItems, setCartItems] = useState<Food[]>(initialItems);

  const removeFromCart = (index: number) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-container">
      <h2>🛒 Carrito de compras</h2>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div className="cart-list">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-image" />
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>${item.price.toFixed(2)}</p>
                <button onClick={() => removeFromCart(index)}>Eliminar</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <strong>Total: ${totalPrice.toFixed(2)}</strong>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;