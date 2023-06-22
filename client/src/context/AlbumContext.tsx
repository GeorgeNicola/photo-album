import React, { useState, useEffect, createContext, FC } from 'react'
import { AlbumType } from 'types';

type AlbumContextType = {
    album: AlbumType | null;
    setAlbum: (album: AlbumType | null) => void;
};

type AlbumContextProviderProps = {
    children: React.ReactNode;
}

export const AlbumContext = createContext({} as AlbumContextType)

export const AlbumContextProvider: FC<AlbumContextProviderProps> = ({ children }) => {
    const [album, setAlbum] = useState<AlbumType | null>(null)

    useEffect(() => {
        console.log("Album State: ", album)
    }, [album])

    return (
        <>
            <AlbumContext.Provider value={{ album, setAlbum }}>
                {children}
            </AlbumContext.Provider>
        </>
    )
}
