import Navbar from "../Components/Navbar";
import "./../styles/Analyzer.css";

function Analyzer() {
  return (
    <>
      <Navbar />

      <div className="analyzer">

        <h1>AI Resume Analyzer</h1>
        <p>Upload your resume and get AI analysis.</p>

        <div className="upload-box">

          <input type="file" />

          <button>Analyze Resume</button>

        </div>

        <div className="result">

          <div className="card">
            <h2>ATS Score</h2>
            <h1>91%</h1>
          </div>

          <div className="card">
            <h2>Skills Found</h2>

            <ul>
              <li>Java</li>
              <li>React</li>
              <li>Spring Boot</li>
              <li>MySQL</li>
            </ul>

          </div>

          <div className="card">
            <h2>Missing Skills</h2>

            <ul>
              <li>Docker</li>
              <li>AWS</li>
              <li>GitHub Actions</li>
            </ul>

          </div>

          <div className="card">
            <h2>AI Suggestions</h2>

            <ul>
              <li>Add more projects</li>
              <li>Improve resume summary</li>
              <li>Add certifications</li>
              <li>Mention achievements</li>
            </ul>

          </div>

        </div>

      </div>

    </>
  );
}

export default Analyzer;