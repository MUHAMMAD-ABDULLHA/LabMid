import React, { useState, useEffect } from "react";
import "../Home.css";

function Home() {
  const mockCampaigns = [
    {
      id: 1,
      campaignName: "Summer Collection 2023",
      description: "Promote our new summer fashion line",
      brand: "FashionCo",
      image: "https://unsplash.com/photos/hanged-top-on-brown-and-white-clothes-horse-TS--uNw-JqEs", 
      status: "active",
      category: "fashion"
    },
    {
      id: 2,
      campaignName: "Tech Gadgets Launch",
      description: "Showcase our latest tech products",
      brand: "TechWorld",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      status: "active",
      category: "technology"
    },
    {
      id: 3,
      campaignName: "Healthy Living",
      description: "Promote wellness and healthy lifestyle",
      brand: "HealthPlus",
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
      status: "upcoming",
      category: "health"
    }
  ];

  const [campaigns, setCampaigns] = useState(mockCampaigns);
  const [userRole, setUserRole] = useState('endUser'); 
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const role = localStorage.getItem('userRole') || 'endUser';
    setUserRole(role);
  }, []);

  const filteredCampaigns = filter === 'all' 
    ? campaigns 
    : campaigns.filter(campaign => campaign.category === filter);

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to BrandPromo</h1>
        <p className="subtitle">Discover exciting campaigns tailored for you</p>
      </header>

      {userRole === 'brandAdmin' ? (
        <section className="brand-admin-section">
          <div className="section-header">
            <h2>Your Active Campaigns</h2>
            <button className="primary-button">+ Create New Campaign</button>
          </div>
          
          {filteredCampaigns.length > 0 ? (
            <div className="campaign-grid">
              {filteredCampaigns.map(campaign => (
                <div key={campaign.id} className="campaign-card">
                  <div 
                    className="campaign-image" 
                    style={{ backgroundImage: `url(${campaign.image})` }}
                  >
                    <span className={`status-badge ${campaign.status}`}>
                      {campaign.status}
                    </span>
                  </div>
                  <div className="campaign-content">
                    <h3>{campaign.campaignName}</h3>
                    <p className="brand-name">{campaign.brand}</p>
                    <p>{campaign.description}</p>
                    <div className="campaign-actions">
                      <button className="secondary-button">View Details</button>
                      <button className="primary-button">Manage</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <img src="/images/empty-campaigns.svg" alt="No campaigns" />
              <p>No active campaigns found for your brand.</p>
              <button className="primary-button">Create Your First Campaign</button>
            </div>
          )}
        </section>
      ) : (
        <section className="campaign-explorer">
          <div className="section-header">
            <h2>Available Campaigns</h2>
            <div className="filter-tabs">
              <button 
                className={filter === 'all' ? 'active' : ''}
                onClick={() => setFilter('all')}
              >
                All
              </button>
              <button 
                className={filter === 'fashion' ? 'active' : ''}
                onClick={() => setFilter('fashion')}
              >
                Fashion
              </button>
              <button 
                className={filter === 'technology' ? 'active' : ''}
                onClick={() => setFilter('technology')}
              >
                Technology
              </button>
              <button 
                className={filter === 'health' ? 'active' : ''}
                onClick={() => setFilter('health')}
              >
                Health
              </button>
            </div>
          </div>

          {filteredCampaigns.length > 0 ? (
            <div className="campaign-grid">
              {filteredCampaigns.map(campaign => (
                <div key={campaign.id} className="campaign-card">
                  <div 
                    className="campaign-image" 
                    style={{ backgroundImage: `url(${campaign.image})` }}
                  >
                    <span className={`status-badge ${campaign.status}`}>
                      {campaign.status}
                    </span>
                  </div>
                  <div className="campaign-content">
                    <h3>{campaign.campaignName}</h3>
                    <p className="brand-name">{campaign.brand}</p>
                    <p>{campaign.description}</p>
                    <div className="campaign-actions">
                      <button className="primary-button">
                        {userRole === 'influencer' ? 'Apply Now' : 'View Details'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <img src="/images/empty-campaigns.svg" alt="No campaigns" />
              <p>No campaigns available in this category.</p>
            </div>
          )}
        </section>
      )}
    </div>
  );
}

export default Home;