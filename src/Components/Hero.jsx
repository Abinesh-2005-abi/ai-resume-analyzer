import React from "react";
import { Link } from "react-router-dom";
import "../styles/Hero.css";
import hero from "../assets/image.jpg";


function Hero() {

  return (

    <section className="hero">

      <div className="hero-content">

        <h1>
          Build a Resume That
          <br />
          <span>Gets You Hired</span>
        </h1>


        <p>
          CodeTech AI uses artificial intelligence to analyze your resume,
          check ATS compatibility, find skill gaps and provide smart
          recommendations to improve your career opportunities.
        </p>


        <div className="hero-buttons">

          <Link to="/analyzer" className="primary-btn">
            Analyze Resume
          </Link>


          <Link to="/signup" className="outline-btn">
            Create Account
          </Link>

        </div>


        <div className="hero-stats">

          <div className="stat-box">
            <h3>95%</h3>
            <p>ATS Accuracy</p>
          </div>


          <div className="stat-box">
            <h3>10K+</h3>
            <p>Resumes Analyzed</p>
          </div>


          <div className="stat-box">
            <h3>24/7</h3>
            <p>AI Support</p>
          </div>


        </div>


      </div>



      <div className="hero-image">

        <img 
          src={hero}
          alt="AI Resume Analyzer"
        />

      </div>


    </section>

  );

}


export default Hero;