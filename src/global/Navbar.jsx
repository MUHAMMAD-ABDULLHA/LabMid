import React, { useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import anime from 'animejs/lib/anime.es.js';

const Navbar = () => {
  const navRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/registration';
  const isCampaignPage = location.pathname === '/campaigns';

  useEffect(() => {
    anime({
      targets: navRef.current,
      translateY: [-20, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeOutExpo'
    });
  }, []);

  const handleScroll = (id) => {
    if (location.pathname !== '/') {
      navigate('/#' + id);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Offset for fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      localStorage.clear();
      alert("Logged out successfully");
      navigate("/");
    }
  };

  return (
    <nav ref={navRef} style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-color)',
      padding: '0.8rem 2rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-primary)', textDecoration: 'none' }}>
          AdEngage
        </Link>

        {/* Desktop Links */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {!isAuthPage && !isCampaignPage && (
            <>
              <button onClick={() => handleScroll('features')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600, opacity: 0.8, fontSize: '1rem', color: 'inherit', fontFamily: 'var(--font-display)' }}>Features</button>
              <button onClick={() => handleScroll('pricing')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600, opacity: 0.8, fontSize: '1rem', color: 'inherit', fontFamily: 'var(--font-display)' }}>Pricing</button>
              <button onClick={() => handleScroll('about')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600, opacity: 0.8, fontSize: '1rem', color: 'inherit', fontFamily: 'var(--font-display)' }}>About</button>
            </>
          )}
          
          <div style={{ display: 'flex', gap: '1rem', marginLeft: '1rem' }}>
            {isCampaignPage ? (
              <button onClick={handleLogout} style={{
                padding: '0.5rem 1.5rem',
                borderRadius: '50px',
                backgroundColor: 'var(--accent-primary)',
                color: 'white',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-display)',
                boxShadow: '0 4px 15px rgba(59, 130, 246, 0.2)'
              }}>
                Logout
              </button>
            ) : (
              <>
                {location.pathname !== '/login' && (
                  <Link to="/login" style={{ 
                    fontWeight: 600, 
                    color: 'var(--accent-primary)', 
                    textDecoration: 'none',
                    padding: '0.5rem 1rem',
                    fontFamily: 'var(--font-display)'
                  }}>
                    Login
                  </Link>
                )}
                {location.pathname !== '/registration' && (
                  <Link to="/registration" style={{
                    padding: '0.5rem 1.5rem',
                    borderRadius: '50px',
                    backgroundColor: 'var(--accent-primary)',
                    color: 'white',
                    fontWeight: 600,
                    textDecoration: 'none',
                    boxShadow: '0 4px 15px rgba(59, 130, 246, 0.2)',
                    fontFamily: 'var(--font-display)'
                  }}>
                    Register
                  </Link>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
