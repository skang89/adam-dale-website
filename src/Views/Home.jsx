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
    } else {
      document.getElementById("adw-menu").classList.remove("adw-menu--active");
      document
        .getElementById("adw-menu-overlay")
        .classList.remove("adw-menu-overlay--open");
    }
  };

  onCurrentSlide {
    if (document.querySelector(".slick-active div .adw-slider__item--light")) {
      return (document.querySelector(".adw-logo").style.color = "black");
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
