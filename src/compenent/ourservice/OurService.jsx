import "../../Root.css";
import "./OurSerivce.css";
import OurServiceContent from "./OurServiceContent";
import OurServiceImage from "./OurServiceImage";

const OurService = () => {
  return (
    <section class="wrapper-white OurService-wrapper">
      <div class="OurService-container">
        <OurServiceImage />
        <OurServiceContent />
      </div>
    </section>
  );
};

export default OurService;
