import "./Form.css";

function Form({ name, children, isValid, onSubmit }) {
  return (
    <form
      className={`${
        name === "profile" ? "profile__form" : "autorization__form"
      }`}
      noValidate
      name={name}
      onSubmit={onSubmit}
    >
      {children}
      {name === "signup" ? (
        <>
          <span className=" autorization-error request-error">
            {"При входе произошла ошибка."}
          </span>
          <button
            type="submit"
            disabled={!isValid}
            className={`autorization__button ${
              isValid ? "" : "autorization__button_disabled"
            }`}
          >
            Зарегистрироваться
          </button>
        </>
      ) : name === "signin" ? (
        <>
          <span className="autorization-error login-error">
            {"При регистрации произошла ошибка."}
          </span>
          <button
            type="submit"
            disabled={!isValid}
            className={`autorization__button ${
              isValid ? "" : "autorization__button_disabled"
            }`}
          >
            Войти
          </button>
        </>
      ) : (
        <>
          <span className="autorization-error profile__error-profile">
            {"При обновлении профиля произошла ошибка."}
          </span>
          <button type="submit" className="profile__change">
            Редактировать
          </button>
        </>
      )}
    </form>
  );
}

export default Form;
