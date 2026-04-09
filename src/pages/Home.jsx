import React, { useState, useEffect } from "react";
import CampaignForm from "../components/CampaignForm";
import "../Home.css";

function Home() {
  const baseurl = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState('endUser');
  const [userEmail, setUserEmail] = useState('');
  const [filter, setFilter] = useState('all');
  
  // Modal states
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentCampaign, setCurrentCampaign] = useState(null);

  useEffect(() => {
    const role = localStorage.getItem('userRole') || 'endUser';
    const email = localStorage.getItem('userEmail') || '';
    setUserRole(role);
    setUserEmail(email);
    fetchCampaigns();
  }, []);

  const fetchCampaigns = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${baseurl}/api/campaigns`);
      const data = await response.json();
      setCampaigns(data);
    } catch (error) {
      console.error("Failed to fetch campaigns:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = () => {
    setCurrentCampaign(null);
    setIsFormOpen(true);
  };

  const handleEdit = (campaign) => {
    setCurrentCampaign(campaign);
    setIsFormOpen(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this campaign?")) {
      try {
        const response = await fetch(`${baseurl}/api/campaigns/${id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          setCampaigns(campaigns.filter(c => c._id !== id));
          alert("Campaign deleted successfully");
        } else {
          alert("Failed to delete campaign");
        }
      } catch (error) {
        console.error("Delete error:", error);
      }
    }
  };

  const handleSave = async (campaignData) => {
    try {
      const url = currentCampaign 
        ? `${baseurl}/api/campaigns/${currentCampaign._id}`
        : `${baseurl}/api/campaigns`;
      
      const method = currentCampaign ? "PUT" : "POST";

      const response = await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(campaignData),
      });

      if (response.ok) {
        alert(`Campaign ${currentCampaign ? "updated" : "created"} successfully!`);
        setIsFormOpen(false);
        fetchCampaigns();
      } else {
        const err = await response.json();
        alert("Operation failed: " + err.message);
      }
    } catch (error) {
      console.error("Save error:", error);
    }
  };

  // Filter campaigns (Brand Admins see their own, others see all)
  const filteredCampaigns = campaigns.filter(campaign => {
    const roleMatch = userRole === 'brandAdmin' ? campaign.createdBy === userEmail : true;
    const categoryMatch = filter === 'all' ? true : campaign.category === filter;
    return roleMatch && categoryMatch;
  });

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>AdEngage Intelligence Dashboard</h1>
        <p className="subtitle">Precision management for your advertising campaigns</p>
      </header>

      {userRole === 'brandAdmin' ? (
        <section className="brand-admin-section">
          <div className="section-header">
            <h2>Your Active Campaigns</h2>
            <button className="primary-button" onClick={handleCreate}>+ Create New Campaign</button>
          </div>
          
          {loading ? (
            <div className="loading-state">Loading campaigns...</div>
          ) : filteredCampaigns.length > 0 ? (
            <div className="campaign-grid">
              {filteredCampaigns.map(campaign => (
                <div key={campaign._id} className="campaign-card">
                  <div className="campaign-image" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #3b82f6 100%)' }}>
                    <span className={`status-badge ${campaign.campaignStatus}`}>
                      {campaign.campaignStatus}
                    </span>
                  </div>
                  <div className="campaign-content">
                    <h3>{campaign.campaignName}</h3>
                    <p className="brand-name">{campaign.objectives}</p>
                    <p className="description-text">{campaign.description}</p>
                    <div className="campaign-meta">
                      <span>Budget: ${campaign.overallBudget}</span>
                      <span>Ends: {new Date(campaign.endDate).toLocaleDateString()}</span>
                    </div>
                    <div className="campaign-actions">
                      <button className="secondary-button" onClick={() => handleEdit(campaign)}>Edit</button>
                      <button className="delete-button" onClick={() => handleDelete(campaign._id)}>Delete</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <p>No active campaigns found. Launch your first one today.</p>
              <button className="primary-button" onClick={handleCreate}>Create Your First Campaign</button>
            </div>
          )}
        </section>
      ) : (
        <section className="campaign-explorer">
          <div className="section-header">
            <h2>Available Campaigns</h2>
          </div>

          {loading ? (
            <div className="loading-state">Exploring campaigns...</div>
          ) : campaigns.length > 0 ? (
            <div className="campaign-grid">
              {campaigns.map(campaign => (
                <div key={campaign._id} className="campaign-card">
                  <div className="campaign-image" style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #1e293b 100%)' }}>
                    <span className={`status-badge ${campaign.campaignStatus}`}>
                      {campaign.campaignStatus}
                    </span>
                  </div>
                  <div className="campaign-content">
                    <h3>{campaign.campaignName}</h3>
                    <p className="brand-name">{campaign.objectives}</p>
                    <p>{campaign.description}</p>
                    <div className="campaign-actions">
                      <button className="primary-button">View Details</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <p>No campaigns currently available.</p>
            </div>
          )}
        </section>
      )}

      <CampaignForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
        onSave={handleSave}
        campaignData={currentCampaign}
      />
    </div>
  );
}

export default Home;