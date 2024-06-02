import "../../Root.css";
import "./NavbarList.css";
import { listNavbar } from "../../Utils/dummy";
import { NavHashLink } from "react-router-hash-link";
import { useState, useEffect } from "react";

const NavbarList = (props) => {
  const { asNavbar, vDirection } = props;
  const [showSideBar, setShowSideBar] = useState(false);
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);

  const handleResize = () => {
    setWidthScreen(window.innerWidth);
  };

  const toggleSidebar = () => {
    setShowSideBar((prev) => !prev);
  };

  const sidebarStyle = {
    transform: showSideBar ? "translateX(0)" : "translateX(120%)",
    transition: "transform 0.3s ease",
  };

  const shwOverlay = {
    display: showSideBar ? "block" : "none",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust opacity here (0.5 for 50%)
    zIndex: 999,
    transition: "opacity 5s ease",
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`navbar-list-container ${
        vDirection ? "navbar-list-container-vertical" : ""
      }`}
    >
      <div
        className={asNavbar ? "navbar-list-menu" : ""}
        style={widthScreen <= 480 && asNavbar ? sidebarStyle : {}}
      >
        <div
          onClick={toggleSidebar}
          className={asNavbar ? "ShwTitle" : "Hideburger"}
        >
          <h4>BCR</h4>
          <button className="Shwburger2"></button>
        </div>
        <div>
          <ul
            className={`${asNavbar ? "navbar-list" : "nav-list"} ${
              vDirection ? "list-column" : ""
            }`}
          >
            {listNavbar.map((item, index) => (
              <NavHashLink key={index} smooth to={`/${item.link}`}>
                {item.name}
              </NavHashLink>
            ))}
          </ul>
        </div>
      </div>
      <button
        className={asNavbar ? "Shwburger" : "Hideburger"}
        onClick={toggleSidebar}
      ></button>

      <div style={shwOverlay}></div>
    </div>
  );
};

export default NavbarList;
