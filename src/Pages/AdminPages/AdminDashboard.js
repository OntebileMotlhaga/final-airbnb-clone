import React from 'react';
import Header from '../../components/LandingPage/Header/Header';
import Footer from '../../components/AdminComponents/Footer';
import './AdminDashboard.css';

function AdminDashboard() {
  return (
    <div>
      <Header />
      <div className="admin-dashboard">
        {/* Admin dashboard content will go here */}
      </div>
      <Footer />
    </div>
  );
}

export default AdminDashboard;
