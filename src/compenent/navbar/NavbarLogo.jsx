import "../../Root.css";
import "./NavbarLogo.css";
import { Link } from "react-router-dom";

const NavbarLogo = () => {
  return (
    <div className="navbar-logo-container">
      <Link to={"/"}>
        <a href="">
          {" "}
          <div className="navbar-logo"></div>
        </a>
      </Link>
    </div>
  );
};

export default NavbarLogo;
