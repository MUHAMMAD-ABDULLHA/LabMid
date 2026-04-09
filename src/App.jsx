import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import LandingPage from "./pages/LandingPage";
import "./App.css";


function App() {
  return (

    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/campaigns" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />

    </Routes>
  );
}

export default App;
