import React from "react";
import logo from "../assets/HG_logo.png";

import Footer from "./footer";
import "./Home.css";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="Contact">
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <img src={logo} alt="Company Logo" className="logo-image" />
          </div>
          <nav className="nav">
            <ul>
              <li>
                <a href="/">HOME</a>
              </li>
              <li>
                <a href="/about">ABOUT US</a>
              </li>
              <li>
              <a href="/gallery">GALLERY</a>
            </li>
              <li>
                <a href="/contactus">CONTACT US</a>
              </li>
            </ul>
          </nav>
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
        <p><a href="mailto:you@company.com">Shoot us an email</a></p>
        <p><a href="https://x.com/homchangoffl">Message us on X</a></p>
        <p><a href="https://www.instagram.com/homchang_northeast/">Message us on Instagram</a></p>
        <p><a href="https://www.facebook.com/homchangnewspaper">Message us on Facebook</a></p>



        <h2>Call us</h2>
        <p>Call our team Mon-Fri from 8am to 5pm.</p>
        <p><a href="tel:+15550000000">+1(555) 000-0000</a></p>
      </div>
    </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
