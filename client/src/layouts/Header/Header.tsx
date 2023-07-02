import { useEffect, useContext } from 'react';
import "./Header.scss";
import { ThemeContext, AlbumContext } from 'context';
import { generateAlbum } from 'utils';
import { useGenerateAlbum } from 'hooks';


type Props = {
  togglePreviewDisplay: () => void;
}

function Header({ togglePreviewDisplay }: Props) {
  const { theme, setTheme } = useContext(ThemeContext)
  const { album, setAlbum } = useContext(AlbumContext)

  const generateAlbumHandler = async () => {
    let [albumData, error] = await generateAlbum();

    if (error != null) console.log(error)
    if (albumData) {
      window.localStorage.setItem('albumId', albumData._id)
      setAlbum(albumData)
    }
  }

  const saveAlbum = async () => {
    try {
      let albumData = {
        album: Object.assign({}, album)
      }
      let body = JSON.stringify(albumData);
      let albumId = localStorage.getItem("albumId");


      let response = await fetch(`http://localhost:5000/album/updateAlbum/${albumId}`, {
        method: "POST",
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: body,
      })

      let data = await response.json();
      console.log("RESPONSE: ", data)
    } catch (error) {
      console.log(error)
    }
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
      <button className="button button-accent" onClick={saveAlbum}> Save Album </button>
      <button className="button button-accent" onClick={togglePreviewDisplay}>Preview </button>
    </header>
  )
}

export default Header