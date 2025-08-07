import React from 'react';
import '../styles/Home.css';

const Home = () => (
  <div className="home">
    <header className="hero">
      <h1>FoodExpress te da la bienvenida</h1>
      <button className="order-btn">Ver menú</button>
    </header>
    <section className="best-sellers">
      <h2>Recomendados</h2>
      {/* Aquí podés mapear items con imágenes y precios */}
    </section>
  </div>
);

export default Home;
