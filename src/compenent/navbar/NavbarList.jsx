import "../../Root.css";
import "./NavbarList.css";
import { listNavbar } from "../../Utils/dummy";
import { NavHashLink } from "react-router-hash-link";

const NavbarList = (props) => {
  return (
    <div
      class={`navbar-list-container ${
        props.vertical ? "navbar-list-container-vertical" : ""
      }`}
    >
      <ul class={`navbar-list ${props.vertical ? "list-column" : ""}`}>
        {listNavbar.map((item) => (
          <NavHashLink smooth to={`/${item.link}`}>
            {/* title={item.title} */}
            {item.name}
          </NavHashLink>
        ))}
      </ul>
    </div>
  );
};

export default NavbarList;
