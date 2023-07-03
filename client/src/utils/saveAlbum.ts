import { AlbumType } from "types"

type returnType = [AlbumType | null, null | any]

const saveAlbum = async (album: AlbumType): Promise<returnType> => {
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

        return [data, null]
    } catch (error) {
        return [null, error]
    }
}

export default saveAlbum