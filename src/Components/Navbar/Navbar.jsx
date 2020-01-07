// import react packages
import React from "react";

//import styles
import "./Navbar.scss";

const Navbar = ({ onMenuClick }) => {
  return (
    <header className="ad-navbar navbar">
      <svg
        className="ad-menu"
        id="ad-menu"
        viewBox="0 0 100 100"
        onClick={onMenuClick}
      >
        <path
          className="ad-menu-line ad-menu-line--top"
          d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
        />
        <path className="ad-menu-line ad-menu-line--middle" d="m 30,50 h 40" />
        <path
          className="ad-menu-line ad-menu-line--bottom"
          d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
        />
      </svg>

      <div className="ad-menu-overlay " id="ad-menu-overlay">
        <nav className="ad-menu-overlay-menu">
          <ul>
            <li>
              <h2>
                Graphic Design & Art Direction. Website under construction.
              </h2>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      <a href="/" className="ad-logo">
        <h1>Adam</h1>
      </a>
    </header>
  );
};

export default Navbar;
