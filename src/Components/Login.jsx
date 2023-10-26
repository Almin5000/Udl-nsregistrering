import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../css/Login.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [adgangskode, setAdgangskode] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Adgangskode:", adgangskode);
    axios.post('https://gorilla-informed-asp.ngrok-free.app/Bruger/login', {
      email: email,
      adgangskode: adgangskode
    })
      .then(response => {
        navigate("/Aflevering");
        alert("Login successful");
      })
      .catch(error => {
        if (error.response) {
          // Request was made and server responded with a status code that falls out of the range
          alert("Ugyldigt Request.");
          console.error('Server Error', error.response.data);
        } else if (error.request) {
          // The request was made but no response was received
          alert("Ingen svar fra serveren.");
          console.error('No response from server', error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          alert("Ukendt fejl.");
          console.error('Request setup error', error.message);
        }
      });
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
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "200px", marginBottom: "10px", padding: "10px", borderRadius: "3px" }}
        />
        <input
          type="password"
          placeholder="Adgangskode"
          value={adgangskode}
          onChange={(e) => setAdgangskode(e.target.value)}
          style={{ width: "200px", marginBottom: "10px", padding: "10px", borderRadius: "3px" }}
        />
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
