import "./CssReset.scss"
import "./variables.scss"
import "./App.scss"

import { useState } from 'react';

import Header from "../Header/Header"
import Aside from "../Aside/Aside"
import { Album, Preview } from "../../components/"

function App() {
  const [display, setDisplay] = useState({
    preview: false,
    album: true,
  })


  return (
    <div className="App">
      <Header display={display} setDisplay={setDisplay} />
      <div className="app-content">
        {display.preview ? <Preview /> : null}
        <Aside />
        <Album />
      </div>
    </div>
  )
}

export default App
