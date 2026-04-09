import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();
  const hideFooterRoutes = ['/login', '/registration', '/campaigns'];
  const shouldHideFooter = hideFooterRoutes.includes(location.pathname);

  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1, paddingTop: '70px' }}> {/* Added padding for fixed navbar */}
        {children}
      </main>
      {!shouldHideFooter && <Footer />}
    </div>
  );
};

export default Layout;
