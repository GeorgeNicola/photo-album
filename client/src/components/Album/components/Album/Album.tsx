import './Album.scss'
import { useContext, useEffect, useState } from 'react';
import { AlbumPage } from "../index";

import { AlbumContext } from 'context';
import { AlbumType } from 'types';
import { createAlbum, loadAlbum } from 'utils';

import Button from '@mui/material/Button';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';


const Album = () => {
    const { album, setAlbum } = useContext(AlbumContext);
    const [visiblePages, setVisiblePages] = useState<number>(2);

    const goPage = (pageNumber: number) => {
        if (album == null) return

        let maxPageNumber = album.pages.length - visiblePages;
        if (pageNumber < 0) pageNumber = 0;
        if (pageNumber > maxPageNumber) pageNumber = maxPageNumber;

        const newState: AlbumType = Object.assign({}, album);
        newState.currentPage = pageNumber;
        setAlbum(newState)
    }

    const resizeListenerHandler = () => {
        if (window.innerWidth < 900) setVisiblePages(1)
        else setVisiblePages(2)
    }

    const initAlbum = async () => {
        let albumId = localStorage.getItem("albumId");

        if (albumId === null) {
            let [data, error] = await createAlbum();
            if (error) console.log("Error Creating the album")
            if (data) setAlbum(data);
        } else {
            let [data, error] = await loadAlbum(albumId)
            if (error) console.log("Error loading the album")
            if (data) setAlbum(data);
        }
    }

    useEffect(() => {
        initAlbum();

        resizeListenerHandler();
        window.addEventListener("resize", resizeListenerHandler);

        return function cleanup() {
            window.removeEventListener("resize", resizeListenerHandler)
        }
    }, [])

    if (album == null || album == undefined) return (<> Loading </>)
    return (
        <div className="album-wrapper">
            <div className="album-controls">
                <Button
                    variant="contained"
                    size="small"
                    startIcon={<NavigateBeforeIcon />}
                    onClick={() => goPage(album.currentPage - visiblePages)}>
                    <span>Prev Page</span>
                </Button>
                <Button
                    variant="contained"
                    size="small"
                    startIcon={<NavigateNextIcon />}
                    onClick={() => goPage(album.currentPage + visiblePages)}>
                    <span>Next Page</span>
                </Button>
            </div>

            <div className="album" data-current={album.currentPage}>
                {
                    <>
                        <AlbumPage key={album.currentPage} pageId={album.currentPage} pageData={album.pages[album.currentPage]} />
                        {(visiblePages == 2) ? <AlbumPage key={album.currentPage + 1} pageId={album.currentPage + 1} pageData={album.pages[album.currentPage + 1]} /> : null}
                    </>
                }
            </div>
        </div>
    )
}

export default Album;