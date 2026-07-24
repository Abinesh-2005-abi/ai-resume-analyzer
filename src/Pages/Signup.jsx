import Navbar from "../Components/Navbar";
import "./../styles/Signup.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <>
      <Navbar />

      <div className="signup-container">

        <div className="signup-box">

          <h1>Create Account</h1>
          <p>Join ResumeAI and start analyzing your resume.</p>

          <form>

            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
            />

            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Create a password"
            />

            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
            />

            <button type="submit">
              Create Account
            </button>

          </form>

          <p className="login-link">
            Already have an account?
            <Link to="/login"> Login</Link>
          </p>

        </div>

      </div>
    </>
  );
}

export default Signup;