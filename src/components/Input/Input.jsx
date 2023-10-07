import "./Input.css";

function Input({
  name,
  title,
  onChange,
  isInputValid,
  type,
  error,
  value,
  minLength,
  selectname,
}) {
  return (
    <>
      {selectname === "profile" ? (
        <>
          <label className="profile__label">
            <span className="profile__subtitle">{title}</span>
            <input
              type={type}
              name={name}
              minLength={minLength || ""}
              className={`profile__input ${
                isInputValid === undefined || isInputValid
                  ? ""
                  : "profile__input_invaid"
              }`}
              value={value || ""}
              onChange={onChange}
              required
            />
          </label>
          <span className="profile__error">{error}</span>
        </>
      ) : (
        <label className="login__laber">
          <span className="login__title">{title}</span>
          <input
            className={`login__input ${
              isInputValid === undefined || isInputValid
                ? ""
                : "profile__input_invaid"
            }`}
            name={name}
            type={type}
            value={value || ""}
            minLength={minLength || ""}
            autoComplete="on"
            onChange={onChange}
            required
          />

          <span className="profile__error">{error}</span>
        </label>
      )}
    </>
  );
}
export default Input;
