import React from 'react';
import logo from '../assets/HG_logo.png';


import Footer from './footer';
import './Home.css'
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className='Contact'>
        <header className="header">
      <div className="header-content">
        <div className="logo">
            <img src={logo} alt="Company Logo" className="logo-image" />
            
        </div>
        <nav className="nav">
          <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="/about">ABOUT US</a></li>
            <li><a href="/contactus">CONTACT US</a></li>
          </ul>
        </nav>
      </div>
      <div className="headline bg">
        <h2 className='h20'> Contact us </h2>
        <p className='p'>Get in touch with us any time!</p>
      </div>
    </header>

        <div className="contact-us">
      <div className="contact-details">
        <p className='det'> We are always happy to hear from you about new ideas or information that may clarify, expand on, or even contradict our 
          published work. We ask, however, that you refrain from providing us with non-public information that you are required to keep 
          confidential. In addition, please refrain from sending us any personal health, financial, and/or other identifying information 
          concerning any individual.</p>
        <p><strong>Phone:</strong> (123) 456-7890</p>
        <p><strong>Email:</strong> info@yourcompany.com</p>
        <p><strong>Instagram:</strong> <a href="https://www.instagram.com/homchang_northeast/" target="_blank" rel="noopener noreferrer">homchang_northeast</a></p>
        <p><strong>Twitter:</strong> <a href="https://x.com/homchangoffl" target="_blank" rel="noopener noreferrer">Homchang enews</a></p>
        <p><strong>Youtube:</strong> <a href="https://www.youtube.com/@homchang_offl/videos" target="_blank" rel="noopener noreferrer">Homchang NE</a></p>

      </div>
      <div className="feedback-form">
        <h2>Feedback Form</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>

    <Footer />
    </div>
  );
};

export default ContactUs;
