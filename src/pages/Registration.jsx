import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import anime from 'animejs/lib/anime.es.js';
import "../Registration.css";

function BrandRegistration() {
  const navigate = useNavigate();
  const visualRef = useRef(null);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    brandName: "",
    email: "",
    password: "",
    confirmPassword: "",
    website: "",
    industry: "",
    description: ""
  });
  const baseurl = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

  const industries = [
    "Fashion & Apparel",
    "Electronics",
    "Food & Beverage",
    "Health & Beauty",
    "Home & Garden",
    "Automotive",
    "Sports & Outdoor",
    "Other"
  ];

  useEffect(() => {
    anime.timeline({
      easing: 'easeOutExpo'
    })
    .add({
      targets: '.reg-visual-side',
      translateX: ['-100%', '0%'],
      duration: 1200
    })
    .add({
      targets: '.reg-form-side',
      opacity: [0, 1],
      translateX: [50, 0],
      duration: 1000,
      offset: '-=800'
    });

    anime({
      targets: '.reg-floating-orb',
      translateY: [-30, 30],
      duration: 4000,
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
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    try {
      const response = await fetch(baseurl + "/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, role: "brandAdmin" })
      });
      const data = await response.json();

      if (data.success) {
        alert("Brand registration successful!");
        navigate("/login");
      } else {
        alert("Registration failed: " + data.message);
      }
    } catch {
      alert("An error occurred during registration. Please try again.");
    }
  };

  return (
    <div className="reg-wrapper">
      <div className="reg-visual-side" ref={visualRef}>
        <div className="reg-floating-orb" style={{ top: '15', left: '20%', width: '200px', height: '200px', background: 'rgba(59, 130, 246, 0.2)' }}></div>
        <div className="reg-floating-orb" style={{ bottom: '20%', right: '15%', width: '300px', height: '300px', background: 'rgba(26, 26, 46, 0.3)' }}></div>
        
        <div className="reg-brand-context">
          <h1 className="reg-visual-title">Scale with AdEngage</h1>
          <p className="reg-visual-subtitle">Join thousands of brands leveraging AI to transform their digital presence.</p>
        </div>
      </div>

      <div className="reg-form-side" ref={formRef}>
        <div className="reg-auth-card">
          <div className="reg-auth-header">
            <h2>Apply for Access</h2>
            <p>Tell us more about your brand</p>
          </div>

          <form onSubmit={handleSubmit} className="reg-auth-form">
            <div className="reg-form-grid">
              <div className="reg-input-group">
                <label>Brand Name</label>
                <input
                  type="text"
                  name="brandName"
                  value={formData.brandName}
                  onChange={handleChange}
                  placeholder="e.g. Acme Corp"
                  required
                />
              </div>

              <div className="reg-input-group">
                <label>Industry</label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Industry</option>
                  {industries.map((ind, idx) => (
                    <option key={idx} value={ind}>{ind}</option>
                  ))}
                </select>
              </div>

              <div className="reg-input-group full-width">
                <label>Professional Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@brand.com"
                  required
                />
              </div>

              <div className="reg-input-group full-width">
                <label>Website URL</label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://yourbrand.com"
                />
              </div>

              <div className="reg-input-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                />
              </div>

              <div className="reg-input-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button type="submit" className="reg-auth-button">
              Create Account
            </button>
          </form>

          <div className="reg-auth-footer">
            <p>Already have an account? <Link to="/login">Sign In</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandRegistration;