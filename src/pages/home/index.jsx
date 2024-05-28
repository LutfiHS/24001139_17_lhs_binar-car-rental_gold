import "../../Root.css";
import Navbar from "../../compenent/navbar/Navbar";
import HeroOne from "../../compenent/hero/Hero";
import OurService from "../../compenent/ourservice/OurService";
import Whyus from "../../compenent/whyus/whyus";
import Testimonial from "../../compenent/testimonial/Testimonial";

function app() {
  return (
    <div>
      <Navbar />
      <HeroOne />
      <OurService />
      <Whyus />
      <Testimonial />
    </div>
  );
}

export default app;
