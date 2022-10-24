import GlobalStyle from "./components/assets/global.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Contexto } from "./components/logadoContext.js";

import MainPage from "./mainPage/mainPage";
import SigninPage from "./signinPage/signinPage";
import HabitsPage from "./habitsPage/habitsPage";
import TodayPage from "./todayPage/todayPage";
import HistoryPage from "./historyPage/HistoryPage";  


function App() {
  const [logado, setLogado] = useState()
  const [porcentagem, setPorcentagem] = useState(60)
  const [habito, setHabito] = useState([])
  const [habitosConcluidos, setHabitosConcluidos] = useState([])

  return (
        <BrowserRouter>     
        <GlobalStyle />      
          <Contexto.Provider value={{logado, setLogado, porcentagem, setPorcentagem, habito, setHabito, habitosConcluidos, setHabitosConcluidos}}>
            <Routes>        
                <Route path="/" element={<MainPage />} />
                <Route path="/cadastro" element={<SigninPage />} />
                <Route path="/habitos" element={<HabitsPage />} />
                <Route path="/hoje" element={<TodayPage />} />
                <Route path="/historico" element={<HistoryPage />} />            
            </Routes>   
          </Contexto.Provider>
        </BrowserRouter>
  );
};

export default App;
