//import React from "react";

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import "./Footer.css";


const Footer = () => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    // subscription form

    <footer className="footer">
      <div className="footer-subscribe">
        <h3>GET OUR LATEST REPORTS DELIVERED TO YOUR INBOX</h3>
        <div className="subscribe-form">
          <input type="email" placeholder="email address" />

          <React.Fragment>
          <button type="submit" onClick={handleClickOpen}>SUBSCRIBE</button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Homchang"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Thank you for taking our subscription 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
          
        </div>
      </div>

      {/* Social media Handles */}

      <div className="footer-legal">
        <div className="social-media">
        <a href="https://www.facebook.com/homchangnewspaper" target="_blank"
              rel="noopener noreferrer">Facebook</a>
          <a href="https://www.youtube.com/@homchang_offl/videos" target="_blank"
              rel="noopener noreferrer">Youtube</a>
          <a href="https://x.com/homchangoffl" target="_blank"
              rel="noopener noreferrer">Twitter</a>
          <a href="https://www.instagram.com/homchang_northeast/" target="_blank"
              rel="noopener noreferrer">Instagram</a>
        </div>
        <p>
          © 2024 Homgchang. All Rights Reserved{" "}
          {/*· 
            <a href="#">Legal Disclaimer</a> · 
            <a href="#">Privacy Policy</a> */}
        </p>
        <p>Designed and maintained by A2 soft solutions.</p>
      </div>
    </footer>
  );
};

export default Footer;
