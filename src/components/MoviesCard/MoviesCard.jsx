import "./MoviesCard.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { changeDuration } from "../../utils/utils.js";
import { useEffect, useState } from "react";

function MoviesCard({ onDelete, addMovie, data, savedMovies }) {
  const { pathname } = useLocation();
  const [click, setClick] = useState(false);

  useEffect(() => {
    if (pathname === "/movies")
      setClick(savedMovies.some((element) => data.id === element.movieId));
  }, [savedMovies, data.id, setClick, pathname]);

  function onClick() {
    if (savedMovies.some((element) => data.id === element.movieId)) {
      setClick(true);
      addMovie(data);
    } else {
      setClick(false);
      addMovie(data);
    }
  }

  return (
    <li className="card">
      <article>
        <Link to={data.trailerLink} target="_blank">
          <img
            src={
              pathname === "/movies"
                ? `https://api.nomoreparties.co${data.image.url}`
                : data.image
            }
            alt={data.name}
            className="card__image"
          />
        </Link>
        <div className="card__item">
          <h2 className="card__title">{data.nameRU}</h2>
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
              onClick={() => onDelete(data._id)}
            ></button>
          )}
        </div>
        <span className="card__duration"> {changeDuration(data.duration)}</span>
      </article>
    </li>
  );
}

export default MoviesCard;
