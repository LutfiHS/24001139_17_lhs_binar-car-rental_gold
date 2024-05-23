import "../style/Root.css";
import "../style/HeroOne.style.css";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const HeroOne = () => {
  return (
    <section class=" wrapper-light-sky">
      <div class="wrapper-light-sky hero-container">
        <HeroContent ShwButton={true} />
        <HeroImage />
      </div>
    </section>
  );
};

export default HeroOne;
