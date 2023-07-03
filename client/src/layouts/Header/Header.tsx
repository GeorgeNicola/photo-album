import { useEffect, useContext } from 'react';
import "./Header.scss";
import { ThemeContext, AlbumContext } from 'context';
import { createAlbum, saveAlbum } from 'utils';
import { useGenerateAlbum } from 'hooks';


type Props = {
  togglePreviewDisplay: () => void;
}

function Header({ togglePreviewDisplay }: Props) {
  const { theme, setTheme } = useContext(ThemeContext)
  const { album, setAlbum } = useContext(AlbumContext)

  const generateAlbumHandler = async () => {
    let [albumData, error] = await createAlbum();

    if (error) console.log(error)
    if (albumData) setAlbum(albumData)
  }

  const saveAlbumHandler = async () => {
    if (album == null) return

    let [albumData, error] = await saveAlbum(album);

    if (error) console.log(error)
    if (albumData) console.log("Album Saved")
  }

  const toggleTheme = () => {
    if (theme === "dark") setTheme("light")
    else setTheme("dark")
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme ? theme : "dark");
  }, [theme])

  return (
    <header>
      <button className="button" onClick={toggleTheme}> {theme == "dark" ? "Set Light Theme" : "Set Dark Theme"} </button>
      <button className="button button-accent" onClick={generateAlbumHandler}>NEW Album </button>
      <button className="button button-accent" onClick={saveAlbumHandler}> Save Album </button>
      <button className="button button-accent" onClick={togglePreviewDisplay}>Preview </button>
    </header>
  )
}

export default Header