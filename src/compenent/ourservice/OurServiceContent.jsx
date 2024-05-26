import "../../Root.css";
import "./OurServiceContent.css";
import OurServiceList from "./OurServiceContentList";
import { location } from "../../Utils/dummy";

const OurServiceContent = () => {
  return (
    <div className="OurService-content">
      <h2>Best Car Rental for any kind of trip in ({location})!</h2>
      <p className="OurService-content-p">
        Sewa mobil di ({location}) bersama Binar Car Rental jaminan harga lebih
        murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
        pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting,
        dll.
      </p>
      <OurServiceList />
    </div>
  );
};

export default OurServiceContent;
