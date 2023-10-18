import React, { useState } from "react";
import "../css/Login.css"

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "password") {
      alert("Login successful");
    } else {
      alert("Ugyldigt oplysninger.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f2f2f2",
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          padding: "20px",
          backgroundColor: "#f2f2f2",
        }}
      >
        <h2 style={{ marginBottom: "20px", textAlign: "left", color: "black" }}>Login</h2>
        <input
          type="text"
          placeholder="Brugernavn"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: "200px", marginBottom: "10px", padding: "10px", borderRadius: "3px" }}
        />
        <input
          type="password"
          placeholder="Adgangskode"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "200px", marginBottom: "10px", padding: "10px", borderRadius: "3px" }}
        />
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
