import SearchForm from "../SearchForm/SearchForm.jsx";
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";
import { useEffect, useState } from "react";
import { movies } from "../../utils/constants.jsx";

function Movies() {
  const [moviesAll, setMoviesAll] = useState([]);
  const [isCheckMoviesAll, setIsCheckMoviesAll] = useState(true);

  useEffect(() => {
    setMoviesAll(movies);
  }, []);

  function onCheckMoviesAll() {
    if (isCheckMoviesAll) {
      setIsCheckMoviesAll(false);
      setMoviesAll(movies.filter((element) => element.duration >= 40));
    } else {
      setIsCheckMoviesAll(true);
      setMoviesAll(movies);
    }
  }
  return (
    <>
      <SearchForm changeShot={onCheckMoviesAll} />
      <MoviesCardList movies={moviesAll} />
    </>
  );
}

export default Movies;
