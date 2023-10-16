import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Preloader from "../Preloader/Preloader";

function MoviesCardList({
  movies,
  onDelete,
  addMovie,
  savedMovies,
  isLoading,
  serverError,
  firstEntrance,
}) {
  const { pathname } = useLocation();
  const [count, setCount] = useState("");
  const fact = movies.slice(0, count);

  function printCards() {
    const counter = { init: 16, step: 4 };
    if (window.innerWidth < 1280) {
      counter.init = 12;
      counter.step = 3;
    }
    if (window.innerWidth < 1024) {
      counter.init = 8;
      counter.step = 2;
    }
    if (window.innerWidth < 650) {
      counter.init = 5;
      counter.step = 2;
    }
    return counter;
  }
  // Ширина 1280px — 4 ряда карточек. Кнопка «Ещё» загружает дополнительный ряд карточек.
  // Ширина 768px — 4 ряда карточек. Кнопка «Ещё» загружает дополнительный ряд карточек.
  // Ширина от 320px до 480px — 5 карточек по 1 в ряд. Кнопка «Ещё» загружает по 2 карточки.

  useEffect(() => {
    if (pathname === "/movies") {
      setCount(printCards().init);
      function printCardsForResize() {
        if (window.innerWidth >= 4) {
          setCount(printCards().init);
        }
        if (window.innerWidth < 4) {
          setCount(printCards().init);
        }
        if (window.innerWidth < 1024) {
          setCount(printCards().init);
        }
        if (window.innerWidth < 650) {
          setCount(printCards().init);
        }
      }
      window.addEventListener("resize", printCardsForResize);
      return () => window.removeEventListener("resize", printCardsForResize);
    }
  }, [pathname, movies]);

  function clickMore() {
    setCount(count + printCards().step);
  }

  return (
    <section className="cards">
      <ul className="cards__list">
        {isLoading ? (
          <Preloader />
        ) : pathname === "/movies" && fact.length !== 0 ? (
          fact.map((data) => {
            return (
              <MoviesCard
                key={data.id}
                savedMovies={savedMovies}
                addMovie={addMovie}
                data={data}
              />
            );
          })
        ) : movies.length !== 0 ? (
          movies.map((data) => {
            return (
              <MoviesCard key={data._id} onDelete={onDelete} data={data} />
            );
          })
        ) : serverError ? (
          <span className="cards__serch-error">
            Во время запроса произошла ошибка. Возможно, проблема с соединением
            или сервер недоступен. Подождите немного и попробуйте ещё раз
          </span>
        ) : !firstEntrance ? (
          <span className="cards__serch-error">Ничего не найдено</span>
        ) : pathname === "/movies" ? (
          <span className="cards__serch-error">Выполните поиск фильма</span>
        ) : (
          <span className="cards__serch-error">Нет сохранённых фильмов</span>
        )}
      </ul>
      {pathname === "/movies" && (
        <button
          type="button"
          className={`cards__button ${
            count >= movies.length && "cards__button_hidden"
          }`}
          onClick={clickMore}
        >
          Ещё
        </button>
      )}
    </section>
  );
}
export default MoviesCardList;
