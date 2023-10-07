import "./Header-burger.css";
import { useLocation } from "react-router-dom";

function Burger({ activeState, openHeader}) {
  const { pathname } = useLocation();
  return (
    <div
      className={`header__burger ${
        pathname !== "/" ? "header__burger_black" : ""
      } ${activeState ? "active" : ""}`}
      onClick={openHeader}
    >
      <span></span>
    </div>
  );
}
export default Burger;
