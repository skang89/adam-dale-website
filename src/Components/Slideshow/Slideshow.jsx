// import react packages
import React from "react";
import Slider from "react-slick";

const Slideshow = () => {
  const settings = {
    // autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    draggable: true, // needs to be turned to false
    fade: true,
    infinite: true,
    speed: 250,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    touchMove: false
    // variableWidth: true,
    // variableHeight: true
  };

  //     ,
  //     "",
  //     "",
  //     "",
  //     "assets/images/desktop/She_Lead.png",
  //     "assets/images/desktop/Ittimaas.png",
  //     "assets/images/desktop/Ittimaas_Stationary.jpg",
  //     "assets/images/desktop/SOB_Logos.png",
  //     "assets/images/desktop/SOB_Posters.jpg",
  //     "assets/images/desktop/SOB_Book_Cover.jpg",
  //     "assets/images/desktop/Kachun.png",
  //     "assets/images/desktop/CM_Font.png",
  //     "assets/images/desktop/CM_Wall.jpg",
  //     "assets/images/desktop/NCVO.png",
  //     "assets/images/desktop/David_Cobley.jpg"

  return (
    <section>
      <Slider {...settings}>
        <div className="is-hidden-mobile">
          <img
            src="assets/images/desktop/WMCA_Brindley_Place.jpg"
            alt="West Midlands Combined Authority Brindley Place"
          />
        </div>

        <div className="is-hidden-mobile">
          <img
            src="assets/images/desktop/WMCA_Library.jpg"
            alt="West Midlands Combined Authority Library"
          />
        </div>

        <div className="is-hidden-mobile">
          <img src="assets/images/desktop/HI_Logo.png" alt="HI logo" />
          <img src="" alt="HI logo" className="is-hidden-tablet" />
        </div>

        <div className="is-hidden-mobile">
          <img src="assets/images/desktop/HI_Beer_Can.jpg" alt="HI beer can" />
        </div>

        <div className="is-hidden-mobile">
          <img
            src="assets/images/desktop/HI_Mobile_Website.jpg"
            alt="HI mobile website"
          />
        </div>
      </Slider>
    </section>
  );
};

export default Slideshow;
