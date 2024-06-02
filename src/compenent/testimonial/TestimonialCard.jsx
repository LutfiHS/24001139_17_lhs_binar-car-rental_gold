import { CardTest } from "../../Utils/dummy";
import "./TestimonialCard.css";
import "../../Root.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { useState, useRef } from "react";

import Slider from "react-slick";

const TestinonialCard = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  let sliderRef = useRef(null);

  const handleHovered1 = () => {
    setIsHovered1(!isHovered1);
  };

  const handleHovered2 = () => {
    setIsHovered2(!isHovered2);
  };

  const next = () => {
    sliderRef.slickNext();
  };

  const previous = () => {
    sliderRef.slickPrev();
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="card-testimonial-container">
      <div className="card-testimonial-slider">
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          {CardTest.map((item, index) => (
            <div key={index} className="card-testimonial-center">
              <div className="card-testimonial-item">
                <img
                  className="content-card-img"
                  src={item.iconProfileUrl}
                  alt=""
                />
                <div className="content-card">
                  <img
                    className="content-card-icon"
                    src={item.iconRate}
                    alt=""
                  />
                  <p className="content-card-p1">{item.desc}</p>
                  <p className="content-card-p2">{`${item.name} ${item.age}, ${item.location}`}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="button-testimonial-container">
        <button
          className={`base-button ${
            isHovered1 ? "btn-left-on" : "btn-left-off"
          }`}
          onClick={previous}
          onMouseEnter={handleHovered1}
          onMouseLeave={handleHovered1}
        ></button>
        <button
          className={`base-button ${
            isHovered2 ? "btn-right-on" : "btn-right-off"
          }`}
          onClick={next}
          onMouseEnter={handleHovered2}
          onMouseLeave={handleHovered2}
        ></button>
      </div>
    </div>
  );
};

export default TestinonialCard;
