import "./Navigation.css";
import { NavLink, useLocation } from "react-router-dom";
import acount from "../../../images/acount.svg";
import Burger from "../Header-burger/Header-burger.jsx";
import { Link } from "react-router-dom";

function Navigation({ activeState, loggedIn, openHeader }) {
  const { pathname } = useLocation();

  return (
    <>
      {/* не забыть поментять на  ! */}
      {pathname === "/" && !loggedIn ? (
        <nav className="header__list">
          <NavLink to={"/signup"} className="header__singup">
            Регистрация
          </NavLink>
          <NavLink to={"/signin"} className="header__singin">
            Войти
          </NavLink>
        </nav>
      ) : (
        <>
          <nav className={`navigation ${activeState ? "active" : ""}`}>
            <NavLink
              to={"/"}
              onClick={openHeader}
              className={`navigation__link header__link_main ${
                pathname === "/" ? "navigation_link_page " : ""
              }${activeState ? "active" : ""}`}
            >
              Главная
            </NavLink>
            <NavLink
              to={"/movies"}
              onClick={openHeader}
              className={`navigation__link ${
                pathname === "/movies" ? "navigation_link_page" : ""
              } ${pathname === "/" ? "navigation__color" : ""}
              ${activeState ? "active" : ""}`}
            >
              Фильмы
            </NavLink>
            <NavLink
              to={"/saved-movies"}
              onClick={openHeader}
              className={`navigation__link ${
                pathname === "/" ? "navigation__color" : ""
              } ${pathname === "/saved-movies" ? "navigation_link_page" : ""} ${
                activeState ? "active" : ""
              }`}
            >
              Сохранённые фильмы
            </NavLink>
          </nav>
          <Burger activeState={activeState} openHeader={openHeader} />
          <Link
            to={"/profile"}
            onClick={openHeader}
            className={`navigation__button ${
              pathname === "/" ? "navigation__button_background" : ""
            } ${activeState ? "active" : ""}`}
          >
            <p>Аккаунт</p>
            <img src={acount} alt="Фильмы" className="header__acount" />
          </Link>
        </>
      )}
    </>
  );
}
export default Navigation;
