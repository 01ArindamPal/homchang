import React, {useState} from "react";
import "./Header.css";
import logo from "../assets/HG_logo.png";

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile drawer
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  // Close the drawer explicitly
  const closeDrawer = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
        <a href="/">
            <img src={logo} alt="Company Logo" className="logo-image" />
            </a>
        </div>
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        {isOpen && (
          <button className="close-drawer-btn" onClick={closeDrawer}>
            ✕
          </button>
        )}
        <a href="/" onClick={closeDrawer}>HOME</a>
        <a href="/about" onClick={closeDrawer}>ABOUT US</a>
        <a href="/gallery" onClick={closeDrawer}>GALLERY</a>
        <a href="/contactus" onClick={closeDrawer}>CONTACT US</a>
      </div>
      <div className="navbar-toggle" onClick={toggleDrawer}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      </div>
      <div className="headline">
        <h2>
        NEUFC sails into its maiden Durand Cup Final beating Shillong Lajong 
        </h2>
        <p>Published on September 03, 2024</p>
        <button className="read-report" onClick={() => window.location.href = '/report'}>Read Report</button>
      </div>
    </header>
  );
};

export default Header;
