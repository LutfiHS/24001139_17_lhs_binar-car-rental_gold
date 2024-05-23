import "../style/Root.css";
import "../style/NavbarList.style.css";
import { listNavbar } from "../Utils/dummy";

const NavbarList = () => {
  return (
    <div class="navbar-list-container">
      <ul class="navbar-list">
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
