import "../../Root.css";
import "./NavbarList.css";
import { listNavbar } from "../../Utils/dummy";

const NavbarList = (props) => {
  return (
    <div
      class={`navbar-list-container ${
        props.vertical ? "navbar-list-container-vertical" : ""
      }`}
    >
      <ul class={`navbar-list ${props.vertical ? "list-column" : ""}`}>
        {listNavbar.map((item) => (
          <a href="#" title={item}>
            {item}
          </a>
        ))}
      </ul>
    </div>
  );
};

export default NavbarList;
