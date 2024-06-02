import NavbarList from "./NavbarList";
import NavbarLogo from "./NavbarLogo";
import "./Navbar.css";
import "../../Root.css";

const Navbar = () => {
  return (
    <section class="wrapper-light-sky navbar-wrapper">
      <div class="navbar-container">
        <NavbarLogo />
        <NavbarList asNavbar={true} vDirection={false} />
      </div>
    </section>
  );
};

export default Navbar;
