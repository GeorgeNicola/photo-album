import './Album.scss'

import { AlbumPage } from "../index";

const Album = () => {
    return (
        <div className="album-wrapper">
            <div className="album">
                <AlbumPage />
                <AlbumPage />
            </div>
        </div>
    )
}

export default Album;