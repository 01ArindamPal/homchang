import React, {useEffect} from 'react';
import './admin_login.css';

import log from './../assets/HG_logo.png';

const AdminLogin = () => {

  useEffect(() => {
    if (window.innerWidth < 768) {
      window.location.href = "/not-available"; // Redirect to "Not Available" page for mobile devices
    }
  }, []);

  return (
    <div className="login-page">
      <div className="login-container">
        <img src={log} alt="Company Logo" className="login-logo" />
        <h2 className="login-title">Admin Login</h2>

        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
