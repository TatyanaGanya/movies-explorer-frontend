import "./FilterCheckbox.css";

function FilterCheckbox({ changeShot, isCheck }) {

  return (
    <div className="filter">
      <label className="filter__switch">
        <input
          type="checkbox"
          checked={isCheck ? true : false}
          onChange={() => changeShot()}
        />
        <span className="filter__silder"></span>
      </label>
      <span className="filter__text">Короткометражки</span>
    </div>
  );
}

export default FilterCheckbox;
