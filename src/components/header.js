import React from "react";
import "./Header.css";
import logo from "../assets/HG_logo.png";

const header = () => {
  return (
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
              <a href="/contactus">CONTACT US</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="headline">
        <h2>
          Adani Update – Our Response To India’s Securities Regulator SEBI
        </h2>
        <p>Published on August 15, 2024</p>
        <button className="read-report">Read Report</button>
      </div>
    </header>
  );
};

export default header;
