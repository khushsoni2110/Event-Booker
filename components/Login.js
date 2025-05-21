import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext"; // Adjust path if needed
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./AuthForm.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const staticUsers = [
    { email: "akshatsoni@gmail.com", password: "akshat123" },
    { email: "user2@example.com", password: "secret456" },
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    const isValidUser = staticUsers.some(
      (user) => user.email === email && user.password === password
    );

    if (isValidUser) {
      toast.success("Login successful!");
      setError("");
      login();
      navigate("/");
    } else {
      toast.error("Invalid email or password.");
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleLogin} className="auth-form">
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="auth-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="auth-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {/* You can keep this if you want inline errors, or remove */}
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="auth-button">Login</button>
        <p>
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
