import React from 'react';
import '../styles/Cart.css';
import { useCart } from '../context/cartContext';

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
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
          <button onClick={clearCart} className="clear-cart-btn">Vaciar carrito</button>
        </div>
      )}
    </div>
  );
};

export default Cart;