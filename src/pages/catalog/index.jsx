import "../../Root.css";
import Navbar from "../../compenent/navbar/Navbar";
import Hero from "../../compenent/hero/Hero";
import Searchbox from "./search_car/SearchCar";
import Footer from "../../compenent/footer/Footer";
// import Searchbox from "../../compenent/search_car/SearchCar";

const Catalog = () => {
  return (
    <div>
      <Navbar />
      <Hero ShwBtn={false} />
      <Searchbox />
      <Footer />
    </div>
  );
};

export default Catalog;
