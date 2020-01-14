// import react packages
import React from "react";
import Slider from "react-slick";

// import styles
import "./Slideshow.scss";

const Slideshow = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2250,
    arrows: false,
    draggable: false,
    fade: true,
    infinite: true,
    speed: 500,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    touchMove: false
  };

  return (
    <section className="adw-slider">
      <Slider {...settings}>
        <div className="adw-slider__item is-hidden-mobile">
          <img
            src="assets/images/desktop/WMCA_Brindley_Place.jpg"
            alt="West Midlands Combined Authority Brindley Place"
          />
        </div>

        <div className="adw-slider__item is-hidden-mobile">
          <img
            src="assets/images/desktop/WMCA_Library.jpg"
            alt="West Midlands Combined Authority Library"
          />
        </div>

        <div className="adw-slider__item is-hidden-mobile">
          <img src="assets/images/desktop/HI_Logo.png" alt="HI logo" />
          <img src="" alt="HI logo" className="is-hidden-tablet" />
        </div>

        <div className="adw-slider__item is-hidden-mobile">
          <img src="assets/images/desktop/HI_Beer_Can.jpg" alt="HI beer can" />
        </div>

        <div className="adw-slider__item is-hidden-mobile">
          <img
            src="assets/images/desktop/HI_Mobile_Website.jpg"
            alt="HI mobile website"
          />
        </div>

        <div className="adw-slider__item is-hidden-mobile">
          <img src="assets/images/desktop/She_Lead.png" alt="She lead" />
        </div>

        <div className="adw-slider__item is-hidden-mobile">
          <img src="assets/images/desktop/Ittimaas.png" alt="Ittimaas" />
        </div>

        <div className="adw-slider__item is-hidden-mobile">
          <img
            src="assets/images/desktop/Ittimaas_Stationary.jpg"
            alt="Ittimaas stationary"
          />
        </div>

        <div className="adw-slider__item is-hidden-mobile">
          <img src="assets/images/desktop/SOB_Logos.png" alt="SOB Logo" />
        </div>

        <div className="adw-slider__item is-hidden-mobile">
          <img src="assets/images/desktop/SOB_Posters.jpg" alt="SOB poster" />
        </div>

        <div className="adw-slider__item is-hidden-mobile">
          <img
            src="assets/images/desktop/SOB_Book_Cover.jpg"
            alt="SOB book cover"
          />
        </div>

        <div className="adw-slider__item is-hidden-mobile">
          <img src="assets/images/desktop/Kachun.png" alt="Kachun" />
        </div>

        <div className="adw-slider__item is-hidden-mobile">
          <img src="assets/images/desktop/CM_Font.png" alt="CM Font" />
        </div>

        <div className="adw-slider__item is-hidden-mobile">
          <img src="assets/images/desktop/CM_Wall.jpg" alt="CM  Wall" />
        </div>

        <div className="adw-slider__item is-hidden-mobile">
          <img src="assets/images/desktop/NCVO.png" alt="NCVO" />
        </div>

        <div className="adw-slider__item is-hidden-mobile">
          <img
            src="assets/images/desktop/David_Cobley.jpg"
            alt="David Cobley"
          />
        </div>
      </Slider>
    </section>
  );
};

export default Slideshow;
