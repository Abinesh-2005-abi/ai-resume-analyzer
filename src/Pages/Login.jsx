import Navbar from "../Components/Navbar";
import "./../styles/Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <Navbar />

      <div className="login-container">

        <div className="login-box">

          <h1>Login</h1>
          <p>Login to your ResumeAI account</p>

          <form>

            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
            />

            <button type="submit">
              Login
            </button>

          </form>

          <p className="signup-link">
            Don't have an account?
            <Link to="/signup"> Signup</Link>
          </p>

        </div>

      </div>

    </>
  );
}

export default Login;