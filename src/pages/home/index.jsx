import "../../Root.css";
import Navbar from "../../compenent/navbar/Navbar";
import Hero from "../../compenent/hero/Hero";
import OurService from "../../compenent/ourservice/OurService";
import Whyus from "../../compenent/whyus/whyus";
import Testimonial from "../../compenent/testimonial/Testimonial";
import Banner from "../../compenent/banner/banner";
import Faq from "../../compenent/faq/Faq";
import Footers from "../../compenent/footer/Footer";

function app() {
  return (
    <div>
      <Navbar />
      <Hero btn={true} />
      <div id="our-service">
        <OurService />
      </div>
      <div id="why-us">
        <Whyus />
      </div>
      <div id="testimonial">
        <Testimonial />
      </div>
      <Banner />
      <div id="faq">
        <Faq />
      </div>
      <Footers />
    </div>
  );
}

export default app;
