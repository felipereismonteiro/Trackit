import ReactDOM from "react-dom"
import App from "./App"

export default function index() {
  return <App/>
} 

ReactDOM.render(index(), document.querySelector(".root"))