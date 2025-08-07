const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#ffcc00', padding: '1rem' }}>
      <h1 style={{ color: '#d00000' }}>FastFood Express</h1>
      <div>
        <button>Burgers</button>
        <button>Sides</button>
        <button>Desserts</button>
        <button>Drinks</button>
      </div>
    </nav>
  );
};

export default Navbar;
