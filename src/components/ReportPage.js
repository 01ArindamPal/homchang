import React from "react";

import Footer from "./footer";
import "./ReportPage.css"; // Create this CSS file for styling
import reportImage from "../assets/NEFC.png"; // Add your image here

const ReportPage = () => {
  return (
    <div>
      <div className="report-container">
        <div className="image-container">
          <img src={reportImage} alt="Report" className="report-image"/>
          <div className="date-overlay">Published on September 03, 2024</div>
        </div>
        <div className="report-content">
          <h1>
            NEUFC sails into its maiden Durand Cup Final beating Shillong Lajong
          </h1>
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
      <Footer />
    </div>
  );
};

export default ReportPage;
