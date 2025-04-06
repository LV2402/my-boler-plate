import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <div>
      <Header />
      <Sidebar />
      <div style={{ marginLeft: '16rem', marginTop: '4rem', padding: '1rem' }}>
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;
