import { useState, useEffect, useContext } from "react";
import { AlbumContext } from 'context';

const useGenerateAlbum = () => {
    const { album, setAlbum } = useContext(AlbumContext)
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/album/createAlbum/")
            .then(response => response.json())
            .then(data => {
                setAlbum(data);
                setIsPending(false);
                window.localStorage.setItem('albumId', data._id);
            })
            .catch(error => {
                setIsPending(false);
                setError(error.message);
            })
    }, []);

    return [album, isPending, error]
};
export default useGenerateAlbum;