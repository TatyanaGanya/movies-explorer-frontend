import "./Promo.css";
import globus from "../../../images/globus.svg";
import { HashLink } from "react-router-hash-link";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <img src={globus} alt="Фильмы" className="promo__img" />
        <h1 className="promo__title">
          Учебный проект студента факультета Веб&#8209;разработки.
        </h1>
        <p className="promo__suptitle">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <HashLink smooth to="#Project" className="promo__button">
          Узнать больше
        </HashLink>
      </div>
    </section>
  );
}

export default Promo;
