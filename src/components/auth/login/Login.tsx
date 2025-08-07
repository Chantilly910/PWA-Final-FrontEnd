import { useCallback, useState } from "react";
import styles from "./Login.module.css";
import { signIn } from "../../../firebase/auth";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../../../context/auth/authContext";

export const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const auth = useAuth();

  const handleLogin = useCallback(async () => {
    if (!isLoggingIn) {
      setIsLoggingIn(true);
      try {
        await signIn(email, password);
      } catch (err: any) {
        setError("Error al iniciar sesión. Verificá tus datos.");
        console.error(err);
      } finally {
        setIsLoggingIn(false);
      }
    }
  }, [email, password, isLoggingIn]);

  if (auth?.userLoggedIn) return <Navigate to="/" />;

  return (
    <div className={styles.container}>
      <h1>Login</h1>
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
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p className={styles.error}>{error}</p>}
      <div>
        ¿No tenés usuario? <Link to="/register">Registrate</Link>
      </div>
    </div>
  );
};
