import React, { useState, useEffect } from 'react';
import './ScrollUpButton.css'; // Add custom styles for the button here

import up from '../assets/up.png'

const ScrollUpButton = () => {
  const [visible, setVisible] = useState(false);

  // Show or hide the button based on scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  // Scroll the page back to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="scroll-up-button">
      {visible && (
        <button onClick={scrollToTop} className="scroll-btn">
          <img src={up} alt='scroll up' className="scroll-icon"/>
        </button>
      )}
    </div>
  );
};

export default ScrollUpButton;
