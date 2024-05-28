import "../../Root.css";
import Navbar from "../../compenent/navbar/Navbar";
import Hero from "../../compenent/hero/Hero";
import OurService from "../../compenent/ourservice/OurService";
import Whyus from "../../compenent/whyus/whyus";
import Testimonial from "../../compenent/testimonial/Testimonial";
import Banner from "../../compenent/banner/banner";

function app() {
  return (
    <div>
      <Navbar />
      <Hero />
      <OurService />
      <Whyus />
      <Testimonial />
      <Banner />
    </div>
  );
}

export default app;
