// import react packages
import React, { Component } from "react";

// import components
import Navbar from "../Components/Navbar/Navbar";
import Slideshow from "../Components/Slideshow/Slideshow";

class Home extends Component {
  onMenuClick = () => {
    if (
      !document.getElementById("ad-menu").classList.contains("ad-menu--active")
    ) {
      document.getElementById("ad-menu").classList.toggle("ad-menu--active");
      document
        .getElementById("ad-menu-overlay")
        .classList.toggle("ad-menu-overlay--open");
    } else {
      document.getElementById("ad-menu").classList.remove("ad-menu--active");
      document
        .getElementById("ad-menu-overlay")
        .classList.remove("ad-menu-overlay--open");
    }
  };

  render() {
    return (
      <>
        <div className="container is-fluid">
          <Navbar onMenuClick={this.onMenuClick} />
        </div>
        <Slideshow />
      </>
    );
  }
}

export default Home;
