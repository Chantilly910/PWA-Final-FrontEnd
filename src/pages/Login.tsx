import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Auth.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (email && password) {
      localStorage.setItem('user', JSON.stringify({ email }));
      navigate('/');
    }
  };

  return (
    <div className="auth-container">
      <h2>Iniciar sesión</h2>
      <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Contraseña" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Ingresar</button>
    </div>
  );
};

export default Login;