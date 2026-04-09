import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1, paddingTop: '70px' }}> {/* Added padding for fixed navbar */}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
