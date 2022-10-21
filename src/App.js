import GlobalStyle from "./components/assets/global.js";

import MainPage from "./mainPage/mainPage";
import SigninPage from "./signinPage/signinPage";
import HabitsPage from "./habitsPage/habitsPage";
import TodayPage from "./todayPage/todayPage";
import HistoryPage from "./historyPage/HistoryPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cadastro" element={<SigninPage />} />
          <Route path="/habitos" element={<HabitsPage />} />
          <Route path="/hoje" element={<TodayPage />} />
          <Route path="/historico" element={<HistoryPage />} />
        </Routes>
      </BrowserRouter>

    </>
  );
};

export default App;
