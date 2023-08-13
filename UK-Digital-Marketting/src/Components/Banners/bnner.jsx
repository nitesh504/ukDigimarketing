import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Banner = () => {
  return (
    <Carousel
      className="heroBanner"
      showStatus={false}
      autoPlay={true}
      showArrows={false}
      infiniteLoop={true}
    >
      <div className="heroBanner-container" id="banner" data-aos="zoom-in">
        <div>
          <h1>
            <span>Reach your goals</span> <span> faster</span>
          </h1>
        </div>
        <p>
          <span> We provide business and brands</span>
          <span>digital marketing services</span>
        </p>
        <div>
          <a href="#contact">
            <button>Request a Quote</button>
          </a>
        </div>
      </div>
      <div className="heroBanner-container">
        <div>
          <h1>
            <span>
              Connect. Engage.<span>Succeed</span>
            </span>
          </h1>
        </div>
        <p>
          <span>Forge connections, engage deeply, and</span>
          <span>achieve remarkable success together.</span>
        </p>
        <div>
          <a href="#contact">
            <button>Request a Quote</button>
          </a>
        </div>
      </div>
      <div className="heroBanner-container">
        <div>
          <h1>
            <span>Elevate Customer</span>
            <span> Experiences</span>
          </h1>
        </div>
        <p>
          <span>Revolutionize interactions, elevate satisfaction </span>
          <span>customer experiences.</span>
        </p>
        <div>
          <a href="#contact">
            <button>Request a Quote</button>
          </a>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
