// import react packages
import React from "react";
import { Link } from "react-router-dom";

// import styles
import "./Navbar.scss";

const Navbar = ({ onMenuClick }) => {
  return (
    <div className="container adw-container">
      <header className="adw-navbar navbar">
        <button
          className="adw-menu"
          id="adw-menu"
          type="button"
          onClick={onMenuClick}
        >
          <div className="adw-menu__icon">
            <div className="adw-menu__line adw-menu__line--top" />
            <div className="adw-menu__line adw-menu__line--middle" />
            <div className="adw-menu__line adw-menu__line--bottom" />
          </div>
        </button>

        <div className="adw-menu-overlay " id="adw-menu-overlay">
          <nav className="adw-menu-overlay-menu">
            <ul>
              <li>
                <h2>
                  Graphic Design & Art Direction.{" "}
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
                  href="mailto:hello@adamnjdale.com?subject=Let's work together...&body=Send me a message describing what you're looking to achieve... "
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Contact Adam Dale at hello@adamnjdale.com"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <Link to="/" className="adw-logo">
          <h1>Adam</h1>
        </Link>
      </header>
    </div>
  );
};

export default Navbar;
