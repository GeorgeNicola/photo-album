import './Album.scss'

import { AlbumPage } from "../index";

import albumData from "data/albumData";

const Album = () => {
    return (
        <div className="album-wrapper">
            <div className="album">
                {
                    albumData.pages.map((pageData, i) =>
                        <AlbumPage key={i} pageId={i} pageData={pageData} />
                    )
                }
            </div>
        </div>
    )
}

export default Album;