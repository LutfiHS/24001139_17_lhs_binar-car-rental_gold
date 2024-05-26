import "../../Root.css";
import Navbar from "../../compenent/navbar/Navbar";
import HeroOne from "../../compenent/hero/Hero";
import OurService from "../../compenent/ourservice/OurService";
import Whyus from "../../compenent/whyus/whyus";

function app() {
  return (
    <div>
      <Navbar />
      <HeroOne />
      <OurService />
      <Whyus />
    </div>
  );
}

export default app;
