import "./../styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        ResumeAI
      </div>

      <ul className="nav-links">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/analyzer">Analyzer</Link>
        </li>

        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

      </ul>

      <div className="buttons">

        <Link to="/login">
          <button className="login-btn">
            Login
          </button>
        </Link>

        <Link to="/signup">
          <button className="signup-btn">
            Get Started
          </button>
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;