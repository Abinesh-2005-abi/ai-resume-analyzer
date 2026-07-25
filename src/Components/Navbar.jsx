import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        CodeTech <span>AI Resume Analyzer</span>
      </div>

      <div className="nav-links">

        <Link to="/home">
          Home
        </Link>

        <Link to="/analyzer">
          Analyzer
        </Link>

        <Link to="/dashboard">
          Dashboard
        </Link>

        <Link to="/">
          Login
        </Link>

        <Link to="/signup" className="signup-btn">
          Get Started
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;