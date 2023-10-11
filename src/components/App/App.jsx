import "./App.css";
//import CurrentUserContext from "../../contexs/CurrentUserContext";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";

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
    <div className={`app ${activeState ? "lock" : ""}`}>
      <Routes>
        {/* авторизация! перенести в майн / секцион name: signin*/}
        <Route
          path="/signin"
          element={<Main name="signin" setLoggedIn={setLoggedIn} />}
        />
        {/* регистрация! */}
        <Route
          path="/signup"
          element={<Main name="signup" setLoggedIn={setLoggedIn} />}
        />
        {/*  «О проекте» name: home */}
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
              <Main name="movies" activeState={activeState} />
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
              <Main name="savedMovies" activeState={activeState} />
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
              <Main name="profile" setLoggedIn={setLoggedIn} />
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
        <Route path="*" element={<Main name="error" />} />
      </Routes>
    </div>
    //  </CurrentUserContext.Provider>
  );
}

export default App;
