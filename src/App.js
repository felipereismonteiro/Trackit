import GlobalStyle from "./components/assets/global.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { LogadoContext } from "./components/logadoContext.js";

import MainPage from "./mainPage/mainPage";
import SigninPage from "./signinPage/signinPage";
import HabitsPage from "./habitsPage/habitsPage";
import TodayPage from "./todayPage/todayPage";
import HistoryPage from "./historyPage/HistoryPage";  


function App() {
  const [logado, setLogado] = useState()

  console.log(logado)

  return (
        <BrowserRouter>     
        <GlobalStyle />      
          <LogadoContext.Provider value={{logado, setLogado}}>
            <Routes>        
                <Route path="/" element={<MainPage />} />
                <Route path="/cadastro" element={<SigninPage />} />
                <Route path="/habitos" element={<HabitsPage />} />
                <Route path="/hoje" element={<TodayPage />} />
                <Route path="/historico" element={<HistoryPage />} />            
            </Routes>   
          </LogadoContext.Provider>
        </BrowserRouter>
  );
};

export default App;
