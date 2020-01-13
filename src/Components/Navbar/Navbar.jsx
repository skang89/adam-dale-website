// import react packages
import React from "react";
import { Link } from "react-router-dom";

// import styles
import "./Navbar.scss";

const Navbar = ({ onMenuClick }) => {
  return (
    <header className="ad-navbar navbar">
      <div className="ad-menu" id="ad-menu" onClick={onMenuClick}>
        <div className="ad-menu__icon">
          <div className="ad-menu__line ad-menu__line--top" />
          <div className="ad-menu__line ad-menu__line--middle" />
          <div className="ad-menu__line ad-menu__line--bottom" />
        </div>
      </div>

      <div className="ad-menu-overlay " id="ad-menu-overlay">
        <nav className="ad-menu-overlay-menu">
          <ul>
            <li>
              <h2>
                Graphic Design & Art Direction.
                <br className="is-hidden-mobile" />
                Website under construction.
              </h2>
            </li>
            <li>
              <a
                href="https://www.instagram.com/adamnjdale/"
                target="_blank"
                rel="noopener noreferrer"
                title="Adam Dale Instagram"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@adamjdale.com?subject=Let's work together...&body=Send me a message describing what you're looking to achieve... "
                target="_blank"
                rel="noopener noreferrer"
                title="Contact Adam Dale at hello@adamjdale.com"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <Link to="/" className="ad-logo">
        <h1>Adam</h1>
      </Link>
    </header>
  );
};

export default Navbar;
