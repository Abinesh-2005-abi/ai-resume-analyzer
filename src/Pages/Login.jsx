import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (email.trim() !== "" && password.trim() !== "") {

      alert("Login Successful ✅");

      navigate("/home");   // <-- Change from /dashboard to /home

    } else {

      alert("Please enter Email and Password");

    }
  }

  return (
    <div className="login-page">

      <div className="login-box">

        <div className="login-logo">
          CodeTech <span>AI</span>
        </div>

        <h1>Welcome Back 👋</h1>

        <p>Login to analyze your resume with AI</p>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            Login
          </button>

        </form>

        <div className="forgot">
          Forgot Password?
        </div>

        <p className="account">
          Don't have an account?
          <Link to="/signup"> Signup</Link>
        </p>

      </div>

    </div>
  );
}

export default Login;