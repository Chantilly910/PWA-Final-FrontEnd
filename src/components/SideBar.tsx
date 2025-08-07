import React from 'react';
import { Link } from 'react-router-dom';
import { logOut } from "../firebase/auth";

const Sidebar: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "20px", padding: "10px" }}>
      <Link to="/" style={{ textDecoration: "none", fontWeight: "bold" }}>🏠 Ir al inicio</Link>
      <button onClick={logOut} style={{ padding: "8px", backgroundColor: "#e74c3c", color: "#fff", border: "none", cursor: "pointer" }}>
        🚪 Cerrar sesión
      </button>
    </div>
  );
};

export default Sidebar;
