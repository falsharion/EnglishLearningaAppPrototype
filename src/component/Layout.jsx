
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import DesktopWarning from './DesktopWarning';

const Layout = () => {
  return ( 
    <div>
    <DesktopWarning />
    <div className="mobile-only layout">
      <main className="content">
        <Outlet />
      </main>
      <Navbar />
    </div></div>
  );
};

export default Layout;
