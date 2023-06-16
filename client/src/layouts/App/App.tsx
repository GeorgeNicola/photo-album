import "./CssReset.scss"
import "./variables.scss"
import "./App.scss"

import Header from "../Header/Header"
import Aside from "../Aside/Aside"
import { Album } from "../../components/"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-content">
        <Aside />
        <Album />
      </div>
    </div>
  )
}

export default App
