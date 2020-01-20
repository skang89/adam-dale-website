// import react packages
import React, { Component } from "react";

// import components
import Navbar from "../Components/Navbar/Navbar";
import Slideshow from "../Components/Slideshow/Slideshow";

class Home extends Component {
  onMenuClick = () => {
    if (
      !document
        .getElementById("adw-menu")
        .classList.contains("adw-menu--active")
    ) {
      document.getElementById("adw-menu").classList.toggle("adw-menu--active");
      document
        .getElementById("adw-menu-overlay")
        .classList.toggle("adw-menu-overlay--open");
      // document.querySelector(".adw-logo").classList.toggle("adw-logo--light");
    } else {
      document.getElementById("adw-menu").classList.remove("adw-menu--active");
      document
        .getElementById("adw-menu-overlay")
        .classList.remove("adw-menu-overlay--open");
      // document.querySelector(".adw-logo").classList.remove("adw-logo--light");
    }
  };

  render() {
    return (
      <>
        <Navbar onMenuClick={this.onMenuClick} />
        <Slideshow onCurrentSlide={this.onCurrentSlide} />
      </>
    );
  }
}

export default Home;
