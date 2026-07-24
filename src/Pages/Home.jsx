import React from "react";

import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Testimonial from "../components/Testimonial";

import "../styles/Home.css";


function Home(){

  return(

    <div className="home">

      <Hero />

      <section className="stats-section">

        <div className="stat-card">
          <h2>10K+</h2>
          <p>Resumes Analyzed</p>
        </div>

        <div className="stat-card">
          <h2>95%</h2>
          <p>ATS Accuracy</p>
        </div>

        <div className="stat-card">
          <h2>50+</h2>
          <p>Skills Detected</p>
        </div>

        <div className="stat-card">
          <h2>24/7</h2>
          <p>AI Assistance</p>
        </div>

      </section>


      <Features />


      <section className="why-section">

        <h2>
          Why Choose CodeTech AI?
        </h2>

        <p>
          Our AI-powered resume analyzer helps students and
          professionals improve their resumes, increase ATS scores,
          and identify missing skills required for their dream jobs.
        </p>

      </section>


      <HowItWorks />


      <Testimonial />


    </div>

  );

}


export default Home;