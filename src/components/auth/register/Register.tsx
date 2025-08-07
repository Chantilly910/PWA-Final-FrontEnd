import { useCallback, useState, useEffect } from "react";
import styles from "./Register.module.css";
import { createUser } from "../../../firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/auth/authContext";

export const Register = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const auth = useAuth();
  const navigate = useNavigate();

  const handleRegister = useCallback(async () => {
    try {
      await createUser(email, password);
    } catch (err: any) {
      if (err.code === "auth/email-already-in-use") {
        setError("Este correo ya está registrado. Probá iniciar sesión.");
      } else {
        setError("Error al registrarse. Verificá los datos.");
      }
    }
  }, [email, password]);

  useEffect(() => {
    if (auth?.userLoggedIn) {
      navigate("/");
    }
  }, [auth?.userLoggedIn, navigate]);

  return (
    <div className={styles.container}>
      <h1>Registrarse</h1>
      <input
        className={styles.textInput}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        className={styles.textInput}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Contraseña"
      />
      <button onClick={handleRegister}>Registrarse</button>
      {error && <p className={styles.error}>{error}</p>}
      <div>
        ¿Ya tenés cuenta? <Link to="/login">Iniciar sesión</Link>
      </div>
    </div>
  );
};
