import "../style/Root.css";
import "../style/HeroOneContent.style.css";
import { location } from "../Utils/dummy";

const HeroContent = (props) => {
  return (
    <div class="hero-content">
      <h1>Sewa & Rental Mobil Terbaik di kawasan ({location})</h1>
      <p>
        Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
        terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk
        sewa mobil selama 24 jam.
      </p>
      {props.ShwButton ? <a class="hero-button">Mulai Sewa Mobil</a> : null}
    </div>
  );
};

export default HeroContent;
