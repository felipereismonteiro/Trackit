import Header from "./components/header";
import GlobalStyle from "./components/assets/global.js";
import Footer from "./components/footer";
import MainPage from "./mainPage/mainPage";
import SigninPage from "./signinPage/signinPage";
import HabitsPage from "./habitsPage/habitsPage";
import TodayPage from "./todayPage/todayPage";
import HistoryPage from "./historyPage/HistoryPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <HistoryPage />
    </>
  );
};

export default App;
