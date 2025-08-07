import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth } from "./context/auth/authContext";
import { Login } from "./components/auth/login/Login";
import { Register } from "./components/auth/register/Register";
import Profile from "../src/pages/Profile";
import PrivateRoute from "../src/components/PrivateRoute";
import Cart from "./components/Cart";
import FoodList from "./components/FoodList";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Navigate } from "react-router-dom";

const App: React.FC = () => {
  const auth = useAuth();



  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/category/:category" element={<PrivateRoute><FoodList /></PrivateRoute>} />
      </Routes>
    </>
  );
};

export default App;

