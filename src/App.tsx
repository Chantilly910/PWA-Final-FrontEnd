import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import FoodList from '../src/components/FoodList';
import Cart from './components/Cart';
import AuthForm from './components/AuthForm';
import Hamburguesas from './pages/Hamburguesas';
import Papas from './pages/Papas';
import Postres from './pages/Postres';
import Bebidas from './pages/Bebidas';
import PrivateRoute from '../src/components/PrivateRoute';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<AuthForm />} />
          <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
          <Route path="/category/hamburguesas" element={<PrivateRoute><Hamburguesas /></PrivateRoute>} />
          <Route path="/category/papas" element={<PrivateRoute><Papas /></PrivateRoute>} />
          <Route path="/category/postres" element={<PrivateRoute><Postres /></PrivateRoute>} />
          <Route path="/category/bebidas" element={<PrivateRoute><Bebidas /></PrivateRoute>} />
          <Route path="/category/:categoria" element={<PrivateRoute><FoodList /></PrivateRoute>} />
        </Routes>
      </main>
    </>
  );
}
