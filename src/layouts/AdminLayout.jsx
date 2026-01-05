import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../components/admin/AdminSidebar';

const AdminLayout = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--bg-light)' }}>
      {/* Sidebar - Hamesha Left me rahega */}
      <AdminSidebar />
      
      {/* Right Side Content */}
      <div style={{ 
        marginLeft: '260px', 
        width: 'calc(100% - 260px)', 
        padding: '30px' 
      }}>
        <Outlet /> {/* Yahan Pages change honge (Dashboard, Brands, etc) */}
      </div>
    </div>
  );
};

export default AdminLayout;