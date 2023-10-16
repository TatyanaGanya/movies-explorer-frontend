///пихнуть плеадер везде где можно и добавить успех
//проверить перезагрузку и ошибки вездеищезают?
//успешное выполнение!
//код ошибки ( заные прописать span если ошибка 409 / ошибка 400 )
///setIsResultPopupOpen(true);    ok  no

import "./App.css";
import CurrentUserContext from "../../contexs/CurrentUserContext";
import ProtectedRoute from "../../contexs/ProtectedRoute";
import ProtectedPage from "../../contexs/ProtectedPage";
import mainApi from "../../utils/MainApi.js";
import ErrorContext from "../../contexs/ErrorContext.js";
import { useState, useCallback, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";

// START
function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({}); //обьект юзера
  const [loggedIn, setLoggedIn] = useState(false); //логин пользователя
  const [activeState, setActiveState] = useState(false); // бургер-меню
  const [isError, setIsError] = useState(false); // ошибка ввода данных
  const [isSuccess, setIsSuccess] = useState(false); //редактирование профиля (успех)
  const [isBlock, setIsBlock] = useState(true); //отрисовка кнопки "сохранить"
  const [savedMovies, setSavedMovies] = useState([]);

  //бургер меню открытие
  function openHeader() {
    if (document.documentElement.clientWidth > "768") {
      setActiveState(false);
    } else {
      setActiveState((prev) => !prev);
    }
  }

  ///отрисовка данных при регистрации
  useEffect(() => {
    if (localStorage.jwt) {
      Promise.all([
        mainApi.getUserData(localStorage.jwt),
        mainApi.getMovies(localStorage.jwt),
      ])
        .then(([dataUser, dataMovies]) => {
          setSavedMovies(dataMovies.reverse());
          setCurrentUser(dataUser);
          setLoggedIn(true);
        })
        .catch((err) => {
          console.error(`Ошибка получения масива и данных: ${err}`);
          localStorage.clear();
        });
    } else {
      setLoggedIn(false);
      localStorage.clear();
    }
  }, [loggedIn]);

  const setSuccess = useCallback(() => {
    setIsSuccess(false);
  }, []);

  //удаление фильма
  function handleDeleteMovie(deleteMovieId) {
    mainApi
      .deleteMovie(deleteMovieId, localStorage.jwt)
      .then(() => {
        setSavedMovies(
          savedMovies.filter((movie) => {
            return movie._id !== deleteMovieId;
          })
        );
      })
      .catch((err) => console.error(`Ошибка удаления фильма ${err}`));
  }

  //лайк на карточке
  function handleMovieLike(data) {
    const isLiked = savedMovies.some((i) => i.movieId === data.id);
    const filterMovie = savedMovies.filter((i) => {
      return i.movieId === data.id;
    });

    if (isLiked) {
      handleDeleteMovie(filterMovie[0]._id);
    } else {
      mainApi
        .addMovie(data, localStorage.jwt)
        .then((res) => {
          setSavedMovies([res, ...savedMovies]);
        })
        .catch((err) => console.error(`Ошибка добавления лайка ${err}`));
    }
  }

  // выход из аккаунта
  function outLogin() {
    setCurrentUser({});
    setLoggedIn(false);
    localStorage.clear();
    navigate("/");
  }

  //авторизация
  function handleLogin(values) {
    const { email, password } = values;
    mainApi
      .authorization(email, password)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setLoggedIn(true);
        navigate("/movies");
      })
      .catch((err) => {
        setIsError(true);
        console.error(`Ошибка авторизации ${err}`);
      });
  }

  //регистрация
  function handleRegister(value) {
    const { name, email, password } = value;

    mainApi
      .registration(name, email, password)
      .then((res) => {
        setLoggedIn(false);
        mainApi.authorization(email, password).then((res) => {
          localStorage.setItem("jwt", res.token);
          setLoggedIn(true);
          navigate("/movies");
        });
      })
      .catch((err) => {
        setIsError(true);
        console.error(`Ошибка регистрации ${err}`);
      })
      .finally();
  }

  // profile username и name проверить
  function handleProfile(name, email) {
    mainApi
      .setUserInfo(name, email, localStorage.jwt)
      .then((newUserData) => {
        setCurrentUser(newUserData);
        setIsSuccess(true);
        setIsBlock(false);
      })
      .catch((err) => {
        setIsError(true);
        console.error(`При обновлении профиля произошла ошибка ${err}`);
      })
      .finally();
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <ErrorContext.Provider value={isError}>
        <div className={`app ${activeState ? "lock" : ""}`}>
          <Routes>
            {/* авторизация!*/}
            <Route
              path="/signin"
              element={
                <Main
                  name="signin"
                  handleLogin={handleLogin}
                  setIsError={setIsError}
                />
              }
            />
            {/* регистрация! */}
            <Route
              path="/signup"
              element={
                <Main
                  name="signup"
                  handleRegister={handleRegister}
                  setIsError={setIsError}
                />
              }
            />
            {/*  «О проекте» name: home  ок*/}
            <Route
              path="/"
              element={
                <>
                  <Header
                    loggedIn={loggedIn}
                    activeState={activeState}
                    openHeader={openHeader}
                  />
                  <Main name="home" activeState={activeState} />
                  <Footer />
                </>
              }
            />
            {/* Фильмы защищен !*/}
            <Route
              path="/movies"
              element={
                <ProtectedRoute
                  element={ProtectedPage}
                  name="movies"
                  savedMovies={savedMovies}
                  addMovie={handleMovieLike}
                  loggedIn={loggedIn}
                  setIsError={setIsError}
                  activeState={activeState}
                  openHeader={openHeader}
                />
              }
            />
            {/* Сохранённые фильмы  protected!*/}
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute
                  element={ProtectedPage}
                  name="savedMovies"
                  savedMovies={savedMovies}
                  addMovie={handleMovieLike}
                  loggedIn={loggedIn}
                  setIsError={setIsError}
                  activeState={activeState}
                  openHeader={openHeader}
                  onDelete={handleDeleteMovie}
                />
              }
            />
            {/* акаунт protected*/}
            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  element={ProtectedPage}
                  loggedIn={loggedIn}
                  setIsError={setIsError}
                  openHeader={openHeader}
                  name="profile"
                  setLoggedIn={setLoggedIn}
                  handleProfile={handleProfile}
                  outLogin={outLogin}
                  isSuccess={isSuccess}
                  setSuccess={setSuccess}
                  setIsBlock={setIsBlock}
                  isBlock={isBlock}
                />
              }
            />
            {/* ошибка ok*/}
            <Route path="*" element={<Main name="error" />} />
          </Routes>
        </div>
      </ErrorContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
