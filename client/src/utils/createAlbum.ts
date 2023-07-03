import { AlbumType } from "types"

type returnType = [AlbumType | null, null | any]

const createAlbum = async (): Promise<returnType> => {
    try {
        let response = await fetch("http://localhost:5000/album/createAlbum/")
        let data = await response.json()

        window.localStorage.setItem('albumId', data._id)

        return [data, null]
    } catch (e) {
        return [null, e]
    }
}

export default createAlbum