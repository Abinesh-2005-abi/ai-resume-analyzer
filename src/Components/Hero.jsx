import "./../styles/Hero.css";
import { FaArrowRight } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <span className="badge">
          🚀 AI Powered Resume Analysis
        </span>

        <h1>
          Build a Resume
          <br />
          That Gets
          <span> You Hired.</span>
        </h1>

        <p>
          Upload your resume and receive an AI-powered ATS score,
          personalized suggestions, skill gap analysis, and expert
          recommendations to land your dream job.
        </p>

        <div className="hero-buttons">

          <button className="primary-btn">
            Analyze Resume
            <FaArrowRight />
          </button>

          <button className="secondary-btn">
            Watch Demo
          </button>

        </div>

        <div className="companies">

          <div>Google</div>
          <div>Microsoft</div>
          <div>Amazon</div>
          <div>Infosys</div>

        </div>

      </div>

      <div className="hero-right">

        <div className="resume-card">

          <h3>Resume Score</h3>

          <h1>91%</h1>

          <div className="progress">

            <div className="fill"></div>

          </div>

        </div>

        <div className="floating-card card1">

          <FaRobot />

          <div>

            <h4>AI Analysis</h4>

            <p>Completed</p>

          </div>

        </div>

        <div className="floating-card card2">

          <FaChartLine />

          <div>

            <h4>ATS Score</h4>

            <p>Excellent</p>

          </div>

        </div>

        <div className="floating-card card3">

          <FaFileAlt />

          <div>

            <h4>Skills</h4>

            <p>24 Detected</p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;