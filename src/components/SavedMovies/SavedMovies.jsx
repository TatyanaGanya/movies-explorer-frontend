import SearchForm from "../SearchForm/SearchForm.jsx";
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";
import { useState, useCallback, useEffect } from "react";

function SavedMovies({ savedMovies, onDelete, setIsError }) {
  const [saveMovie, setSaveMovie] = useState(savedMovies);
  const [isCheckMoviesSave, setIsCheckMoviesSave] = useState(false);
  const [searchedMouvie, setSearchedMovie] = useState("");
  const [firstEntrance, setFirstEntrance] = useState(true);

  const moviesList = useCallback((search, isCheckMoviesSave, movies) => {
    setSearchedMovie(search);
    setSaveMovie(
      movies.filter((movie) => {
        const searchName = movie.nameRU
          .toLowerCase()
          .includes(search.toLowerCase());
        return isCheckMoviesSave
          ? searchName && movie.duration <= 40
          : searchName;
      })
    );
  }, []);

  function searchMovies(search) {
    setFirstEntrance(false);
    moviesList(search, isCheckMoviesSave, savedMovies);
  }

  useEffect(() => {
    if (savedMovies.length === 0) {
      setFirstEntrance(true);
    } else {
      setFirstEntrance(false);
    }
    moviesList(searchedMouvie, isCheckMoviesSave, savedMovies);
  }, [moviesList, savedMovies, isCheckMoviesSave, searchedMouvie]);

  function onCheckMoviesSave() {
    if (isCheckMoviesSave) {
      setIsCheckMoviesSave(false);
      moviesList(searchedMouvie, isCheckMoviesSave, savedMovies);
    } else {
      setIsCheckMoviesSave(true);
      moviesList(searchedMouvie, isCheckMoviesSave, savedMovies);
    }
  }

  return (
    <>
      <SearchForm
        isCheck={isCheckMoviesSave}
        searchMovies={searchMovies}
        searchedMovie={searchedMouvie}
        setIsError={setIsError}
        firstEntrance={firstEntrance}
        changeShot={onCheckMoviesSave}
        savedMovie={savedMovies}
      />
      <MoviesCardList
        movies={saveMovie}
        onDelete={onDelete}
        firstEntrance={firstEntrance}
      />
    </>
  );
}
export default SavedMovies;
