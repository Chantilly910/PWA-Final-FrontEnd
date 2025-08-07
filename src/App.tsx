import { useState } from 'react';
import Navbar from './components/Navbar';
import FoodList from './components/FoodList';
import Cart from './components/Cart';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <Navbar />
      <FoodList cart={cart} setCart={setCart} />
      <Cart cart={cart} />
    </div>
  );
}

export default App;
