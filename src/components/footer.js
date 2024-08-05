import React from 'react';
import './Footer.css';

const footer = () => {
  return (
    <footer className="footer">
      <div className="footer-subscribe">
        <h3>GET OUR LATEST REPORTS DELIVERED TO YOUR INBOX</h3>
        <div className="subscribe-form">
          <input type="email" placeholder="email address" />
          <button type="submit">SUBSCRIBE</button>
        </div>
      </div>
      <div className="footer-legal">
        <p>© 2024 Homgchang. All Rights Reserved · 
            <a href="#">Legal Disclaimer</a> · 
            <a href="#">Privacy Policy</a>
        </p>
        <p>A2 soft solutions ltd.</p>
      </div>
    </footer>
  );
};

export default footer;
