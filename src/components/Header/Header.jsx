import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import Navigation from "./Navigation/Navigation";

function Header({ loggedIn, openHeader, activeState }) {
  const { pathname } = useLocation();

  return (
    <header
      className={`header ${pathname === "/" ? "header_background" : ""} ${
        activeState ? "active" : ""
      }`}
    >
      <div className={`header__content ${activeState ? "active" : ""}`}>
        <Link
          className={`header__logo ${activeState ? "active" : ""}`}
          to={"/"}
        ></Link>
        <Navigation
          loggedIn={loggedIn}
          openHeader={openHeader}
          activeState={activeState}
        />
      </div>
    </header>
  );
}

export default Header;
