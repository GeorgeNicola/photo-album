import "./CssReset.scss"
import "./variables.scss"
import "./App.scss"
import "./main.scss"

import { useState } from 'react';

import Header from "../Header/Header"
import Aside from "../Aside/Aside"
import { Album, Preview } from "../../components/"

function App() {
  const [display, setDisplay] = useState({
    preview: false,
    album: true,
  })

  const togglePreviewDisplay = () => {
    setDisplay(Object.assign({}, display, { preview: !display.preview }))
  }


  return (
    <div className="App">
      <Header togglePreviewDisplay={togglePreviewDisplay} />
      <div className="app-content">
        {display.preview ? <Preview /> : null}
        <Aside />
        <Album />
      </div>
    </div>
  )
}

export default App
