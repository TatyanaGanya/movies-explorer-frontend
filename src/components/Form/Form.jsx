import "./Form.css";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ErrorContext from "../../contexs/ErrorContext";
import CurrentUserContext from "../../contexs/CurrentUserContext";

function Form({
  name,
  children,
  isValid,
  onSubmit,
  setSuccess,
  isSuccess,
  setIsError,
  values,
  setIsBlock,
  isBlock,
}) {
  const isError = useContext(ErrorContext);
  const { pathname } = useLocation();
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setIsError(false);
  }, [setIsError, values]);

  useEffect(() => {
    if (pathname === "/profile") {
      setSuccess(false);
      setIsBlock(false);
    }
  }, [pathname, setSuccess, setIsBlock]);

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
          <span
            className={`autorization-error request-error ${
              isError && "autorization-error_active"
            }`}
          >
            {"При регистрации пользователя произошла ошибка."}
          </span>

          <button
            type="submit"
            disabled={!isValid || isError}
            className={`autorization__button ${
              isValid ? "" : "autorization__button_disabled"
            } ${!isError ? "" : "autorization__button_disabled"}`}
          >
            Зарегистрироваться
          </button>
        </>
      ) : name === "signin" ? (
        <>
          <span
            className={`autorization-error login-error ${
              isError && "autorization-error_active"
            }`}
          >
            {"При входе произошла ошибка."}
          </span>

          <button
            type="submit"
            disabled={!isValid || isError}
            className={`autorization__button ${
              isValid ? "" : "autorization__button_disabled"
            } ${!isError ? "" : "autorization__button_disabled"}`}
          >
            Войти
          </button>
        </>
      ) : (
        <>
          <span
            className={`autorization-error profile__error-profile ${
              isError
                ? "autorization-error_active"
                : isSuccess && "autorization-error_success"
            }`}
          >
            {isError
              ? "При обновлении профиля произошла ошибка."
              : "Данные успешно изменены"}
          </span>
          {isBlock ? (
            <button
              type="button"
              onClick={() => {
                setSuccess(true);
                setIsBlock(false);
              }}
              className={`autorization__button profile__save  ${
                (values.username === currentUser.name &&
                  values.email === currentUser.email) ||
                !isValid ||
                isError
                  ? "profile__save_disabled"
                  : ""
              }`}
              disabled={!isValid || isError}
            >
              Сохранить
            </button>
          ) : (
            <button
              type="submit"
              onClick={() => {
                setSuccess(true);
                setIsBlock(true);
              }}
              className="profile__change"
            >
              Редактировать
            </button>
          )}
        </>
      )}
    </form>
  );
}

export default Form;
