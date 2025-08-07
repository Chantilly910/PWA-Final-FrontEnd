
import React from "react";
import { useAuth } from "../context/auth/authContext";

const Profile: React.FC = () => {
  const auth = useAuth();
  const user = auth?.currentUser;
  const email = user?.email || "-";
  const name = email.includes("@") ? email.split("@")[0] : "-";
  return (
    <div style={{ padding: "2.5rem 1rem", maxWidth: 400, margin: "2.5rem auto", background: "#fff", borderRadius: 14, boxShadow: "0 4px 24px rgba(0,0,0,0.08)", textAlign: "center" }}>
      <h2 style={{ color: "#d7263d", marginBottom: 24 }}>👤 Perfil</h2>
      <div style={{ fontSize: "1.15rem", marginBottom: 12 }}><strong>Nombre:</strong> {name}</div>
      <div style={{ fontSize: "1.15rem" }}><strong>Email:</strong> {email}</div>
    </div>
  );
};

export default Profile;
