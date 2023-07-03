import { AlbumType } from "types"

type returnType = [AlbumType | null, null | any]

const loadAlbum = async (albumId: string): Promise<returnType> => {
    try {
        let response = await fetch(`http://localhost:5000/album/getAlbum/${albumId}`)
        let data = await response.json()

        return [data, null]
    } catch (e) {
        return [null, e]
    }
}

export default loadAlbum