
import { useCallback, useState, useEffect } from "react";
import styles from "./Register.module.css";
import { createUser } from "../../../firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/auth/authContext";

export const Register = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isRegistering, setIsRegistering] = useState(false);
  const auth = useAuth();
  const navigate = useNavigate();

  const validate = () => {
    if (!email || !password) {
      setError("Por favor, completa todos los campos.");
      return false;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError("El email no es válido.");
      return false;
    }
    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return false;
    }
    setError(null);
    return true;
  };

  const handleRegister = useCallback(async () => {
    if (!validate() || isRegistering) return;
    setIsRegistering(true);
    setError(null);
    setSuccess(null);
    try {
      await createUser(email, password);
      setSuccess("¡Registro exitoso! Ahora puedes iniciar sesión.");
    } catch (err: any) {
      if (err.code === "auth/email-already-in-use" || err.message?.includes("email-already-in-use")) {
        setError("Este correo ya está registrado. Probá iniciar sesión.");
      } else {
        setError("Error al registrarse. Verificá los datos.");
      }
    } finally {
      setIsRegistering(false);
    }
  }, [email, password, isRegistering]);

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
        autoComplete="username"
        disabled={isRegistering}
      />
      <input
        className={styles.textInput}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Contraseña"
        autoComplete="new-password"
        disabled={isRegistering}
      />
      <button onClick={handleRegister} disabled={isRegistering}>
        {isRegistering ? "Registrando..." : "Registrarse"}
      </button>
      {error && <p className={styles.error}>{error}</p>}
      {success && <p className={styles.success}>{success}</p>}
      <div>
        ¿Ya tenés cuenta? <Link to="/login">Iniciar sesión</Link>
      </div>
    </div>
  );
};
