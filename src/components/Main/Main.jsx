import Promo from "./Promo/Promo.jsx";
import AboutProject from "./AboutProject/AboutProject.jsx";
import Portfolio from "./Portfolio/Portfolio.jsx";
import AboutMe from "./AboutMe/AboutMe";
import Techs from "./Techs/Techs.jsx";
import Error from "../Error/Error.jsx";
import Register from "../Register/Register.jsx";
import Login from "../Login/Login.jsx";
import Profile from "../Profile/Profile.jsx";
import Movies from "../Movies/Movies.jsx";
import SavedMovies from "../SavedMovies/SavedMovies.jsx";

function Main({
  name,
  setLoggedIn,
  handleLogin,
  handleRegister,
  handleProfile,
  setIsError,
  outLogin,
  onDelete,
  setSuccess,
  isSuccess,
  savedMovies,
  addMovie,
  setIsBlock,
  isBlock,
}) {
  return (
    <main className="main">
      {
        {
          home: (
            <>
              <Promo />
              <AboutProject />
              <Techs />
              <AboutMe />
              <Portfolio />
            </>
          ),
          signin: (
            <>
              <Login
                name="signin"
                handleLogin={handleLogin}
                setIsError={setIsError}
              />
            </>
          ),
          signup: (
            <>
              <Register
                name="signup"
                handleRegister={handleRegister}
                setIsError={setIsError}
              />
            </>
          ),
          profile: (
            <>
              <Profile
                name="profile"
                setLoggedIn={setLoggedIn}
                handleProfile={handleProfile}
                outLogin={outLogin}
                setSuccess={setSuccess}
                isSuccess={isSuccess}
                setIsError={setIsError}
                setIsBlock={setIsBlock}
                isBlock={isBlock}
              />
            </>
          ),
          error: <Error />,
          movies: (
            <>
              <Movies
                savedMovies={savedMovies}
                addMovie={addMovie}
                setIsError={setIsError}
              />
            </>
          ),
          savedMovies: (
            <>
              <SavedMovies
                savedMovies={savedMovies}
                onDelete={onDelete}
                setIsError={setIsError}
              />
            </>
          ),
        }[name]
      }
    </main>
  );
}

export default Main;
