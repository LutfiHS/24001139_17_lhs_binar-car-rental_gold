import "../../Root.css";
import "./Testimonial.css";
import TestimonialCard from "./TestimonialCard";
import rightbutton from "../../assets/Right button.png";
import leftbutton from "../../assets/Left button.png";

const Testimonial = () => {
  return (
    <div className="wrapper-white">
      <div className="testimonial-container">
        <h1>Testimonial</h1>
        <p className="containter-p">
          Berbagai review positif dari para pelanggan kami
        </p>
        <TestimonialCard />
        <div className="button-container">
          <a href="">
            <img src={leftbutton} alt="" />
          </a>
          <a href="">
            <img src={rightbutton} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
