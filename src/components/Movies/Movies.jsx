import SearchForm from "../SearchForm/SearchForm.jsx";
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";
import { useCallback, useEffect, useState } from "react";
import getCards from "../../utils/MoviesApi";

function Movies({ setIsError, addMovie, savedMovies }) {
  const [moviesAll, setMoviesAll] = useState([]);
  const [isCheckMoviesAll, setIsCheckMoviesAll] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchedMouvie, setSearchedMovie] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [firstEntrance, setFirstEntrance] = useState(true);

  const filter = useCallback((search, isCheckMoviesAll, movies) => {
    setSearchedMovie(search);

    localStorage.setItem("movie", JSON.stringify(search));
    localStorage.setItem("shorts", JSON.stringify(isCheckMoviesAll));
    localStorage.setItem("allmovies", JSON.stringify(movies));

    setFilteredMovies(
      movies.filter((movie) => {
        const searchName = movie.nameRU
          .toLowerCase()
          .includes(search.toLowerCase());
        return isCheckMoviesAll
          ? searchName && movie.duration <= 40
          : searchName;
      })
    );
  }, []);

  function searchMovies(search) {
    if (moviesAll.length === 0) {
      setIsLoading(true);
      getCards()
        .then((res) => {
          setMoviesAll(res);
          setIsCheckMoviesAll(false);
          setServerError(false);
          setFirstEntrance(false);
          filter(search, isCheckMoviesAll, res);
        })
        .catch((err) => {
          setServerError(true);
          console.error(`Ошибка при поиске фильмов ${err}`);
        })
        .finally(() => setIsLoading(false));
    } else {
      filter(search, isCheckMoviesAll, moviesAll);
    }
  }

  useEffect(() => {
    if (localStorage.allmovies && localStorage.shorts && localStorage.movie) {
      const movies = JSON.parse(localStorage.allmovies);
      const search = JSON.parse(localStorage.movie);
      const isCheck = JSON.parse(localStorage.shorts);
      setServerError(false);
      setFirstEntrance(false);
      setSearchedMovie(search);
      setIsCheckMoviesAll(isCheckMoviesAll);
      setMoviesAll(movies);
      filter(search, isCheck, movies);
    }
  }, [filter, isCheckMoviesAll]);

  function changeShot() {
    if (isCheckMoviesAll) {
      setIsCheckMoviesAll(false);
      filter(searchedMouvie, false, moviesAll);
      localStorage.setItem("shorts", JSON.stringify(false));
    } else {
      setIsCheckMoviesAll(true);
      filter(searchedMouvie, true, moviesAll);
      localStorage.setItem("shorts", JSON.stringify(true));
    }
  }

  return (
    <>
      <SearchForm
        isCheck={isCheckMoviesAll}
        searchMovies={searchMovies}
        searchedMovie={searchedMouvie}
        changeShot={changeShot}
        setIsError={setIsError}
        firstEntrance={firstEntrance}
      />
      <MoviesCardList
        movies={filteredMovies}
        addMovie={addMovie}
        savedMovies={savedMovies}
        isLoading={isLoading}
        serverError={serverError}
        firstEntrance={firstEntrance}
      />
    </>
  );
}

export default Movies;
