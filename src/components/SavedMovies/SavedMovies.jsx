import SearchForm from "../SearchForm/SearchForm.jsx";
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";
import { useEffect, useState } from "react";
import { saveMovies } from "../../utils/constants.jsx";

function SavedMovies() {
  const [saveMovie, setSaveMovie] = useState([]);

  const [isCheckMoviesSave, setIsCheckMoviesSave] = useState(true);

  useEffect(() => {
    setSaveMovie(saveMovies);
  }, []);

  function onCheckMoviesSave() {
    if (isCheckMoviesSave) {
      setIsCheckMoviesSave(false);
      setSaveMovie(saveMovie.filter((element) => element.duration > 40));
    } else {
      setIsCheckMoviesSave(true);
      setSaveMovie(saveMovies);
    }
  }

  return (
    <main>
      <SearchForm changeShot={onCheckMoviesSave} />
      <MoviesCardList movies={saveMovie} />
    </main>
  );
}
export default SavedMovies;
