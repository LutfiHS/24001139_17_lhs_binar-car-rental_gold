import "../../Root.css";
import "./Hero.css";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const HeroOne = (props) => {
  return (
    <section class="wrapper-light-sky displayAbs">
      <div class="wrapper-light-sky hero-container">
        <HeroContent ShwButton={props.btn} />
        <HeroImage />
      </div>
    </section>
  );
};

export default HeroOne;
