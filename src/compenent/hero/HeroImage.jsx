import "../../Root.css";
import "./HeroImage.css";
import ImageHero from "../../assets/img_car.png";

const HeroImage = () => {
  return (
    <div class="hero-image">
      <img src={ImageHero} alt="" />
    </div>
  );
};

export default HeroImage;
