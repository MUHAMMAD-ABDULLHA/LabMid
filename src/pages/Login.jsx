import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import anime from 'animejs/lib/anime.es.js';
import '../Login.css';

function Login() {
  const baseurl = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  const visualRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    // Entrance animation
    anime.timeline({
      easing: 'easeOutExpo'
    })
    .add({
      targets: '.visual-side',
      translateX: ['-100%', '0%'],
      duration: 1200
    })
    .add({
      targets: '.form-side',
      opacity: [0, 1],
      translateX: [50, 0],
      duration: 1000,
      offset: '-=800'
    });

    // Floating background elements
    anime({
      targets: '.floating-orb',
      translateY: [-20, 20],
      duration: 3000,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutQuad'
    });
  }, []);

  const handleChange = (e) => {
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
      const response = await fetch(baseurl + "/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log("Login response:", data);
      
      if (data.success) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userRole", data.role);
        localStorage.setItem("userEmail", data.email);
        localStorage.setItem("userName", data.fullName);
        
        navigate("/campaigns");
      } else {
        alert("Login failed: " + data.message);
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="visual-side" ref={visualRef}>
        <div className="floating-orb" style={{ top: '20%', left: '15%', width: '150px', height: '150px', background: 'rgba(59, 130, 246, 0.2)' }}></div>
        <div className="floating-orb" style={{ bottom: '10%', right: '10%', width: '250px', height: '250px', background: 'rgba(26, 26, 46, 0.3)' }}></div>
        
        <div className="brand-context">
          <h1 className="visual-title">Welcome Back</h1>
          <p className="visual-subtitle">Experience the next generation of AI-powered advertising precision.</p>
        </div>
      </div>

      <div className="form-side" ref={formRef}>
        <div className="auth-card">
          <div className="auth-header">
            <h2>Sign In</h2>
            <p>Access your AdEngage dashboard</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="luxury-input-group">
              <label>Professional Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@company.com"
                required
              />
            </div>

            <div className="luxury-input-group">
              <label>Secure Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
              />
            </div>

            <button type="submit" className="luxury-auth-button">
              Sign In
            </button>
          </form>

          <div className="auth-footer">
            <p>New to AdEngage? <Link to="/registration">Apply for Access</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;