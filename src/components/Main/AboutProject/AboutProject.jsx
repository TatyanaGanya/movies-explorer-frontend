import Cover from "../Cover/Cover.jsx";
import "./AboutProject.css";

function AboutProject() {
  return (
    <Cover title="О проекте">
      <div className="project__container">
        <h3 className="project__title">Дипломный проект включал 5 этапов</h3>
        <p className="project__description">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>

        <h3 className="project__title">На выполнение диплома ушло 5 недель</h3>
        <p className="project__description">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
      </div>

      <div className="project__time">
        <div className="project__time_first">1 неделя</div>
        <div className="project__time_next">4 неделя</div>

        <p className="project__text">Back-end</p>
        <p className="project__text">Front-end</p>
      </div>
    </Cover>
  );
}

export default AboutProject;
