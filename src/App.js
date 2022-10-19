import Header from "./components/header";
import GlobalStyle from "./components/assets/global.js";
import Footer from "./components/footer";
import MainPage from "./mainPage/mainPage";
import SigninPage from "./signinPage/signinPage";
import HabitsPage from "./habitsPage/habitsPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <HabitsPage />
    </>
  );
};

export default App;
