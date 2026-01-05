import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../../components/admin/AdminSidebar';

const AdminLayout = () => {
  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar Hamesha Left me rahega */}
      <AdminSidebar />
      
      {/* Main Content Area */}
      <div style={{ 
        marginLeft: '260px', /* Sidebar ki width jitna gap */
        padding: '30px', 
        width: '100%', 
        minHeight: '100vh',
        backgroundColor: 'var(--bg-color)' 
      }}>
        {/* Yahan par child pages (Add Product, Dashboard) dikhenge */}
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;