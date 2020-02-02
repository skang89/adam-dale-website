// import react packages
import React from "react";
import Slider from "react-slick";

// import styles
import "./Slideshow.scss";

const Slideshow = ({ onCurrentSlide }) => {
  const sliderSettings = {
    autoplay: true, // is true
    autoplaySpeed: 2250,
    arrows: false,
    draggable: false, // is false
    fade: true,
    infinite: true,
    // lazyLoaded: "image",
    speed: 500,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false, // is false
    touchMove: false // is false
    // beforeChange: (current, next) => {
    //   if (document.querySelector(".slick-active").nextElementSibling) {
    //     document
    //       .querySelector(".slick-active")
    //       .nextElementSibling.childNodes[0].childNodes.forEach(slide => {
    //         if (slide.classList.contains("adw-slider__item--light")) {
    //           document
    //             .querySelector(".adw-logo")
    //             .classList.add("adw-logo--dark");
    //           document
    //             .querySelector(".adw-menu")
    //             .classList.add("adw-menu--dark");
    //         } else {
    //           document
    //             .querySelector(".adw-logo")
    //             .classList.remove("adw-logo--dark");
    //           document
    //             .querySelector(".adw-menu")
    //             .classList.remove("adw-menu--dark");
    //         }
    //       });
    //   }
    // }
  };

  return (
    <>
      <section className="adw-slider is-hidden-mobile">
        <Slider {...sliderSettings}>
          <div className="adw-slider__item">
            <img
              src="assets/images/desktop/WMCA_Brindley_Place.jpg"
              alt="West Midlands Combined Authority Brindley Place"
            />
          </div>

          <div className="adw-slider__item">
            <img
              src="assets/images/desktop/WMCA_Library.jpg"
              alt="West Midlands Combined Authority Library"
            />
          </div>

          <div className="adw-slider__item">
            <img src="assets/images/desktop/HI_Logo.png" alt="HI logo" />
          </div>

          <div className="adw-slider__item">
            <img
              src="assets/images/desktop/HI_Beer_Bottles.jpg"
              alt="HI beer bottles"
            />
          </div>

          <div className="adw-slider__item">
            <img
              src="assets/images/desktop/HI_Mobile_Website.jpg"
              alt="HI mobile website"
            />
          </div>

          <div className="adw-slider__item">
            <img src="assets/images/desktop/She_Lead.png" alt="She lead" />
          </div>

          <div className="adw-slider__item">
            <img src="assets/images/desktop/Ittimaas.png" alt="Ittimaas" />
          </div>

          <div className="adw-slider__item">
            <img
              src="assets/images/desktop/Ittimaas_Box.jpg"
              alt="Ittimaas box"
            />
          </div>

          <div className="adw-slider__item">
            <img src="assets/images/desktop/SOB_Logos.png" alt="SOB Logo" />
          </div>

          <div className="adw-slider__item">
            <img src="assets/images/desktop/SOB_Posters.jpg" alt="SOB poster" />
          </div>

          <div className="adw-slider__item">
            <img
              src="assets/images/desktop/SOB_Book_Cover.jpg"
              alt="SOB book cover"
            />
          </div>

          <div className="adw-slider__item">
            <img src="assets/images/desktop/Kachun.png" alt="Kachun" />
          </div>

          <div className="adw-slider__item">
            <img src="assets/images/desktop/CM_Font.png" alt="CM Font" />
          </div>

          <div className="adw-slider__item">
            <img src="assets/images/desktop/CM_Wall.jpg" alt="CM  Wall" />
          </div>

          <div className="adw-slider__item">
            <img src="assets/images/desktop/NCVO.png" alt="NCVO" />
          </div>

          <div className="adw-slider__item">
            <img
              src="assets/images/desktop/David_Cobley.jpg"
              alt="David Cobley"
            />
          </div>
        </Slider>
      </section>
      <section className="adw-slider is-hidden-tablet">
        <Slider {...sliderSettings}>
          <div className="adw-slider__item">
            <img
              src="assets/images/mobile/WMCA_Brindley_Place_Mobile.jpg"
              alt="West Midlands Combined Authority Brindley Place"
            />
          </div>

          <div className="adw-slider__item">
            <img
              src="assets/images/mobile/WMCA_Library_Mobile.jpg"
              alt="West Midlands Combined Authority Library"
            />
          </div>

          <div className="adw-slider__item">
            <img src="assets/images/mobile/HI_Logo_Mobile.png" alt="HI logo" />
          </div>

          <div className="adw-slider__item ">
            <img
              src="assets/images/mobile/HI_Beer_Bottle_Mobile.jpg"
              alt="HI beer bottle"
            />
          </div>

          <div className="adw-slider__item">
            <img
              src="assets/images/mobile/HI_Mobile_Website_Mobile.jpg"
              alt="HI mobile website"
            />
          </div>

          <div className="adw-slider__item">
            <img
              src="assets/images/mobile/She_Lead_Mobile.png"
              alt="She lead"
            />
          </div>

          <div className="adw-slider__item">
            <img
              src="assets/images/mobile/Ittimaas_Mobile.png"
              alt="Ittimaas"
            />
          </div>

          <div className="adw-slider__item">
            <img
              src="assets/images/mobile/Ittimaas_Box_Mobile.jpg"
              alt="Ittimaas box"
            />
          </div>

          <div className="adw-slider__item">
            <img src="assets/images/mobile/SOB_Mobile.png" alt="SOB Logo" />
          </div>

          <div className="adw-slider__item">
            <img
              src="assets/images/mobile/SOB_Posters_Mobile.jpg"
              alt="SOB poster"
            />
          </div>

          <div className="adw-slider__item">
            <img
              src="assets/images/mobile/SOB_Book_Cover_Mobile.jpg"
              alt="SOB book cover"
            />
          </div>

          <div className="adw-slider__item">
            <img src="assets/images/mobile/Kachun_Mobile.png" alt="Kachun" />
          </div>

          <div className="adw-slider__item">
            <img src="assets/images/mobile/CM_Font_Mobile.png" alt="CM Font" />
          </div>

          <div className="adw-slider__item ">
            <img src="assets/images/mobile/CM_Wall_Mobile.jpg" alt="CM  Wall" />
          </div>

          <div className="adw-slider__item">
            <img src="assets/images/mobile/NCVO_Mobile.png" alt="NCVO" />
          </div>

          <div className="adw-slider__item">
            <img
              src="assets/images/mobile/David_Cobley_Mobile.jpg"
              alt="David Cobley"
            />
          </div>
        </Slider>
      </section>
    </>
  );
};

export default Slideshow;
