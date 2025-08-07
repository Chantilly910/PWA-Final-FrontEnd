import { useCallback, useState } from "react";
import styles from "./Login.module.css";
import { signIn } from "../../../firebase/auth";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../../../context/auth/authContext";
import { FaEnvelope, FaLock } from "react-icons/fa";

export const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const auth = useAuth();

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

  const handleLogin = useCallback(async () => {
    if (!validate() || isLoggingIn) return;
    setIsLoggingIn(true);
    setError(null);
    setSuccess(null);
    try {
      await signIn(email, password);
      setSuccess("¡Inicio de sesión exitoso!");
    } catch (err: any) {
      if (err.code === "auth/user-not-found" || err.code === "auth/wrong-password") {
        setError("Email o contraseña incorrectos.");
      } else {
        setError("Error al iniciar sesión. Intenta de nuevo.");
      }
    } finally {
      setIsLoggingIn(false);
    }
  }, [email, password, isLoggingIn]);

  if (!auth?.loading && auth?.userLoggedIn) return <Navigate to="/" />;

  return (
    <div className={styles["login-bg"]}>
      <form className={styles.card} onSubmit={e => { e.preventDefault(); handleLogin(); }}>
        <div className={styles.logo}>
          <img src="/vite.svg" alt="logo" />
          <span>FoodExpress</span>
        </div>
        <h1>Iniciar sesión</h1>
        <div className={styles["input-group"]}>
          <FaEnvelope className={styles.icon} />
          <input
            className={styles.textInput}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            autoComplete="username"
            disabled={isLoggingIn}
          />
        </div>
        <div className={styles["input-group"]}>
          <FaLock className={styles.icon} />
          <input
            className={styles.textInput}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            autoComplete="current-password"
            disabled={isLoggingIn}
          />
        </div>
        <button type="submit" disabled={isLoggingIn}>
          {isLoggingIn ? "Ingresando..." : "Ingresar"}
        </button>
        {error && <p className={styles.error}>{error}</p>}
        {success && <p className={styles.success}>{success}</p>}
        <div className={styles.links}>
          ¿No tenés usuario?
          <Link to="/register">Registrate</Link>
        </div>
      </form>
    </div>
  );
};
