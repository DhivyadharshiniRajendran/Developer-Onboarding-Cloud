import React from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/Layout.css';

const MainLayout = ({ children, currentPage }) => {
  return (
    <div className="main-layout">
      <Sidebar currentPage={currentPage} />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
