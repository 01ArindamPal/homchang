import React from "react";
import logo from "../assets/HG_logo.png";

import Footer from "./footer";
import "./ContactUs.css";
import './aboutUs.css'

const aboutUs = () => {
  return (
    <div className="about">
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

export default aboutUs;
