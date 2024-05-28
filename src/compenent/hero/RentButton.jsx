import "../../Root.css";
import "./RentButton.css";
import { Link } from "react-router-dom";

const Rentbutton = () => {
  return (
    <div className="hero-button">
      <Link to={"/searchcar"}>
        <a className="hero-button-link">Mulai Sewa Mobil</a>
      </Link>
    </div>
  );
};

export default Rentbutton;
