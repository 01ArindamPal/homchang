import React from 'react';
import logo from '../assets/HG_logo.png';


import Footer from './footer';
import './ContactUs.css';


const aboutUs = () =>{
    return(
        <div className='about'>
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
        <h2 className='h20'> About us </h2>
        <p className='p'>Know about us?</p>
      </div>
    </header>
            <Footer />
        </div>

    );
};

export default aboutUs;