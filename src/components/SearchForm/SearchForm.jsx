import "./SearchForm.css";
import { useEffect, useContext } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import useFormValidation from "../../utils/useFormValidation";

import ErrorContext from "../../contexs/ErrorContext.js";
import { useLocation } from "react-router-dom";

function SearchForm({
  changeShot,
  searchedMovie,
  searchMovies,
  setIsError,
  savedMovie,
}) {
  const { values, handleChange, reset } = useFormValidation();
  const { pathname } = useLocation();
  const isError = useContext(ErrorContext);

  useEffect(() => {
    if (pathname === "/saved-movies" && savedMovie.length === 0) {
      reset({ search: "" });
    } else {
      reset({ search: searchedMovie });
    }
    setIsError(false);
  }, [searchedMovie, reset, setIsError, pathname, savedMovie]);

  function onSubmit(evt) {
    evt.preventDefault();
    if (evt.target.search.value) {
      searchMovies(evt.target.search.value);
      setIsError(false);
    } else {
      setIsError(true);
    }
  }
  return (
    <section>
      <form
        noValidate
        className="search-form"
        name="SearchForm"
        onSubmit={onSubmit}
      >
        <input
          type="text"
          placeholder="Фильм"
          className="search-form__input"
          value={values.search || ""}
          onChange={(evt) => {
            handleChange(evt);
            setIsError(false);
          }}
          disabled={savedMovie ? savedMovie.length === 0 && true : false}
          required
          name="search"
        />
        <span
          className={`search-form__error ${
            isError && "search-form__error_active"
          }`}
        >
          {"Нужно ввести ключевое слово"}
        </span>
        <button
          type="submit"
          className={`search-form__submit ${
            savedMovie
              ? pathname === "/saved-movies" &&
                savedMovie.length === 0 &&
                "search-form__submit_disabled"
              : ""
          }`}
        >
          Найти
        </button>
      </form>

      <FilterCheckbox changeShot={changeShot} />
    </section>
  );
}

export default SearchForm;
