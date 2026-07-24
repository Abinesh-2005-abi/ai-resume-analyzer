import React from "react";
import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Analyzer from "./pages/Analyzer";


function App() {

  return (

    <BrowserRouter>

      <div className="app">

        <Navbar />

        <main>

          <Routes>

            <Route 
              path="/" 
              element={<Home />} 
            />

            <Route 
              path="/login" 
              element={<Login />} 
            />

            <Route 
              path="/signup" 
              element={<Signup />} 
            />

            <Route 
              path="/dashboard" 
              element={<Dashboard />} 
            />

            <Route 
              path="/analyzer" 
              element={<Analyzer />} 
            />

          </Routes>

        </main>

        <Footer />

      </div>

    </BrowserRouter>

  );

}


export default App;