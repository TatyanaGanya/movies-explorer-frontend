import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h3>
      <div className="footer__container">
        <p className="footer__subtitle">&copy;&nbsp;2023</p>
        <ul className="footer__nav">
          <li className="footer__list">
            <Link
              to={"https://practicum.yandex.ru/"}
              target="_blank"
              className="footer__link"
            >
              Яндекс.Практикум
            </Link>
          </li>
          <li className="footer__list">
            <Link
              to={"https://github.com/"}
              target="_blank"
              className="footer__link"
            >
              Github
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
