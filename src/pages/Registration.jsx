import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Registration.css";

function BrandRegistration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    brandName: "",
    email: "",
    password: "",
    confirmPassword: "",
    website: "",
    industry: "",
    description: ""
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log("Brand registered:", { ...formData, role: "brandAdmin" });
    alert("Brand registration successful!");
    navigate("/login");
  };

  return (
    <div className="brand-registration-page">
      <div className="registration-container">
        <div className="registration-header">
          <button onClick={() => navigate(-1)} className="back-button">
            &larr; Back
          </button>
          <h1>Brand Registration</h1>
        </div>

        <form onSubmit={handleSubmit} className="registration-form">
          <div className="form-grid">
            <div className="form-group">
              <label>Brand Name *</label>
              <input
                type="text"
                name="brandName"
                value={formData.brandName}
                onChange={handleChange}
                required
              />
            </div>

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
              <label>Website</label>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="https://example.com"
              />
            </div>

            <div className="form-group">
              <label>Industry *</label>
              <select
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                required
              >
                <option value="">Select Industry</option>
                {industries.map((industry, index) => (
                  <option key={index} value={industry}>{industry}</option>
                ))}
              </select>
            </div>

            <div className="form-group full-width">
              <label>Brand Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="3"
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

            <div className="form-group">
              <label>Confirm Password *</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button type="submit" className="submit-button">
            Register Brand
          </button>
        </form>
      </div>
    </div>
  );
}

export default BrandRegistration;