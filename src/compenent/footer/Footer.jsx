import "../../Root.css";
import "./Footer.css";
import ListMenu from "../navbar/NavbarList";
import Logo from "../navbar/NavbarLogo";
import { icon_media } from "../../Utils/dummy";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <div className="profile-company">
          <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
          <p>binarcarrental@gmail.com</p>
          <p>081-233-334-808</p>
        </div>

        <ListMenu vertical={true} />
        <div className="list-media">
          <p>Connect with us</p>
          <div className="icon-media">
            {icon_media.map((item) => (
              <a href="">
                <img src={item.image} alt="" />
              </a>
            ))}
          </div>
        </div>
        <div className="copyright">
          <p>Copyright Binar 2022</p>
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default Footer;
