import { useEffect, useState } from 'react';
import "./Header.scss";

function Header() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    if (theme === "dark") setTheme("light")
    else setTheme("dark")
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme])

  return (
    <header>
      <button onClick={toggleTheme}> {theme == "dark" ? "Set Light Theme" : "Set Dark Theme"} </button>
    </header>
  )
}

export default Header