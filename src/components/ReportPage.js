import React, {useState} from "react";

import Footer from "./footer";
import "./ReportPage.css"; // Create this CSS file for styling
import logo from "../assets/HG_logo.png";
import imggg from "../assets/fd.jpg";


import "./../components/Home.css";

const ReportPage = () => {

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
    <div>
      
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
    </header>

    <div className="main-body">
      <div className="larger-section">

      <div className="report-container">

      <h1>
            NEUFC sails into its maiden Durand Cup Final beating Shillong Lajong
          </h1>
          
        <div className="image-container">
          <img src={imggg} alt="Report" className="report-image"/>
          <div className="date-overlay">Published on September 03, 2024</div>
        </div>
        <div className="report-content">
          
          <p>
            In the most anticipated Northeast Derby Northeast United FC beats
            the home crowd favourites Shillong Lajong FC in the first semifinals
            of the Durand Cup to make it to its maiden final. The match was
            played in the jam packed Jawaharlal Nehru Stadium in Shillong. While
            Lajong was clearly the crowd favourites and had its home advantage
            over the visitors, NEUFC still managed to dominate the game scoring
            3-0 and keeping most of the ball possession with them. After its
            defeat in the semi finals of the last edition of Durand Cup, NEUFC
            made a tremendous comeback making it all the way to the finals in
            the current edition. The scorer’s for NEUFC in this intense
            semifinals was Thoi Singh 1-0 (13th mins), Alaeddine Ajarie 2-0
            (63rd min) and Parthib Gogoi in the added minutes of the game 3-0
            (90+). The second semi finals which will be played between Bengaluru
            FC and Mohan Bagan Super Giants on 27th August in the Yuva Bharati
            Stadium, Kolkata and the winner of the match will face NEUFC in the
            finals of this historic tournament.
          </p>
          {/* Add more paragraphs or content as needed */}
        </div>
      </div>
        
      </div>
      <div className="smaller-section"></div>

      {/* Empty section */}

    </div>
      <Footer />
      <div class="sticky-button">
  <button>Click Me</button>
</div>
    </div>
  );
};

export default ReportPage;
