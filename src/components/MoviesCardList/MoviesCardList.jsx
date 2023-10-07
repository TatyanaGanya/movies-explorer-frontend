import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import { useState } from "react";

function MoviesCardList({ movies }) {
  const [count, setCount] = useState(printCards().init);
  const fact = movies.slice(0, count);

  function printCards() {
    const counter = { init: 16, step: 8 };
    if (window.innerWidth < 1023) {
      counter.init = 8;
      counter.step = 4;
    }
    if (window.innerWidth < 650) {
      counter.init = 5;
      counter.step = 2;
    }
    return counter;
  }
  function clickMore() {
    setCount(count + printCards().step);
  }
  return (
    <main className="cards">
      <ul className="cards__list">
        {fact.map((card) => {
          return (
            <MoviesCard
              key={card.id}
              name={card.name}
              src={card.image}
              movieLink={card.movieLink}
              duration={card.duration}
            />
          );
        })}
      </ul>
      <button
        type="button"
        className={`cards__button  ${
          count >= movies.length && "cards__button_hidden"
        }`}
        onClick={clickMore}
      >
        Ёще
      </button>
    </main>
  );
}
export default MoviesCardList;
