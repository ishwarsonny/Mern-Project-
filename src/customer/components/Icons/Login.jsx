import React, { useState } from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login email:", email);
    console.log("Login password:", password);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img 
          className="login-logo" 
          src="https://www.leheriya.com/cdn/shop/files/logo_be55d2b1-210e-43b5-b911-3585765e88aa_50x@2x.png?v=1677655114" 
          alt="Login Icon" 
        />

        <h2 className="login-title">Log in</h2>
        <p className="login-subtitle">Enter your email and password</p>
        
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
            required
          />
          
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
            required
          />
          <NavLink to="/">
          <button type="submit" className="login-button">
            Continue
          </button>
          </NavLink>
          <p className="justify-center items-center">If not LOGIN <NavLink to="/Register" className="register-link">Register</NavLink> here</p>
        </form>
        
        <p className="login-privacy">Privacy</p>
      </div>
    </div>
  );
};

export default Login;
