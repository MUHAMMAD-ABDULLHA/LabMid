import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Login.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      alert("Please enter both email and password");
      return;
    }

    console.log("Login attempt with:", formData);
    localStorage.setItem('userEmail', formData.email);
    navigate('/');
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