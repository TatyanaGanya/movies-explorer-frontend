import "./App.css";
//import CurrentUserContext from "../../contexs/CurrentUserContext";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import Error from "../Error/Error.jsx";
import Register from "../Register/Register.jsx";
import Login from "../Login/Login.jsx";
import Profile from "../Profile/Profile.jsx";
import Movies from "../Movies/Movies.jsx";
import SavedMovies from "../SavedMovies/SavedMovies.jsx";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [activeState, setActiveState] = useState(false);

  function openHeader() {
    if (document.documentElement.clientWidth > "768") {
      setActiveState(false);
    } else {
      setActiveState((prev) => !prev);
    }
  }

  return (
    //  <CurrentUserContext.Provider>
    //анимация кнопок!!!!
    <div className={`app ${activeState ? "lock" : ""}`}>
      <Routes>
        {/* авторизация! */}
        <Route
          path="/signin"
          element={<Login name="signin" setLoggedIn={setLoggedIn} />}
        />
        {/* регистрация! */}
        <Route
          path="/signup"
          element={<Register name="signup" setLoggedIn={setLoggedIn} />}
        />
        {/*  «О проекте» ! */}
        <Route
          path="/"
          element={
            <>
              <Header
                loggedIn={loggedIn}
                activeState={activeState}
                openHeader={openHeader}
              />
              <Main activeState={activeState} />
              <Footer />
            </>
          }
        />
        {/* Фильмы !*/}
        <Route
          path="/movies"
          element={
            <>
              <Header
                loggedIn={loggedIn}
                activeState={activeState}
                openHeader={openHeader}
              />
              <Movies activeState={activeState} />
              <Footer />
            </>
          }
        />
        {/* Сохранённые фильмы !*/}
        <Route
          path="/saved-movies"
          element={
            <>
              <Header
                loggedIn={loggedIn}
                activeState={activeState}
                openHeader={openHeader}
              />
              <SavedMovies activeState={activeState} />
              <Footer />
            </>
          }
        />
        {/* акаунт */}
        <Route
          path="/profile"
          element={
            <>
              <Header
                loggedIn={loggedIn}
                activeState={activeState}
                openHeader={openHeader}
              />
              <Profile name="profile" setLoggedIn={setLoggedIn} />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <Header
                loggedIn={loggedIn}
                activeState={activeState}
                openHeader={openHeader}
              />
            </>
          }
        />
        {/* ошибка ok*/}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
    //  </CurrentUserContext.Provider>
  );
}

export default App;
