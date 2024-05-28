import "../../Root.css";
import "./banner.css";
import Rentbutton from "../hero/RentButton";
import { location } from "../../Utils/dummy";

const banner = () => {
  return (
    <div className="wrapper-white">
      <div className="banner-container">
        <h1>Sewa Mobil di ({location}) Sekarang</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nihil
          in amet aut qui quasi mollitia ipsa, pariatur velit ducimus dolores ut
          voluptatibus ratione assumenda! Rerum eum quae nihil quisquam.
        </p>
        <Rentbutton />
      </div>
    </div>
  );
};

export default banner;
