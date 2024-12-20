import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header">
      <div className="header-left">
       <h1><img src="/image/m-butterfly-7753469_1280-removebg-preview.png" alt="Logo" className="logo" /><span className="logo-name">ahalakshmi</span>
       </h1>
      </div>
      <div className={`header-right ${isOpen ? 'open' : ''}`}>
        <Link to="home" smooth={true} duration={400}>
          <h3>Home</h3>
        </Link>
        <Link to="about" smooth={true} duration={400} >
          <h3>About</h3>
        </Link>
        <Link to="education" smooth={true} duration={400}>
          <h3>Education</h3>
        </Link>
        <Link to="skills" smooth={true} duration={400} >
          <h3>Skills</h3>
        </Link>
        <Link to="project" smooth={true} duration={400}>
          <h3>Project</h3>
        </Link>
        <Link to="contact" smooth={true} duration={400} >
          <h3>Contact</h3>
        </Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </div>
  );
};

export default Header;
