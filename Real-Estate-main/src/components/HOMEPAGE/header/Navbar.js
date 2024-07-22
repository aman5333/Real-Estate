

import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './Navbar.css';
import AOS from "aos";
import "aos/dist/aos.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(()=>{
    AOS.init({duration: "1000"});
  },[]);

  return (
    <div className="navbar" data-aos="top-top">
      <div className="navbar-left">
        <div className="navbar-burger" onClick={toggleMenu}>
          <div className={`burger-line ${isOpen ? 'open' : ''}`}></div>
          <div className={`burger-line ${isOpen ? 'open' : ''}`}></div>
          <div className={`burger-line ${isOpen ? 'open' : ''}`}></div>
        </div>
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          
          <Link to={'/'} className="navbar-link">Home</Link>
          <Link to={'/properties'} className="navbar-link">Properties</Link>
          <Link to={'/about'} className="navbar-link">About</Link>
          <Link to={'/blog'} className="navbar-link">Blog</Link>
        </div>
      </div>
      <div className="navbar-center">
        <span className="navbar-title">Aman</span>
      </div>
      <div className="navbar-right">
        <Link to={'/contact'} className="navbar-link">Contact Us</Link>
        <a href="tel:+91 98989-89898" className="navbar-phone">+91 94500-89058</a>
      </div>
    </div>
  );
};

export default NavBar;

