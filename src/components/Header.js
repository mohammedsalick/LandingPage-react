// Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/home" className="nav__logo">
          AI CERTs
        </Link>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/home" className="nav__link">
                <i className="fas fa-home"></i>
                <span className="link-text">Home</span>
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/about" className="nav__link">
                <i className="fas fa-info-circle"></i>
                <span className="link-text">About</span>
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/certification" className="nav__link">
                <i className="fas fa-certificate"></i>
                <span className="link-text">Certification</span>
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/partners" className="nav__link">
                <i className="fas fa-handshake"></i>
                <span className="link-text">Authorized Partners</span>
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/trainers" className="nav__link">
                <i className="fas fa-user-tie"></i>
                <span className="link-text">Authorized Trainers</span>
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/resources" className="nav__link">
                <i className="fas fa-book"></i>
                <span className="link-text">Resources</span>
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/contact" className="nav__link">
                <i className="fas fa-envelope"></i>
                <span className="link-text">Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
