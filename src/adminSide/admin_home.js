import React from 'react';

import './admin-header.css'; // header and side new style sheet
import companyLogo from '../assets/HG_logo.png';  

const admin_home = () => {
    return (
        <div className='admin-content'>

        <header className="header">
            <div className="header-content">
                <img src={companyLogo} alt="Company Logo" className="company-logo" />
            </div>
        </header>

        <div className="sidebar">
      <h2>Admin Panel</h2>
      <ul>
        <li><a href="/adminHome">Dashboard</a></li>
        <li><a href="/adminDetails">Update Personal Details</a></li>
        <li><a href="/manageContent">Manage Website Content</a></li>
      </ul>
    </div>

    <div className="dashboard">
      <h1>Welcome, Admin</h1>
      <p>Use the sidebar to navigate through the admin panel.</p>
    </div>

        </div>

    );
};

export default admin_home;
