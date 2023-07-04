import { useState, useEffect } from 'react';
import { Drag } from 'components';

const ContentUnsplash = () => {
    const [search, setSearch] = useState<string>('')
    const [photos, setPhotos] = useState<string[]>([])

    const handleChage = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSearch(e.target.value)
    }

    const handleSearch = async () => {
        const accessKey = 'NDukUnO9SppUTDyCeyQSmA4N-8i_GaFOvK9FDizS1dg';
        const query = search;
        const page = 1;
        const per_page = 5
        const URL = `https://api.unsplash.com/search/photos?page=${page}&per_page=${per_page}&query=${query}&client_id=${accessKey}`

        const response = await fetch(URL)
        const data: any = await response.json()

        const photoList = data.results;
        const urlList = photoList.map((photo: any) => photo.urls.full)
        setPhotos(urlList)
    }

    return (
        <>
            <input type="text" name="search" value={search} placeholder={'Search for Images'} onChange={handleChage}></input>
            <button onClick={handleSearch}>Search</button>
            <div className="side-menu__elements side-menu--unsplash">
                {
                    photos.map((photo, i) =>
                        <Drag key={i} isDragging={true} src={photo}>
                            <img src={photo} />
                        </Drag>
                    )
                }

            </div>
        </>

    )
}

export default ContentUnsplash