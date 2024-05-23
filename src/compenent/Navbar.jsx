import NavbarList from "./NavbarList";
import NavbarLogo from "./NavbarLogo";
import "../style/Root.css";
import "../style/Navbar.style.css";

const Navbar = () => {
  return (
    <section class="wrapper-light-sky">
      <div class="navbar-container">
        <NavbarLogo />
        <NavbarList />
      </div>
    </section>
  );
};

export default Navbar;
