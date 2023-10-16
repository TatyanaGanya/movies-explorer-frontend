import Footer from "../components/Footer/Footer.jsx";
import Header from "../components/Header/Header.jsx";
import Main from "../components/Main/Main.jsx";

// loggedIn={loggedIn}
// activeState={activeState}
// openHeader={openHeader}
function ProtectedPage({ openHeader, loggedIn, activeState, ...props }) {
  return (
    <>
      <Header
        openHeader={openHeader}
        loggedIn={loggedIn}
        activeState={activeState}
      />
      <Main activeState={activeState} loggedIn={loggedIn} {...props} />
      <Footer />
    </>
  );
}
export default ProtectedPage;
