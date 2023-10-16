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
  maxLength,
  selectname,
  isBlock,
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
              maxLength={maxLength || ""}
              className={`profile__input ${
                isInputValid === undefined || isInputValid
                  ? ""
                  : "profile__input_invaid"
              }`}
              value={value || ""}
              onChange={onChange}
              placeholder={title}
              required
              disabled={ !isBlock }
            />
            <span className="profile-error">{error}</span>
          </label>
        </>
      ) : (
        <label className="login">
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
            maxLength={maxLength || ""}
            placeholder={title}
            autoComplete="on"
            onChange={onChange}
            required

          />
          <span className="profile-error">{error}</span>
        </label>
      )}
    </>
  );
}
export default Input;
