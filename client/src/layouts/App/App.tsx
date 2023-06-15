import "./CssReset.scss"
import "./variables.scss"
import "./App.scss"


import Header from "../Header/Header"
import Aside from "../Aside/Aside"
import { Album } from "../../components/"


//!TO DO: Add Main Section for Album
//!TO DO: Simulate a fetch request from ./data folder with setTimeout or a promise

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
