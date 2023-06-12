import "./CssReset.scss"
import "./variables.scss"
import "./App.scss"


import Header from "../Header/Header"
import Aside from "../Aside/Aside"

//!TO DO: Add Main Section for Album
//!TO DO: Simulate a fetch request from ./data folder with setTimeout or a promise

function App() {
  return (
    <div className="App">
      <Header />
      <Aside />
    </div>
  )
}

export default App
