import Navbar from "../Components/Navbar";
import "./../styles/Dashboard.css";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="dashboard">

        <h1>Dashboard</h1>
        <p>Welcome back! Here's your resume analysis summary.</p>

        <div className="stats">

          <div className="box">
            <h2>5</h2>
            <p>Total Resumes</p>
          </div>

          <div className="box">
            <h2>91%</h2>
            <p>Best ATS Score</p>
          </div>

          <div className="box">
            <h2>12</h2>
            <p>Skills Found</p>
          </div>

          <div className="box">
            <h2>4</h2>
            <p>Reports</p>
          </div>

        </div>

        <div className="history">

          <h2>Recent Analysis</h2>

          <table>

            <thead>
              <tr>
                <th>Date</th>
                <th>Resume</th>
                <th>ATS Score</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>24-07-2026</td>
                <td>Resume.pdf</td>
                <td>91%</td>
                <td>Completed</td>
              </tr>

              <tr>
                <td>22-07-2026</td>
                <td>Java_Resume.pdf</td>
                <td>87%</td>
                <td>Completed</td>
              </tr>

              <tr>
                <td>20-07-2026</td>
                <td>Frontend_Resume.pdf</td>
                <td>84%</td>
                <td>Completed</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </>
  );
}

export default Dashboard;