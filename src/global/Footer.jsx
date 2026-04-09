import React from 'react';
import { Twitter as TwitterIcon, GitHub as GitHubIcon, LinkedIn as LinkedInIcon } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-color)',
      padding: '4rem 2rem 2rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '3rem',
        marginBottom: '4rem'
      }}>
        <div>
          <h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>AdEngage</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Next-generation advertising engagement platform for modern brands.
          </p>
        </div>
        <div>
          <h4 style={{ marginBottom: '1.5rem' }}>Product</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-secondary)' }}>
            <a href="#features">Features</a>
            <a href="#analytics">Analytics</a>
            <a href="#integrations">Integrations</a>
          </div>
        </div>
        <div>
          <h4 style={{ marginBottom: '1.5rem' }}>Company</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-secondary)' }}>
            <a href="#about">About Us</a>
            <a href="#blog">Blog</a>
            <a href="#careers">Careers</a>
          </div>
        </div>
        <div>
          <h4 style={{ marginBottom: '1.5rem' }}>Connect</h4>
          <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-secondary)' }}>
            <TwitterIcon size={20} />
            <GitHubIcon size={20} />
            <LinkedInIcon size={20} />
          </div>
        </div>
      </div>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        paddingTop: '2rem',
        borderTop: '1px solid var(--border-color)',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '0.875rem',
        color: 'var(--text-secondary)'
      }}>
        <p>&copy; 2026 AdEngage Inc. All rights reserved.</p>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
