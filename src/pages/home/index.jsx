import "../../Root.css";
import Navbar from "../../compenent/navbar/Navbar";
import HeroOne from "../../compenent/hero/Hero";
import OurService from "../../compenent/ourservice/OurService";

function app() {
  return (
    <div>
      <Navbar />
      <HeroOne />
      <OurService />
    </div>
  );
}

export default app;
