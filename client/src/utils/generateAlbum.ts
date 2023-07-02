import { AlbumType } from "types"

type returnType = {
    data: AlbumType | null;
    error: any;
}

const generateAlbum = async (): Promise<returnType> => {
    try {
        let response = await fetch("http://localhost:5000/album/createAlbum/")
        let data = await response.json()

        return [data, null]
    } catch (e) {
        return [null, e]
    }
}

export default generateAlbum