import React, {useState} from "react";
import logo from "../src/assets/HG_logo.png";

import Footer from "./components/footer";
import "./components/ContactUs.css";
import './components/aboutUs.css'

const AboutUs = () => {

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
          <h2 className="h20"> About us </h2>
          <p className="p">Know about us?</p>
        </div>
      </header>
      <div className="about-us-container">
      <div className="about-us-content">
        <h1>About Our Company</h1>
        <p>
        Homchang was founded on 19th January, 2021 as an Independent Media agency based in Tripura. 
        It's primary motive was to educate and aware young students on politics, social, economic, policies, and cultural 
        affairs of Northeast India.
        </p>
        <p>
        Over the time the media agency also began writing editorials criticising and advocating Government, 
        Non-Governmental organizations and civil societies. 

        </p>
        <p>
        Here, we try to incorporate the experiences and knowledge of the old and wise with young and fresh ideas. 
        Homchang looks ahead to inform and empower its readers with not only new but also critical outlook and perspectives.
        </p>
      </div>
    </div>
      <Footer />
      
    </div>
  );
};

export default AboutUs;
