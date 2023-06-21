import { useEffect, useContext } from 'react';
import "./Header.scss";
import { ThemeContext } from 'context';


function Header() {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    if (theme === "dark") setTheme("light")
    else setTheme("dark")
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme ? theme : "dark");
  }, [theme])

  return (
    <header>
      <button onClick={toggleTheme}> {theme == "dark" ? "Set Light Theme" : "Set Dark Theme"} </button>
    </header>
  )
}

export default Header