import "../../Root.css";
import "./whyus.css";
import CardWhyUs from "./whyus-card";

const Whyus = () => {
  return (
    <div className=".wrapper-white ">
      <div className="whyus-container">
        <h2>Why Us?</h2>
        <p>Mengapa harus pilih Binar Car Rental?</p>
        <CardWhyUs />
      </div>
    </div>
  );
};

export default Whyus;
