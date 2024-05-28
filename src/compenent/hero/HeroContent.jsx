import "../../Root.css";
import "./HeroContent.css";
import Rentbutton from "./RentButton";
import { location } from "../../Utils/dummy";

const HeroContent = (props) => {
  return (
    <div class="hero-content">
      <h1>Sewa & Rental Mobil Terbaik di kawasan ({location})</h1>
      <p>
        Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
        terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk
        sewa mobil selama 24 jam.
      </p>
      {props.ShwButton ? <Rentbutton /> : null}
    </div>
  );
};

export default HeroContent;
