import Cover from "../Cover/Cover.jsx";
import "./AboutProject.css";

function AboutProject() {
  return (
    <Cover id={"Project"} title="О проекте">
      <div className="project">
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

      <div className="project-time">
        <p className="project-time__first">1 неделя</p>
        <p className="project-time__next">4 неделя</p>

        <p className="project-time__text">Back-end</p>
        <p className="project-time__text">Front-end</p>
      </div>
    </Cover>
  );
}

export default AboutProject;
