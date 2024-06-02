import "../../Root.css";
import "./NavbarList.css";
import { listNavbar } from "../../Utils/dummy";
import { NavHashLink } from "react-router-hash-link";
import openburger from "../../assets/open-burger.png";
import closeburger from "../../assets/close-burger.png";

const NavbarList = (props) => {
  const { asNavbar, vDirection } = props;
  return (
    <div
      class={`navbar-list-container ${
        vDirection ? "navbar-list-container-vertical" : ""
      }`}
    >
      <ul
        class={`${asNavbar ? "navbar-list" : "nav-list"} ${
          vDirection ? "list-column" : ""
        }`}
      >
        {listNavbar.map((item) => (
          <NavHashLink smooth to={`/${item.link}`}>
            {item.name}
          </NavHashLink>
        ))}
      </ul>
      <button
        className={asNavbar ? "Shwburger" : "Hideburger"}
        href=""
      ></button>
    </div>
  );
};

export default NavbarList;
