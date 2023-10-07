import "./MoviesCard.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { changeDuration } from "../../utils/utils.js";

function MoviesCard({ name, src, duration, movieLink }) {
  const { pathname } = useLocation();
  const [click, setClick] = useState(false);

  function onClick() {
    if (click) {
      setClick(false);
    } else {
      setClick(true);
    }
  }

  return (
    <li className="card">
      <article>
        <Link to={movieLink} target="_blank">
          <img src={src} alt={name} className="card__image" />
        </Link>
        <div className="card__item">
          <h2 className="card__title">{name}</h2>
          {pathname === "/movies" ? (
            <button
              type="button"
              className={`card__save ${click ? "card__save_active" : ""}`}
              onClick={onClick}
            ></button>
          ) : (
            <button
              type="button"
              className={`card__save card__save_delete`}
              onClick={onClick}
            ></button>
          )}
        </div>
        <span className="card__duration"> {changeDuration(duration)}</span>
      </article>
    </li>
  );
}

export default MoviesCard;
