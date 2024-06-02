import "../../Root.css";
import "./Testimonial.css";
import TestimonialCard from "./TestimonialCard";
// import rightbutton from "../../assets/Right button.png";
// import leftbutton from "../../assets/Left button.png";
import { useState } from "react";

const Testimonial = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  const handleHovered1 = () => {
    setIsHovered1(!isHovered1);
  };

  const handleHovered2 = () => {
    setIsHovered2(!isHovered2);
  };

  return (
    <div className="wrapper-white">
      <div className="testimonial-container">
        <h1>Testimonial</h1>
        <p className="containter-p">
          Berbagai review positif dari para pelanggan kami
        </p>
        <TestimonialCard />
        <div className="button-testimonial-container">
          <button
            className={`base-button ${
              isHovered1 ? "btn-left-on" : "btn-left-off"
            }`}
            onMouseEnter={handleHovered1}
            onMouseLeave={handleHovered1}
          ></button>
          <button
            className={`base-button ${
              isHovered2 ? "btn-right-on" : "btn-right-off"
            }`}
            onMouseEnter={handleHovered2}
            onMouseLeave={handleHovered2}
          ></button>

          {/* <a href="">
            <img src={leftbutton} alt="" />
          </a>
          <a href="">
            <img src={rightbutton} alt="" />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
