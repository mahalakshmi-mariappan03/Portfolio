import React from 'react';
import BackToTopButton from '../BackToTopButton/BackToTopButton';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Your Mahalakshmi. All Rights Reserved.</p>
        <div className="back">
          <BackToTopButton />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
