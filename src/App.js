import Header from "./components/header";
import GlobalStyle from "./components/assets/global.js"
import Footer from "./components/footer";
import MainPage from "./mainPage/mainPage";
import SigninPage from "./signinPage/signinPage";

function App() {
  return (
    <>
      <SigninPage />
      <GlobalStyle/>
    </>
  )
}

export default App;
