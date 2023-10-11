import "./AboutMe.css";
import foto from "../../../images/portfolio_foto.jpeg";
import { Link } from "react-router-dom";
import Cover from "../Cover/Cover.jsx";

function AboutMe() {
  return (
    <Cover title="Студент">
      <div className="aboutme">
        <div>
          <h3 className="aboutme__title">Татьяна</h3>
          <p className="aboutme__subtitle">Фронтенд-разработчик, 36 лет</p>
          <p className="aboutme__description">
            Я родилась и живу в Санкт-Петербрге, закончила факультет культуры
            СПГУПС. Я люблю слушать музыку, а ещё увлекаюсь сноубордом. Недавно
            начал кодить. После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушла с постоянной работы.
          </p>
          <Link
            to={"https://github.com/TatyanaGanya?tab=repositories"}
            className="aboutme__button"
            target="_blank"
          >
            Github
          </Link>
        </div>

        <img
          src={foto}
          alt="фотография фронтенд-разработчика"
          className="aboutme__foto"
        />
      </div>
    </Cover>
  );
}

export default AboutMe;
