import './Album.scss'
import { useContext, useEffect, useState } from 'react';
import { AlbumPage } from "../index";

import { AlbumContext } from 'context';
import { AlbumType } from 'types';
import { createAlbum, loadAlbum } from 'utils';

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
            createAlbum()
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
                <button onClick={() => goPage(album.currentPage - visiblePages)}> Prev </button>
                <button onClick={() => goPage(album.currentPage + visiblePages)}> Next </button>
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