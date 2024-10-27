import React, {useState} from "react";
import logo from "../src/assets/HG_logo.png";

import Footer from "./components/footer";
import "./components/Home.css";
import "./components/ContactUs.css";

const ContactUs = () => {

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
    <div className="Contact">
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
          <h2 className="h20"> Contact us </h2>
          <p className="p">Get in touch with us any time!</p>
        </div>
      </header>

      <div className="contact-form-container">
      <div className="form-section">
        <h1>Contact our team</h1>
        <p className='det'>
        We are always happy to hear from you about new ideas or information
            that may clarify, expand on, or even contradict our published work.
            We ask, however, that you refrain from providing us with non-public
            information that you are required to keep confidential. In addition,
            please refrain from sending us any personal health, financial,
            and/or other identifying information concerning any individual.
        </p>
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Full Name" name="Name" required />
                      </div>
          <div className="form-row">
            <input type="email" placeholder="Email" name="email" required />
          </div>
          <div className="form-row">
            <input type="tel" placeholder="Phone number" name="phoneNumber" required />
          </div>
          <div className="form-row">
            <textarea placeholder="Leave us a message..." name="message" required></textarea>
          </div>
          <button type="submit">Send message</button>
        </form>
      </div>
      <div className="info-section">
        <h2>Chat with us</h2>
        <p><a href="mailto:homchangoff1@gmail.com">Shoot us an email</a></p>
        <p><a href="https://x.com/homchangoffl">Message us on X</a></p>
        <p><a href="https://www.instagram.com/homchang_northeast/">Message us on Instagram</a></p>
        <p><a href="https://www.facebook.com/homchangnewspaper">Message us on Facebook</a></p>



        <h2>Call us</h2>
        <p>Call our team Mon-Fri from 9am to 5pm.</p>
        <p><a href="tel:+919864891986">+91-9864891986</a></p>
      </div>
    </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
