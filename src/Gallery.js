import React, {useState} from "react";
import logo from "../src/assets/HG_logo.png";

import Footer from "./components/footer";
import "./components/ContactUs.css";

const Gallery = () => {

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
    <div className="about">
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
        <div className="headline bg">
          <h2 className="h20"> Gallery   </h2>
          {/* <p className="p">Know about us?</p> */}
        </div>
      </header>
      
      <Footer />
      
    </div>
  );
};

export default Gallery;
