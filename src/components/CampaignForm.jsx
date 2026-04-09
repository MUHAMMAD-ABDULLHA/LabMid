import React, { useState, useEffect } from "react";
import "./CampaignForm.css";

function CampaignForm({ isOpen, onClose, onSave, campaignData }) {
  const [formData, setFormData] = useState({
    campaignName: "",
    description: "",
    objectives: "",
    overallBudget: 0,
    dailySpend: 0,
    startDate: "",
    endDate: "",
    demographics: "",
    hasHistoricalData: false,
    historicalDataDetails: "",
    keyMessages: "",
    cta: "",
    specificOffers: "",
    enableAR: false,
    enableVoice: false,
    multiStepForm: false,
    personalizedLanding: false,
    campaignStatus: "draft",
    kpis: ""
  });

  useEffect(() => {
    if (campaignData) {
      setFormData({
        ...campaignData,
        startDate: campaignData.startDate ? new Date(campaignData.startDate).toISOString().split('T')[0] : "",
        endDate: campaignData.endDate ? new Date(campaignData.endDate).toISOString().split('T')[0] : "",
        kpis: Array.isArray(campaignData.kpis) ? campaignData.kpis.join(", ") : ""
      });
    } else {
      setFormData({
        campaignName: "",
        description: "",
        objectives: "",
        overallBudget: 0,
        dailySpend: 0,
        startDate: "",
        endDate: "",
        demographics: "",
        hasHistoricalData: false,
        historicalDataDetails: "",
        keyMessages: "",
        cta: "",
        specificOffers: "",
        enableAR: false,
        enableVoice: false,
        multiStepForm: false,
        personalizedLanding: false,
        campaignStatus: "draft",
        kpis: ""
      });
    }
  }, [campaignData, isOpen]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedData = {
      ...formData,
      kpis: formData.kpis.split(",").map(k => k.trim()).filter(k => k !== ""),
      createdBy: localStorage.getItem("userEmail") || "anonymous"
    };
    onSave(formattedData);
  };

  if (!isOpen) return null;

  return (
    <div className="cf-modal-overlay">
      <div className="cf-modal-container">
        <header className="cf-modal-header">
          <h2>{campaignData ? "Edit Campaign" : "Build New Campaign"}</h2>
          <button className="cf-close-btn" onClick={onClose}>&times;</button>
        </header>

        <form onSubmit={handleSubmit} className="cf-form">
          <div className="cf-form-section">
            <h3>Basic Identification</h3>
            <div className="cf-grid">
              <div className="cf-input-group full">
                <label>Campaign Name</label>
                <input
                  type="text"
                  name="campaignName"
                  value={formData.campaignName}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Summer Sprint 2024"
                />
              </div>
              <div className="cf-input-group full">
                <label>Core Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  placeholder="What is this campaign about?"
                />
              </div>
            </div>
          </div>

          <div className="cf-form-section">
            <h3>Strategy & Objectives</h3>
            <div className="cf-grid">
              <div className="cf-input-group">
                <label>Primary Objectives</label>
                <input
                  type="text"
                  name="objectives"
                  value={formData.objectives}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Brand Awareness"
                />
              </div>
              <div className="cf-input-group">
                <label>Key Performance Indicators (KPIs)</label>
                <input
                  type="text"
                  name="kpis"
                  value={formData.kpis}
                  onChange={handleChange}
                  placeholder="CTR, ROAS, Conversions (comma separated)"
                />
              </div>
            </div>
          </div>

          <div className="cf-form-section">
            <h3>Financials & Timeline</h3>
            <div className="cf-grid">
              <div className="cf-input-group">
                <label>Overall Budget ($)</label>
                <input
                  type="number"
                  name="overallBudget"
                  value={formData.overallBudget}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="cf-input-group">
                <label>Daily Spend Limit ($)</label>
                <input
                  type="number"
                  name="dailySpend"
                  value={formData.dailySpend}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="cf-input-group">
                <label>Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="cf-input-group">
                <label>End Date</label>
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="cf-form-section">
            <h3>Content & Messaging</h3>
            <div className="cf-grid">
              <div className="cf-input-group full">
                <label>Key Messages</label>
                <input
                  type="text"
                  name="keyMessages"
                  value={formData.keyMessages}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="cf-input-group">
                <label>Call to Action (CTA)</label>
                <input
                  type="text"
                  name="cta"
                  value={formData.cta}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="cf-input-group">
                <label>Specific Offers</label>
                <input
                  type="text"
                  name="specificOffers"
                  value={formData.specificOffers}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="cf-form-section">
            <h3>Advanced Features & Status</h3>
            <div className="cf-checkbox-grid">
              <label className="cf-checkbox-item">
                <input
                  type="checkbox"
                  name="enableAR"
                  checked={formData.enableAR}
                  onChange={handleChange}
                />
                Augmented Reality (AR)
              </label>
              <label className="cf-checkbox-item">
                <input
                  type="checkbox"
                  name="enableVoice"
                  checked={formData.enableVoice}
                  onChange={handleChange}
                />
                Voice Interaction
              </label>
              <label className="cf-checkbox-item">
                <input
                  type="checkbox"
                  name="multiStepForm"
                  checked={formData.multiStepForm}
                  onChange={handleChange}
                />
                Multi-Step Engagement
              </label>
              <label className="cf-checkbox-item">
                <input
                  type="checkbox"
                  name="personalizedLanding"
                  checked={formData.personalizedLanding}
                  onChange={handleChange}
                />
                AI Personalized Landing
              </label>
            </div>
            <div className="cf-status-select">
              <label>Campaign Status</label>
              <select
                name="campaignStatus"
                value={formData.campaignStatus}
                onChange={handleChange}
              >
                <option value="draft">Draft</option>
                <option value="launch">Launch</option>
              </select>
            </div>
          </div>

          <div className="cf-form-actions">
            <button type="button" className="cf-cancel-btn" onClick={onClose}>Cancel</button>
            <button type="submit" className="cf-submit-btn">
              {campaignData ? "Update Campaign" : "Create Campaign"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CampaignForm;
