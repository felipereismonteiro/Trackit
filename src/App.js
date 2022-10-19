import Header from "./components/header";
import GlobalStyle from "./components/assets/global.js"
import Footer from "./components/footer";
import MainPage from "./mainPage/mainPage";
import SigninPage from "./signinPage/signinPage";
import styled from "styled-components";

function App() {
  return (
    <>
      <GlobalStyle />
      <MainPage />
    </>
  )
}

export default App;
