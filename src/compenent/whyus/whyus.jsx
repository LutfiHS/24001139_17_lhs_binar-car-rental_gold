import "../../Root.css";
import "./whyus.css";
import CardWhyUs from "./whyus-card";

const Whyus = () => {
  return (
    <div className=".wrapper-white whyus-wrapper">
      <div className="whyus-container">
        <div>
          <h2>Why Us?</h2>
          <p>Mengapa harus pilih Binar Car Rental?</p>
        </div>
        <CardWhyUs />
      </div>
    </div>
  );
};

export default Whyus;
