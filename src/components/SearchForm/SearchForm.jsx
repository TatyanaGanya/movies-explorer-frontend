import "./SearchForm.css";
import { useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import useFormValidation from "../../utils/useFormValidation";

function SearchForm({ changeShot }) {
  const [isError, setIsError] = useState(false);
  const { values, isValid, handleChange } = useFormValidation();

  function onSubmit(evt) {
    evt.preventDefault();
    if (!isValid) {
      setIsError(true);
      return;
    } else {
      setIsError(false);
    }
  }
  return (
    <>
      <form
        noValidate
        className="search-form"
        name={"SearchForm"}
        value={values.search}
        onSubmit={onSubmit}
      >
        <input
          type="text"
          placeholder="Фильм"
          className="search-form__input"
          onChange={handleChange}
          required
        />
        <span className={`search__error ${isError && "search__error_active"}`}>
          {isError ? "Введите ключевое слово" : ""}
        </span>
        <button className="search-form__submit">Найти</button>
      </form>
      {/* <span className="search__error">Введите ключевое слово</span> */}
      <FilterCheckbox changeShot={changeShot} />
    </>
  );
}

export default SearchForm;
