import "./Portfolio.css";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__lists">
        <li className="portfolio__list">
          <Link
            to={"https://tatyanaganya.github.io/russian-travel/"}
            className="portfolio__link"
            target="_blank"
          >
            Статичный сайт
            <button className="portfolio__button" type="button">
              ↗
            </button>
          </Link>
        </li>
        <li className="portfolio__list">
          <Link
            to={"https://tatyanaganya.github.io/mesto-react/"}
            className="portfolio__link"
            target="_blank"
          >
            Адаптивный сайт
            <button className="portfolio__button" type="button">
              ↗
            </button>
          </Link>
        </li>

        <li className="portfolio__list">
          <Link
            to={"https://mestofrontent.nomoredomainsicu.ru"}
            className="portfolio__link"
            target="_blank"
          >
            Одностраничное приложение
            <button className="portfolio__button" type="button">
              ↗
            </button>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
