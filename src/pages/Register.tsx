import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Auth.css';

const Register: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (email && password) {
      navigate('/login');
    }
  };

  return (
    <div className="auth-container">
      <h2>Registrarse</h2>
      <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Contraseña" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Registrarse</button>
    </div>
  );
};

export default Register;