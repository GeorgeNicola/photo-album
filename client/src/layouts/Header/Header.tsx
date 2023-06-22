import { useEffect, useContext } from 'react';
import "./Header.scss";
import { ThemeContext } from 'context';


function Header({ setDisplay, display }) {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    if (theme === "dark") setTheme("light")
    else setTheme("dark")
  }

  const togglePreview = () => {
    setDisplay(Object.assign({}, display, { preview: !display.preview }))
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme ? theme : "dark");
  }, [theme])

  return (
    <header>
      <button onClick={toggleTheme}> {theme == "dark" ? "Set Light Theme" : "Set Dark Theme"} </button>
      <button onClick={togglePreview}> Toggle Preview </button>
    </header>
  )
}

export default Header