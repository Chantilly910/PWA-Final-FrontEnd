const foodItems = [
  {
    name: "Doble Freír BBQ",
    price: 13.0,
    image: "https://images.unsplash.com/photo-1606755962773-0c3f3e0d6b8f", // ejemplo
  },
  {
    name: "Clásica FoodExpress",
    price: 10.0,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
  },
  // ...otros productos
];

const FoodList = () => {
  const handleAddToCart = (item) => {
    // lógica para agregar al carrito
    console.log("Agregado al carrito:", item);
  };

  return (
    <div className="food-list">
      {foodItems.map((item, index) => (
        <div key={index} className="food-card">
          <img src={item.image} alt={item.name} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
          <h3>{item.name}</h3>
          <p>${item.price.toFixed(2)}</p>
          <button onClick={() => handleAddToCart(item)}>Agregar al carrito</button>
        </div>
      ))}
    </div>
  );
};
