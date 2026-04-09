import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Login.css';

function Login() {
  const baseurl = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      alert("Please enter both email and password");
      return;
    }
    try {
      const response = await fetch (baseurl + "/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log("Login response:", data);
    } catch (error) {
      console.error("Login error:", error);

    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <button onClick={() => navigate(-1)} className="back-button">
            &larr; Back
          </button>
          <h2>Login</h2>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password *</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        <div className="additional-links">
          <p>Don't have an account? <Link to="/registration">Register here</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Login;