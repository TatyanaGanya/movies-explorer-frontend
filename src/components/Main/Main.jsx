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

function Main({ name, setLoggedIn, activeState }) {
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
              <Login name="signin" setLoggedIn={setLoggedIn} />
            </>
          ),
          signup: (
            <>
              <Register name="signup" setLoggedIn={setLoggedIn} />
            </>
          ),
          profile: (
            <>
              <Profile name="profile" setLoggedIn={setLoggedIn} />
            </>
          ),
          error: <Error />,
          movies: (
            <>
              <Movies activeState={activeState} />
            </>
          ),
          savedMovies: (
            <>
              <SavedMovies activeState={activeState} />
            </>
          ),
        }[name]
      }
    </main>
  );
}

export default Main;
