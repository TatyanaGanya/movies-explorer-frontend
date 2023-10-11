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
    <section>
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
        <span
          className={`search-form__error ${isError && "search__error_active"}`}
        >
          {isError ? "Введите ключевое слово" : ""}
        </span>
        <button className="search-form__submit" type="button">
          Найти
        </button>
        <FilterCheckbox changeShot={changeShot} />
      </form>
    </section>
  );
}

export default SearchForm;
