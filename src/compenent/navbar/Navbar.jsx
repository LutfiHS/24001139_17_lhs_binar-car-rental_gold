import NavbarList from "./NavbarList";
import NavbarLogo from "./NavbarLogo";
import "../../Root.css";
import "./Navbar.css";

const Navbar = () => {
  return (
    <section class="wrapper-light-sky displayRelative">
      <div class="navbar-container">
        <NavbarLogo />
        <NavbarList />
      </div>
    </section>
  );
};

export default Navbar;
