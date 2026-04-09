import React, { useEffect } from 'react';

import { Hero, Pillars, Comparison, Technical, Impact, FinalCTA } from '../components/landing';
import './LandingPage.css';
import Layout from '../global/Layout';

const LandingPage = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>

      <div className="landing-page-container">
        <Hero />
        <Pillars />
        <Comparison />
        <Technical />
        <Impact />
        <FinalCTA />
      </div>
    </Layout>

  );
};

export default LandingPage;