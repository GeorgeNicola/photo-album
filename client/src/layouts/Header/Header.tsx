import { useState, useContext } from 'react';
import "./Header.scss";
import { AlbumContext } from 'context';
import { createAlbum, saveAlbum } from 'utils';

import { ThemeSwitch } from 'components'

import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import CreateIcon from '@mui/icons-material/Create';
import SaveIcon from '@mui/icons-material/Save';


type Props = {
  togglePreviewDisplay: () => void;
}

function Header({ togglePreviewDisplay }: Props) {
  const { album, setAlbum } = useContext(AlbumContext)
  const [isLoadingNewAlbum, setIsLoadingNewAlbum] = useState<boolean>(false)
  const [isLoadingSaveAlbum, setIsLoadingSaveAlbum] = useState<boolean>(false)


  const generateAlbumHandler = async () => {
    setIsLoadingNewAlbum(true)
    let [albumData, error] = await createAlbum();

    if (error) console.log(error)
    if (albumData) setAlbum(albumData)

    setIsLoadingNewAlbum(false)
  }

  const saveAlbumHandler = async () => {
    if (album == null) return

    setIsLoadingSaveAlbum(true)

    let [albumData, error] = await saveAlbum(album);

    if (error) console.log(error)
    if (albumData) console.log("Album Saved")

    setIsLoadingSaveAlbum(false)
  }

  return (
    <header>
      <ThemeSwitch />

      <LoadingButton
        color="secondary"
        onClick={generateAlbumHandler}
        loading={isLoadingNewAlbum}
        loadingPosition="start"
        startIcon={<CreateIcon />}
        variant="outlined"
      >
        <span>NEW Album</span>
      </LoadingButton>

      <LoadingButton
        color="secondary"
        onClick={saveAlbumHandler}
        loading={isLoadingSaveAlbum}
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="outlined"
      >
        <span>Save Album</span>
      </LoadingButton>

      <Button
        size="large"
        onClick={togglePreviewDisplay}
        variant="contained"
      >
        PREVIEW
      </Button>

      {/* <button className="button button-accent" onClick={generateAlbumHandler}>NEW Album </button>
      <button className="button button-accent" onClick={saveAlbumHandler}> Save Album </button>
      <button className="button button-accent" onClick={togglePreviewDisplay}>Preview </button> */}
    </header>
  )
}

export default Header