import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import Analyzer from "./Pages/Analyzer";

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <Navbar />

        <main>
          <Routes>

            {/* First Page */}
            <Route path="/" element={<Login />} />

            {/* Home Page */}
            <Route path="/home" element={<Home />} />

            {/* Other Pages */}
            <Route path="/signup" element={<Signup />} />
            <Route path="/analyzer" element={<Analyzer />} />
            <Route path="/dashboard" element={<Dashboard />} />

          </Routes>
        </main>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;